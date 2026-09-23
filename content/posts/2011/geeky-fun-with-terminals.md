---
title: Geeky fun with terminals
date: 2011-05-09
category: Projects
image: /content/2011/05/terminal.png
tags:
- bash
- mint
- shell
---

Linux Mint prints out an awesome fortune-greeting message every time a new terminal window is opened.

However, being a big fan of books, but not really M. Twain, I decided to swap my fortunes to quotes from S. Meyer&#039;s books.

For that, I created a new file based on `/usr/bin/mint-fortune` that grabs a random line from my textfile with Twilight quotes.

I replaced the default mint command in `/etc/bash.bashrc` with my own, installed the quotes and printer files and... voila!

So now you know what I do in lectures when it gets especially boring.

`/usr/bin/twilight-greeter` is identical to `/usr/bin/mint-fortune` except the last line.

```bash
#!/bin/bash
RANGE=3
number=$RANDOM
let "number %= $RANGE"
case $number in
        0)
                cow="moose"
                ;;
        1)
                cow="tux"
                ;;
        2)
                cow="koala"
                ;;
esac

RANGE=2
number=$RANDOM
let "number %= $RANGE"
case $number in
        0)
                command="/usr/games/cowsay"
                ;;
        1)
                command="/usr/games/cowthink"
                ;;
esac

shuf -n 1 /usr/share/twilight_quotes.txt | $command -f $cow
```