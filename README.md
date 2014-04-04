#Units

Safari extension to convert imperial units embedded in text to their metric equivalent.

###Download

Download from [here](https://github.com/mirosval/Units-Safari-Extension/blob/master/units.safariextz?raw=true)

###Example
   
`6'2"` will be replaced with `6'2" (187.96cm)`

###Unit support

For now it supports the following conversions:

* Feet + inches to cm or m
* lbs to kg
* miles to km
* miles per gallon to litres per 100 km
* miles per hour to KM/H

###Bookmarklet

If you don't use Safari, the code still works as a bookmarklet.

Drag <a href="javascript%3A(function()%7Bvar%20replacements%3D%5B%7Bpattern%3A%2F(%5Cd%2B)%27(%5Cd*)(%22%7C%27%27%7C)%2Fg%2Cfunc%3Afunction(b%2Ca%2Cc%2Cd%2Ce%2Cf)%7Ba%3DMath.round(100*(30.48*parseInt(a%2C10)%2B2.54*parseInt(c%2C10)))%2F100%3Breturn%20230%3Ca%3Fb%2B%22%20(%22%2BMath.round(a)%2F100%2B%22m)%22%3Ab%2B%22%20(%22%2Ba%2B%22cm)%22%7D%7D%2C%7Bpattern%3A%2F(%5Cd%2B%5C.%3F%5Cd*)%20%3Flbs%2Fig%2Cfunc%3Afunction(b%2Ca%2Cc%2Cd)%7Ba%3DMath.round(45.3592*parseFloat(a))%2F100%3Breturn%20b%2B%22%20(%22%2Ba%2B%22kg)%22%7D%7D%2C%7Bpattern%3A%2F(%5Cd%2B%5C.%3F%5Cd*)%20%3Fmiles%3F%2Fig%2Cfunc%3Afunction(b%2Ca%2Cc%2Cd)%7Ba%3DMath.round(160.934*parseFloat(a))%2F100%3Breturn%20b%2B%22%20(%22%2Ba%2B%22km)%22%7D%7D%2C%7Bpattern%3A%2F(%5Cd%2B%5C.%3F%5Cd*)%20%3Fmpg%2Fig%2Cfunc%3Afunction(b%2Ca%2Cc%2Cd)%7Ba%3DMath.round(100*%0A(235.214%2FparseFloat(a)))%2F100%3Breturn%20b%2B%22%20(%22%2Ba%2B%22L%20%2F%20100km)%22%7D%7D%2C%7Bpattern%3A%2F(%5Cd%2B%5C.%3F%5Cd*)%20%3Fmph%2Fig%2Cfunc%3Afunction(b%2Ca%2Cc%2Cd)%7Ba%3DMath.round(160.934*parseFloat(a))%2F100%3Breturn%20b%2B%22%20(%22%2Ba%2B%22km%2Fh)%22%7D%7D%5D%3Bfunction%20replacePattern(b%2Ca)%7Bif(b.nodeType%3D%3D%3DNode.TEXT_NODE)for(var%20c%3D0%2Cd%3Da.length%3Bc%3Cd%3B%2B%2Bc)b.nodeValue%3Db.nodeValue.replace(a%5Bc%5D.pattern%2Ca%5Bc%5D.func)%3Belse%20if(b.nodeType%3D%3D%3DNode.ELEMENT_NODE)for(c%3D0%2Cd%3Db.childNodes.length%3Bc%3Cd%3B%2B%2Bc)replacePattern(b.childNodes%5Bc%5D%2Ca)%7DreplacePattern(document.body%2Creplacements)%3B%7D())%3B%0A">this link</a> into your bookmarks.

Contributions welcome
