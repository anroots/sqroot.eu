---
title: Buspad kiosk breakout
date: 2020-03-22
subtitle: Evading kiosk mode in Android tablets in bus entertainment system
category: Security
image: /content/2020/buspad/header.jpg
---

[Lux Express](https://www.luxexpress.eu/en/) is a transportation company that operates bus lines in the Baltic region.
In their fleet of more modern buses, they offer each passenger
an in-seat Android multimedia tablet, running in kiosk (restricted) mode. The tablet runs a full-screen custom application,
that has menu items for common entertainment options like a web browser, movies and music.

Due to misconfiguration of the tablet, it's possible to exit this kiosk mode and get full user-level control of the tablet.

![](/content/2020/buspad/1.jpg)

The welcome screen of the pad is the in-kiosk activity menu: watch movies, browse the web. The kiosk is running in full-screen,
with no apparent exit button (there is an exit "app" hidden away in the games section, but it requires a password).

The design goal here seems (rightfully) that random travellers should only be allowed to use the tablet in kosk mode, to entertain,
but not reconfigure the tablet or install any apps.


## Buspad kiosk breakout - steps

Here's how to break out of the full-screen kiosk app and access Android settings. This is not hacking per se, as everything required
is exposed/allowed/enabled by the tablet in it's current configuration. As of 2020-03-22, the tablets should still be vulnerable.

![](/content/2020/buspad/2.jpg)

Select "internet" from the kiosk welcome screen. Navigate to any web page.

![](/content/2020/buspad/3.jpg)

Select a word or a phrase on the web page. In Android, selecting text is done by long-pressing on a word. Choose "SHARE" from top-right.

_Wikipedia warns us that we are using an old and unsupported browser that will stop working soon. I wonder if this is a nudge to prod operators into finally updating it._

![](/content/2020/buspad/4.jpg)

Android sharing menu opens. In your phone, you'd have a bunch of apps like Twitter or Notes there as a sharing target. We are interested in the Google (launcher) app.
Select it as share target.

![](/content/2020/buspad/5.jpg)

The kiosk app moves to the background and we're now in the context of the Google app. There's a meta-search-launcher bar on top, where you can search and launch other apps on the
tablet - including apps not listed in the restricted kiosk view. We're now effectively out of the kiosk.

![](/content/2020/buspad/6.jpg)

Launch ApkInstaller app. This seems to be a custom thing designed for sideloading new apps to the device, as by default, it isn't running the Google Play app installer.

![](/content/2020/buspad/7.jpg)

We're offered the choice to manage existing apps, or to add a new app.

![](/content/2020/buspad/7.1.jpg)

Select to install a new app; and USB memory as the install source.

![](/content/2020/buspad/8.jpg)

Insert a USB drive into the front-facing USB port of the device. USB should contain .apk file to install. 

![](/content/2020/buspad/9.jpg)

From the ApkInstaller, find your .apk file from the USB and choose to install it.

![](/content/2020/buspad/10.jpg)

Android default apk policy applies - sideloading apps is not allowed.

![](/content/2020/buspad/11.jpg)

Use pad "back" buttons to exit back to the in-kiosk web browser. Launch Google app again; and from there, launch the Settings app.

![](/content/2020/buspad/12.jpg)

Go to Security and disable "Verify apps" setting.

![](/content/2020/buspad/13.jpg)

Try to install .apk file again; this time it succeeds.

![](/content/2020/buspad/14.jpg)

Installed app (Terminal Emulator) is visible from apps list.

![](/content/2020/buspad/15.jpg)

Launch the newly installed app (web -> share -> Google -> search). You're now out of the kiosk and launched an app of your
choice - be it file explorer, terminal or anything else.

## Analysis

Properly kiosking of things is hard; people have been breaking out of kioskes [for a](https://securityriskadvisors.com/blog/sitekiosk-breakout/)
[long](https://blog.kiosksimple.com/2014/11/26/a-guide-to-hacking-kiosk-applications/) [time](https://www.youtube.com/watch?v=kRFNYws1FF0).

In this instance, kiosk breakout was possible, because:

- Android default text context-action was enabled (selecting / sharing text)
- A launcher app (Google) was present and installed on the device and available as a share target
- Device had ApkInstaller present and launchable
- Front-facing USB port had data lines enabled; and Android user had permission to use it as mass-media device
- New app installation was possible

Advise for fixing this:

- Upgrade Android versions, if possible. If hardware doesn't support newer Android, consider upgrading the hardware also. It will cost, but
  these devices were installed (based on the Android version present) in 2012. Enterprises typically have an amortization time of 4...5 years for these types of devices
- Demand more quality from the pad's software-development partner. The pad has numerous quality (UI/UX) issues,
  but also quite rich attack surface and security misconfigurations
- Contract software partner to provide periodic (~2 times a year) software updates to the pads. This means Android version updates + version updates
  (security patches) to all the software running on it (the tablet has Flash 11.1 installed, released in... 2012)
- Have monitoring and alerts for the pads. If some pad launches system settings app or installs new apps - unusual, unexpected behavior - someone
  should know; and look into it. I'm fairly certain no human-noticed logs or alerts were triggered from the above activity
- Disable front-facing USB port for data access. At least deny the tablet user to access it. Percentage of users who would find a valid use-case for it is extremely low,
  but vulnerability it opens - not so low
- Remove APKInstaller from device, if possible

### Other observations

- Android version is Jelly Bean (released in Feb 2013) - this as reached end of life long ago
- The tablet and software installed there is quite old (2012) - I don't think it has received any meaningful updates since then
- It's possible to export installed .apk-s out of the device
- The custom kiosk app is poorly written. In many, many, many ways.

![](/content/2020/buspad/settings.jpg)
![](/content/2020/buspad/versions.jpg)

## Possible misuses

- Install keyloger (log everything being typed by next travellers). Imagine if a traveller decides to log in to their Facebook or an internet bank...
- Install mic / camera recorder apps (listen in on conversations) _(not sure if camera and mic are physically installed to the tablets)_
- Install generic malware (botnet node; (very slow) cryptocurrency miner)
- Track the location of the bus
- Take screenshots of the tablet (if someone has logged into any account...)


## Advise to travelers

The purpose of this public disclosure is to warn travelers:

- Do not trust the tablet - you didn't provision it; you now know it isn't properly locked; and you don't know what previous travelers have done with it
- Absolutely **do not** enter any sensitive data to the tablet. No logging in to Facebook; no logging in to your internet bank
- Use the tab only for entertainment - read news, watch movies
- Do not have sensitive conversations in the bus

## Timeline

- 2019-12 Initial discovery
- 2019-12-14 Responsibly disclosed to [CERT-EE](https://cert.ee) and Lux Express - no response from Lux Express, autoreply from CERT
- 2020-03-15 2nd disclosure to Lux Express (alternative e-mail - general info contact - no response)
- 2020-03-22 Public disclosure

## References

- [https://www.youtube.com/watch?v=vmWXtDtKD9k](https://www.youtube.com/watch?v=vmWXtDtKD9k)
- [https://riia.luxexpress.eu/en/onboard-media-content](https://riia.luxexpress.eu/en/onboard-media-content)
- [https://igra.luxexpress.eu/et/uued-bussid-liinil-tallinn-stpetersburg](https://igra.luxexpress.eu/et/uued-bussid-liinil-tallinn-stpetersburg)
