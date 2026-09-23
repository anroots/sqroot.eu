---
title: 'Secure Christmas'
date: 2018-12-20
subtitle: 'When security engineers send Christmas cards...'
category: Security
image: /content/2018/secure-christmas/header.jpg
---

I received solstice greetings via snail-mail from fellow security engineers in [Bigbank](https://bigbank.eu), guys I used to work with.
Only, when ethical hackers send messages, they send them... securely.

The outer envelope was marked as registered mail. Inside:

- Security stickers, because, obviously
- A merry fir tree card
    - ...but you had to enable macros to get it to show
- Security envelope, properly sealed with a security seal
    - Inside, an USB drive


![Solstice package](/content/2018/secure-christmas/package.jpg)


## USB teardown

The USB drive was named "[nimda](https://en.wikipedia.org/wiki/Nimda)" (`__<<admin` - RTL override?) and contained `insecurity.png`.


```bash
~/tmp » ls -lh
total 867M
-rw-r--r-- 1 ando ando 867M dets  17 12:34 insecurity.png

~/tmp » stat insecurity.png 
  File: insecurity.png
  Size: 908809605 	Blocks: 1775032    IO Block: 4096   regular file
Device: fd00h/64768d	Inode: 1447295     Links: 1
Access: (0644/-rw-r--r--)  Uid: ( 1000/    ando)   Gid: ( 1000/    ando)
Access: 2018-12-20 18:28:02.900991000 +0200
Modify: 2018-12-17 12:34:24.000000000 +0200
Change: 2018-12-20 18:28:02.202816787 +0200
 Birth: -

~/tmp » file insecurity.png 
insecurity.png: PNG image data, 300 x 300, 8-bit colormap, non-interlaced
```


So, it is (actually) a `300x300px` .PNG image. The obvious question though - WTF is up with the `867M` file size?
Interestingly, Nautilus had no problems displaying the thumbnail.

![PNG thumbnail](/content/2018/secure-christmas/png-thumb.png)

It's my avatar.

Maybe the guys used [PNG metadata](https://www.w3.org/TR/PNG/#11textinfo) to hide a hidden message or artificially
enlarge the file size? [Let's inspect](/content/2018/secure-christmas/metadata.txt) with

```bash
$ identify -verbose insecurity.png
```

Seems like not. What about `hexdump`, this should give an indication of what's actually there...

```bash
$ hexdump -C insecurity.png -n 90000 | less
```

![PNG hexdump](/content/2018/secure-christmas/png-hex1.png)

The file starts with a `.png` image, as expected. This is why Nautilus was able to render the thumbnail.
However, scrolling down, we see that at one point not far into the file, the file ends with
`IEND` marker, which [according to .PNG specification](https://www.w3.org/TR/PNG/#11IEND),
"marks the end of the PNG datastream".

![PNG hexdump](/content/2018/secure-christmas/png-hex2.png)

What follows makes it clear why the file was so large.

![PNG hexdump](/content/2018/secure-christmas/png-hex3.png)

The guys have hidden the latest `.iso` of Kali Linux into the `.PNG` file.

Have you ever thought how to hide your hacking distros? An image* will do.

## Card teardown

The printed-out card they sent had two sides: one Word document, directing the user to
enable content, the other wishing merry Christmas.

![Enable macros](/content/2018/secure-christmas/macros.jpg)

![Solstice card](/content/2018/secure-christmas/card.jpg)

Most people don't know this, but whenever you print something with a color printer, the printer
[embeds tiny tracking](https://en.wikipedia.org/wiki/Machine_Identification_Code)
[fingerprints in the paper](http://seeingyellow.com/), in yellow color.
You won't be able to see it with a naked eye, but in case it's ever needed,
this marker will be able to identify from which printer a particular paper came from.
This is how they were able to [identify a whistleblower in NSA](https://mashable.com/2017/06/06/printer-dots-nsa-leak).

Let's see if the markers (or any other hidden messages) are present in the card.

We'll start by taking a high-resolution scan (best quality possible `<600dpi`) of the paper.

The resulting `.PDF` can be opened in Gimp.

![Card scan in Gimp](/content/2018/secure-christmas/gimp.png)

Using the color Channels dialog, we'll hide the Red and Green color channels, leaving only the blue.
And zoom in.

![Card scan in Gimp](/content/2018/secure-christmas/gimp2.png)

Looking closely, we can see tiny black dots with the same pattern, distributed across the page.
Zooming in on one of them gives us the unique fingerprint of the printer in questions.

![Printer fingerprint](/content/2018/secure-christmas/printer-fingerprint.png)

So, if you ever receive printouts with the same fingerprint, you know it came from their printer.

-----------

All-in-all, an excellent hackish solstice wish. Thanks, guys!

Bigbank Information Security Team (ISEC) is a blue team of hackers, who tries to keep the bank safe from
exploitation and data breaches.
