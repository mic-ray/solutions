# Title: RGB To Hex Conversion

### From: https://www.codewars.com/kata/513e08acc600c94f01000001

***
## Description

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

**Note:** Your answer should always be 6 characters long, the shorthand with 3 will not work here.

**The following are examples of expected output values:**

    rgb(0,0,0) # should return 000000
    rgb(255, 255, 255) # should return FFFFFF
    rgb(255, 255, 300) # should return FFFFFF
    rgb(148, 0, 211) # should return 9400D3