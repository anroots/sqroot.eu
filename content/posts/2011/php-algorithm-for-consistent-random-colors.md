---
title: PHP algorithm for consistent random colors
date: 2011-08-05
category: Learning
tags:
- php
- code
- function
- random color
- snippet
---

Here's a PHP function that returns 2 random, but (mostly) constant HEX color codes.


The function takes a single parameter - a string - and returns an array with 2 colors.

```php
    /**
     * A function that returns a random background and font color.
     * The output is constant as long as the input string remains unchanged.
     * @author Ando Roots
     * @date August 2011
     * @copyright Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
     * @link http://sqroot.eu
     * @static
     * @param string $string A random input string that determines the output colors.
     * @return array 2 colors, index 0 being random background color, index 1 gray font color,
     * it's darkness dependant on the first color.
     * Example: array(2) { [0]=> string(7) "#62FFD5" [1]=> string(6) "#9D02A" }
     */
    public static function color($string = 'test') {
        $colors = array();
        $color = array(0, 0, 0);

        // Prepare the input string.
        $string = preg_replace('/[^0-9]/', '', md5($string));

        // Determine it's length
        if (strlen($string) > 8) {
            $length = 3;
        } elseif (strlen($string) > 5) {
            $length = 2;
        } elseif (strlen($string) > 2) {
            $length = 1;
        } else {
            // Use time if all else fails
            $length = 3;
            $string = strrev(time());
        }

        // Generate background color
        $hex = '#';
        foreach ($color as $i => $c) {
            $color[$i] = (int)substr($string, $i * $length, $length);
            if ($color[$i] > 255) {
                $color[$i] = 255;
            }
            $hex .= dechex($color[$i]);
        }
        $colors[] = strtoupper($hex);

        // Generate font color
        $hex = '#';
        $darkness = abs(255- round(array_sum($color) / 3));
        $hex .= dechex($darkness).dechex($darkness).dechex($darkness);
        $colors[] = strtoupper($hex);

        return $colors;
    }
```