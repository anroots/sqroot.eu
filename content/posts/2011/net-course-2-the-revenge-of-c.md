---
title: ".NET Course 2"
date: 2011-04-12
subtitle: "The Revenge of C#"
category: Learning
tags:
- NET
- c#
- visual studio
---

```net
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(&quot;Pythagoras.&quot;);
            Console.Write(&quot;Kaatet 1: &quot;);
            double a = Double.Parse(Console.ReadLine());
            Console.Write(&quot;Kaatet 2: &quot;);
            double b = Double.Parse(Console.ReadLine());
            double c = Math.Sqrt((a*a) + (b*b));
            Console.Write(&quot;H&uuml;potenuus: &quot;);
            Console.WriteLine(c.ToString());
        }
    }
}
```

![Rate online](/content/2011/04/rateonline.png)
![Activate](/content/2011/04/activate.png)

# Teemad

* Objektid, klassid, nende k&auml;itumine m&auml;lus
* Meetodid, andmet&uuml;&uuml;bid
* Method overloading, operator overloading
* Konstruktor, destruktor
* private, public, protected
* Inheritance (&quot;p&auml;rimine&quot;)
* Overriding
* Setters, getters
* Abstract classes
