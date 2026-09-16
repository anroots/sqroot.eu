---
title: 'Python: SMS from Skype'
date: 2009-08-12
category: Projects
tags:
- linux
- python
- script
- skype
- sms
---
Mõtlesin välja mooduse, kuidas oma koduarvutist läbi Skype telefonile SMS teateid saata. Sain neti abiga valmis sellise python skripti:

::gist{id="2656890" file="skype_sms.py"}
::

Sõnumi saatmiseks käivitan lihtsalt käsu:

```bash
$ python SkypeSMS.py +37258****** 'Sulle saabus uus e-mail'
```

Nüüd tuleb ainult välja mõelda praktiline kasutus. Äkki deluge torrenti kliendile - et teada saada, millal torrentid valmis saavad? Ühe sõnumi hind on natuke üle krooni - kallim kui telefonilt telefonile.
