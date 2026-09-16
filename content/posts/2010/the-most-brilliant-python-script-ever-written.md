---
title: The most brilliant python script ever written
date: 2010-07-20
category: Projects
tags:
- python
- script
- toy
---


```python
#!/usr/bin/python -tt

# The most brilliant (Python) script ever created.
# Fun for the whole family.

import sys

def main():
  
  print ''
  dumbUser = 1

# Ask the user if (s)he's dumb
  while(dumbUser):
    answer = raw_input('Are you dumb? ')
    if answer == 'yes':
      sys.exit(0)

if __name__ == '__main__':
  main()

```