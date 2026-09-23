---
title: Povi Päris Pythoni Progremise Päevad
date: 2011-07-25
category: Learning
---

Povi &otilde;petab Pythonit progema! Kooli&otilde;pilastele-&otilde;petajatel?e ja Povisse praktikale tulevatele &uuml;li&otilde;pilastele tasuta!

# Day #1: My solutions

## Apache log analyzer

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = 'Ando'

print "Apache log analyzer"

lines = 0

os = {'win': 0,
      'linux': 0,
      'mac': 0,
      'unknown': 0
} # 3 major OS-s

percentages = {'win': 0,
               'linux': 0,
               'mac': 0,
               'unknown': 0
} # Holds the percentages

fail = '/var/log/apache2/access.log'
print "Logfile is ", fail

for line in open(fail, 'r').readlines():
    if (line.find('Linux') != -1):
        os['linux'] += 1
    elif (line.find('Windows') != -1):
        os['win'] += 1
    elif (line.find('Mac') != -1):
        os['mac'] += 1
    else:
        os['unknown'] += 1
    lines += 1

print "Number of log entries:", lines
print ""

for name in os:
    if (os[name] > 0 and lines > 0):
        percentages[name] = (os[name]*1.0 / lines*1.0) * 100

    print name.upper() + ', %i times, %f%%' % (os[name], percentages[name])

print "nEND"
```


## Openssh r&uuml;nnak

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = 'Ando'

fail = 'auth.log'
print "Anal&uuml;&uuml;sin SSH logifaili", fail
print ""

counter = {} # Holds the IP addresses and request counts

for line in open(fail, 'r'): # Read logfile line by line
    if ('Failed' in line and 'from' in line):
        ip = line[line.find('from '):line.find(' port')] # Get the IP address of the attacker

        # Increase counter for that IP
        if (ip in counter):
            counter[ip] += 1
        else:
            counter[ip] = 1

# Print the results
for item in sorted(counter, key=counter.get):
    print "Aadressilt %s r&uuml;nnakuid %i" % (item, counter[item])

print "nEND"
```

# Simple SAMBA conf

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = 'Ando'

import sys
import os
import ConfigParser

# Reads and modifies smb.conf file
CONFIG_FILE = 'smb.conf'
NEW_FILE = 'new_smb.conf'

if (len(sys.argv) == 1):
    print "USAGE: ./smb.py add|show folder_path"
    exit()

# This can be easily expanded
action = 'show'
if (sys.argv[1] == 'add'):
    action = 'add'

print "Reading config file", CONFIG_FILE
config = ConfigParser.RawConfigParser()
config.read(CONFIG_FILE)

# Add a new section to the config file
if (action == 'add'):
    try:
        folder_name = sys.argv[2].split('/')[-1] # Get the last name in the path
        config.add_section(folder_name)
        config.set(folder_name, 'browsable', 'true')
        config.set(folder_name, 'read only', 'false')
        config.set(folder_name, 'path', sys.argv[2])

        # Write the new file
        with open(NEW_FILE, 'w+') as configfile:
            config.write(configfile)

        print "Wrote new config to", NEW_FILE

        # Restart SMBD
        print "Restarting smbd..."
        result = os.popen('service smbd restart').read() # Try to restart Samba

        if ('start/running' in result):
            print "SAMBA sucesfully restarted with the new settings!"
        else:
            print "nSAMBA restart failed, must be root!"

    except IndexError:
        pass

# List all share sections
else:
    for folder in config.sections():
        print "Found shared folder", folder

print "END"
```

## GParted

```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
__author__ = 'Ando'

import parted

print "Listing disks and partitions on this machine"
print ""

devices = parted.getAllDevices()

for device in devices:
    disk = parted.Disk(device)

    print "* %i GB device '%s'" % (device.getSize(unit='GB'), device.model)
    for partition in disk.partitions:

        type = 'Unknown'
        try:
            type = partition.fileSystem.type
        except:
            pass

        print "t* 33[95m%i33[0m GB t33[94m%s33[0m 33[91m%s33[0m" % (partition.getSize(unit='GB'), type, partition.path)
print "END"
```