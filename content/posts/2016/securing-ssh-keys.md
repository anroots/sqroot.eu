---
title: Securing SSH Keys
date: 2016-04-14
subtitle: Increasing key security by storing the private key on an encrypted USB drive
category: Software Development
---

Recently, due to some changes at the workplace, I've been re-evaluating the practices I use to secure my secrets - particularly, my access credentials and specifically, my SSH key pair.

This post lists the changes I made to stay more secure and sleep better at night. I will narrow the focus to protecting SSH keys and will not talk about other considerations such as BIOS passwords and encrypted OS hard-drives.

# The Situation Before

I had a password-less 2048-bit RSA key in `~/.ssh/id_rsa`. It was quick to use and convenient, but left me wide-open to exploitation by whoever had read access to my `.ssh` directory - such as any program running under my user or `root`.

Adding a password to the key encrypts it, however the drawback is that you need to enter a password every time the key is used - which, depending on your work, might be ~40 times a day ([1](#note-1)), so I had not done so.

# Things To Change

After consulting my colleagues, in-house security practices and a bit of online research, I decided to:

- generate a new key with improved security using 256-bit ECDSA, not 2048-bit RSA
- password-protect the private key
- store the key on an encrypted USB drive and load it to memory for use

This would protect the key with a password (something I know) and store it externally (something I own), effectively requiring 2-factor authentication before the key can be used.

# Creating The Encrypted USB Drive

Why store your SSH key on a USB stick? Think about it: what happens, when...

- your work PC is not disk-encrypted and I (the janitor) have physical access to your machine after-hours?
- you run my open-source application that, by the way, e-mails me the contents of your `~/.ssh` folder?
- you get infected with ransomware?

All of these cases (and more) are examples on how someone might get access to the files on your HDD. Storing the key on external media (and loading it in-memory, then dismounting) removes this problem: the key is loaded into memory once, then removed from the system.

Obviously, the thumb-drive itself needs to be encrypted to protect against theft or loss.

## Encrypting the Drive

I downloaded and installed [VeraCrypt](https://veracrypt.codeplex.com). It's a successor to [TrueCrypt](https://en.wikipedia.org/wiki/TrueCrypt) and (so far) looks the best alternative to the original.

Creating an encrypted USB drive with VeraCrypt is relatively straightforward - instructions (with pictures) can be [found here](https://www.deepdotweb.com/2015/02/09/veracrypt-tutorial-how-to-encrypt-usb-drive).

![Creating the volume](/content/2016/04/ssh/create-volume.png)

I also needed a new password for the USB encryption - something easy to remember, but difficult enough to brute force. Techniques like `CatRanOverRoad` (concatenating dictionary words together) or using [Leet](https://en.wikipedia.org/wiki/Leet)-speak (`p@$$word`) are not secure.

The [Bruce Schneier scheme](https://www.schneier.com/blog/archives/2014/03/choosing_secure_1.html) offers an easy-to remember way for generating a new, long, memorable and (looking at it) completely gibberish password - it looked something like `WIw7,mstmsr! iTt.`. It has mixed case, numbers and symbols in addition to being quite long and not a dictionary-word or a name.

# Creating the New SSH Key

My previous key was a password-less 2048-bit RSA key. I wanted to add a password and upgrade the security to RSA 4096 bits.

[After](https://blog.cloudflare.com/ecdsa-the-digital-signature-algorithm-of-a-better-internet) [some](http://martin.kleppmann.com/2013/05/24/improving-security-of-ssh-private-keys.html) [research](http://www.tedunangst.com/flak/post/new-openssh-key-format-and-bcrypt-pbkdf) about SSH key algorithm security I decided to switch over from RSA to a new an improved algorithm, ECDSA.

The following command generates a SSH key using ECDSA with 64 iterations (the default is 16) and saves it to the specified file.

```bash
$ ssh-keygen -t ed25519 -a 64 -f /media/veracrypt1/id_ed25519
```

ECDSA keys are not supported on older OpenSSH servers (older than `5.7`), but this was not a problem for me ([2](#note-2)). When prompted for a password, I set one - again, a random-looking, long one - and saved the key directly to an encrypted volume (this does not save it to my "plain" HDD at all ([3](#note-3))).

# Automating Key Use

The reason I generated my previous key without the password was convenience: I was under the impression that you need to enter the password for the key every time you use it. Now, I know better - a SSH utility, `ssh-agent`, allows you to load the key into memory - once - and use it without re-prompting for a password.

This allows me to use the following workflow:

- every morning, I would arrive to work and unlock my PC (I usually log out of Ubuntu / Unity for I have little faith in the lock screen)
- I would then insert my encrypted USB stick, mount and unlock it and run `ssh-agent` to load the key from it into memory
- after the key has been loaded I'm free to unplug the USB stick
- they key will be purged from the memory automatically when the work-day ends

## Starting ssh-agent

`ssh-agent` might not be automatically started on login. If the following command prints a PID number, the agent is already running - everything should be fine.

```bash
$ pidof ssh-agent
```

I'm using Unity with Ubuntu 15.10; the agent was not auto-started. My shell environment is (oh-my) Zsh, which has a [plugin for starting ssh-agent](https://stackoverflow.com/questions/21965611/how-can-i-run-the-ssh-agent-auto-in-the-zsh-environment) on login.

Be aware of the [security pitfalls](http://rabexc.org/posts/pitfalls-of-ssh-agents) of running an agent. For example: the agent will stay running, even if you log out of Unity. To automatically stop `ssh-agent` when I log out, I created the file `~/.config/upstart/desktopClose.conf` with the following content:

```
description "Desktop Close Task"
start on session-end
task
script
  killall ssh-agent
end script
```

A note about [SSH Agent Forwarding](http://www.unixwiz.net/techtips/ssh-agent-forwarding.html): I chose to leave it disabled as enabling it introduces [additional security risks](https://heipei.github.io/2015/02/26/SSH-Agent-Forwarding-considered-harmful), especially in a shared-server environment.

## Loading Keys Automatically

When `ssh-agent` starts, the keyring is empty - there are no loaded SSH keys.

```
$ ssh-add -l
The agent has no identities.
```
I want the system to load my key automatically when I enter the USB drive. This saves me ~30 seconds of typing time each day.

I created a new [udev](https://www.linux.com/news/udev-introduction-device-management-modern-linux-system) rule, `/etc/udev/rules.d/85-veracrypt.rules`:

```
ACTION=="add", KERNEL=="sd?", ATTRS{serial}=="AC220XXXXXXXXXXXXX", RUN+="/usr/local/bin/load-ssh-keys"
```

The rule will be loaded automatically when the machine starts. To load it manually, without restarting, one can run `udevadm control --reload-rules`.

The new rule configures `udev` to run the `load-ssh-keys` program every time I insert my USB key. Note that the rule applies for only one specific key as it is bound by a serial number. To find out the serial number of the USB key, I ran `udevadm info -a -n sdc`.

### load-ssh-keys.sh

The `load-ssh-keys` program works as follows. First, it prompts me for a password to decrypt the USB drive.

![Decrypting the volume](/content/2016/04/ssh/unlock-volume.png)

If the password is correct, the volume is mounted in read-only mode. Next, the script tries to load the SSH key from the USB into `ssh-agent` (and prompts for the SSH key password).

![Unlocking the SSH key](/content/2016/04/ssh/unlock-key.png)

When this succeeds, a success notification is displayed and the drive will be unmounted.

![OK notification](/content/2016/04/ssh/ok-notification.png)

I use the `-c` flag with `ssh-add`. This prompts me for confirmation every time `ssh-agent` wants to use my key. It's an additional manual step, but avoids issues where some other actor tries to access the agent without my knowledge.

![Key use confirmation](/content/2016/04/ssh/key-use-prompt.png)

The script can be seen below (and on [GitHub](https://gist.github.com/anroots/25c82171f49aa09390f3a22cf29254db)).

::gist{id="25c82171f49aa09390f3a22cf29254db"}
::

# Backups

Once the USB drive was "ready", I created backups of it following the *[3-2-1](http://blog.trendmicro.com/trendlabs-security-intelligence/world-backup-day-the-3-2-1-rule)* rule:

> "If you are backing something up, you should have at least three copies, in two different formats, with one of those copies off-site."

That way, even if I loose my keyring, I still have access to my private key.

# Conclusion

Learning more about SSH security and implementing the above-mentioned practices gives me more peace-of-mind. Previously, I had no protection whatsoever. Now, my key is protected with 2-factor authentication and literally in my pocket at all times, where it's safe*(r)* from foreign crackers.

> Security is something you know, something you have, and something you are. - [Bruce Schneier](http://tammersaleh.com/posts/building-an-encrypted-usb-drive-for-your-ssh-keys-in-os-x)


**Update** _(2017-04-30)_: John Doe has [created his version of a script](https://bitbucket.org/johnniedoe/ssh-loader) to automate loading keys from VeraCrypt to `ssh-agent`. I have moved on from USB / VeraCrypt and started using [ePass](https://www.ftsafe.com/onlinestore/product?id=3) as a key-storage. I hear it's possible to use a YubiKey for SSH key storage, as soon as I'm able, I shall look into that.

-------

<p id="note-1">(1): Encrypted private keys require the password on every use, but this can be circumvented by using <code>ssh-agent</code>.</p>
<p id="note-2">(2): ECDSA keys turned out to be problematic after all, due to some specific software we use that did not support them. I reverted to a 4096-bit RSA keys, which is still more secure than a 2048-bit one.</p>
<p id="note-3">(3): Even if you save a file to your Desktop, then move it somewhere else, the file is not (actually) <a href="http://www.howtogeek.com/125521/htg-explains-why-deleted-files-can-be-recovered-and-how-you-can-prevent-it">immediately deleted</a> an can be recovered from the disk.</p>

*This article contains a lot of technical information. If you find a fault, please let me know.*
