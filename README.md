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

Paste the following as your bookmark URL:

    javascript:(function(){var replacements=[{pattern:/(\d+)'(\d*)("|''|)/g,func:function(b,a,c,d,e,f){a=Math.round(100*(30.48*parseInt(a,10)+2.54*parseInt(c,10)))/100;return 230<a?b+" ("+Math.round(a)/100+"m)":b+" ("+a+"cm)"}},{pattern:/(\d+\.?\d*) ?lbs/ig,func:function(b,a,c,d){a=Math.round(45.3592*parseFloat(a))/100;return b+" ("+a+"kg)"}},{pattern:/(\d+\.?\d*) ?miles?/ig,func:function(b,a,c,d){a=Math.round(160.934*parseFloat(a))/100;return b+" ("+a+"km)"}},{pattern:/(\d+\.?\d*) ?mpg/ig,func:function(b,a,c,d){a=Math.round(100*
    (235.214/parseFloat(a)))/100;return b+" ("+a+"L / 100km)"}},{pattern:/(\d+\.?\d*) ?mph/ig,func:function(b,a,c,d){a=Math.round(160.934*parseFloat(a))/100;return b+" ("+a+"km/h)"}}];function replacePattern(b,a){if(b.nodeType===Node.TEXT_NODE)for(var c=0,d=a.length;c<d;++c)b.nodeValue=b.nodeValue.replace(a[c].pattern,a[c].func);else if(b.nodeType===Node.ELEMENT_NODE)for(c=0,d=b.childNodes.length;c<d;++c)replacePattern(b.childNodes[c],a)}replacePattern(document.body,replacements);}());


Contributions welcome
