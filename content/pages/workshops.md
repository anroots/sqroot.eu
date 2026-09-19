---
title: "Workshops"
description: "I run practical workshops that teach engineers new technology skills"
excerpt: "Practical workshops that teach engineers new technology skills."
image: /content/site/workshops/header.jpg
---

I run practical workshops that teach engineers new technology skills.
This service is directed towards companies: invite me to teach a classroom of
your engineers, and level up their dev|sec|ops skills.

The following workshops are available. Get in touch to discuss possibilities,
if you need a custom workshop on a particular topic not yet listed.


## 1 - HTTP security headers


This is a 4-hour practical technical workshop for engineers on using [HTTP security headers](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project)
to improve client side security on the web.


- **Duration:** 5 hours (1.5h of theory / 2.5h of lab work)
- **Target audience:** web developers (backend, frontend); system administrators who work with web servers; web testers; security specialists
- **Expected outcome:** Participants are aware on available client side HTTP security controls; what protections they provide; and how to configure them. Participants have needed basics to start implementing learnings in their production applications.

The training consists of ~90 minutes of theory and ~150 minutes of hands on lab work, where participants have to apply learnings to secure a real website.

#### Topics covered

- What are security headers and how they protect browsers / customers
- How security headers can be used to mitigate common front-end attacks
- CSP (Content Security Policy)
- Cookie security
- HSTS (HTTP Strict Transport Security)
- HTTPS redirects, the correct way
- Referrer Policy
- Feature Policy
- Subresource Integrity; supply chain security
- Expect-CT; Certificate Transparency
- Deprecated security headers
- XSS and browser-based protection against it
- CORS


<div class="not-prose my-10 grid grid-cols-2 gap-4 md:grid-cols-4">
  <a href="/content/site/workshops/http-sec-headers/slide1.png" target="_blank" class="block rounded-sm border border-neutral-200 p-1 transition hover:border-brand dark:border-neutral-700"><img class="h-auto w-full" src="/content/site/workshops/http-sec-headers/slide1.png" alt="Slide sample" loading="lazy"></a>
  <a href="/content/site/workshops/http-sec-headers/slide2.png" target="_blank" class="block rounded-sm border border-neutral-200 p-1 transition hover:border-brand dark:border-neutral-700"><img class="h-auto w-full" src="/content/site/workshops/http-sec-headers/slide2.png" alt="Slide sample" loading="lazy"></a>
  <a href="/content/site/workshops/http-sec-headers/slide3.png" target="_blank" class="block rounded-sm border border-neutral-200 p-1 transition hover:border-brand dark:border-neutral-700"><img class="h-auto w-full" src="/content/site/workshops/http-sec-headers/slide3.png" alt="Slide sample" loading="lazy"></a>
  <a href="/content/site/workshops/http-sec-headers/slide4.png" target="_blank" class="block rounded-sm border border-neutral-200 p-1 transition hover:border-brand dark:border-neutral-700"><img class="h-auto w-full" src="/content/site/workshops/http-sec-headers/slide4.png" alt="Hacked website" loading="lazy"></a>
</div>

<div class="not-prose my-10 flex flex-wrap justify-center gap-4">
  <a href="/content/site/workshops/http-sec-headers/http-sec-headers-training-brief.pdf" class="btn">Training brief (pdf)</a>
  <a href="/content/site/workshops/http-sec-headers/http-sec-headers-slides-sample.pdf" class="btn">Sample of slide deck</a>
</div>

Would you benefit from this workshop? [Test your website](https://observatory.mozilla.org/)
to see how well you are doing with implementing HTTP Security Headers. Ideally, your site would get an "A" rating.

-----------------


## 2 - TLS and HTTPS basics

_This workshop is still in development._

This is a 4-hour practical technical workshop that introduces engineers to the basics of TLS and HTTPS.

Engineers regularly need to work with web servers and encrypted TLS/HTTPS connections. Whether it be configuring a web server with a TLS certificate from scratch, or writing
code that requests a resource over HTTPS, it is important that connection security is configured correctly.

Making sense of certificates and keys might be daunting at first. And so, too often, when an engineer encounters a certificate error, we see code commits that set `CURLOPT_SSL_VERIFYPEER` to `false`,
with a commit message "Fix failing HTTP calls".

From user-facing view, internal web assets and development environments are often misconfigured and throw HTTPS certificate security warnings, which
the visitor is trained to bypass. That should not be the norm.

This workshop teaches participants basic terminology and concepts involved in making HTTPS work correctly and securely. Getting rid of certificate errors is easier than one might imagine - and you'll
be glad of a well-set-up TLS in the rare case when malicious actors start poking at your web site.


- **Duration:** 4 hours (1.5h of theory / 2.5h of lab work)
- **Target audience:** developers; system administrators; testers; security specialists, devops engineers, full stack developers
- **Expected outcome:** Participants have basic understanding of the PKI trust model and certificates involved in creating a TLS/HTTPS connection. Participants are able to diagnose and fix
  common TLS errors 

The training consists of 90 minutes of theory and 150 minutes of hands on lab work, where participants have to apply learnings to secure a real website.

#### Topics covered

- Certificate Authorities and PKI trust chains
- Public certificates and private keys
- Certificate Signing Requests and process of requesting a signed certificate
- How to set up HTTPS on a web server
- Common reasons for certificate errors
- HSTS
- Certificate Transparency Logs and Expect-CT
- CA root stores and installing CA-s

-----------------

## Workshop audience

The workshops are directed towards technology professionals: programmers, devops engineers,
full-stack engineers, frontend engineers, system administrators, security engineers and testers.

All workshops are for in-person sessions only, ie no remote video participants.
This is to facilitate effective communication and support from the trainer during practical labs.

## Price

Price of the workshop is for the full training session and isn't affected by the number of participants (although workshops have minimum and maximum
participant limits). The price of a single training is generally greatly smaller than sending the participants to a similar training individually.

Price can be affected by availability, special requests and travel expenses (if any). Participants get training materials (slides and any extra supporting material, if any)
after the training and are welcome to use it internally.

## Booking

Get in touch via e-mail - <code class="reverse-text">ue.toorqs@odna</code>.
