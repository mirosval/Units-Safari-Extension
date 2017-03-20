# Units

Safari extension to convert imperial units embedded in text to their metric equivalent.

### Download

Download from [here](https://github.com/mirosval/Units-Safari-Extension/blob/master/units.safariextz?raw=true)

### Example

`6'2"` will be replaced with `6'2" (187.96cm)`

### Unit support

For now it supports the following conversions:

* Feet + inches to cm or m
* lbs to kg
* miles to km
* miles per gallon to litres per 100 km
* miles per hour to KM/H

### Bookmarklet

If you don't use Safari, the code still works as a bookmarklet. Created using [bookmarkleter](http://chriszarate.github.io/bookmarkleter/)

Paste the following as your bookmark URL:

    javascript:void%20function(){function%20n(n){return%22%20(%22+n+%22)%22}function%20e(e,r,t,a,o,u){t=null!=t%26%26t.trim().length%3E0%3Ft:0;var%20d=Math.round(100*(30.48*parseInt(r,10)+2.54*parseInt(t,10)))/100;if(Number.isNaN(d))return%20e;var%20i=void%200!=u%3Fu.slice(0,o):%22%22;return%20i=i.split(%22%22).reverse().join(%22%22),/^(%3F:[^0-9]+%3F)'\s/.test(i)%3Fe:d%3E230%3Fe+n(Math.round(d)/100+%22m%22):e+n(d+%22cm%22)}function%20r(n,e){if(n.nodeType===Node.TEXT_NODE)for(var%20t=0,o=e.length;o%3Et;++t)n.nodeValue=n.nodeValue.replace(e[t].pattern,e[t].func);else%20if(n.nodeType===Node.ELEMENT_NODE%26%26!a.includes(n.tagName.toLowerCase()))for(var%20t=0,u=n.childNodes.length;u%3Et;++t)r(n.childNodes[t],e)}var%20t=[{pattern:/(\d+)'(\d*)(%22|''|)/g,func:e},{pattern:/(\d+)ft%20%3F(\d*)in/g,func:e},{pattern:/(\d+\.%3F\d*)%20%3Fpounds%3F/gi,func:function(e,r,t,a){var%20o=Math.round(45.3592*parseFloat(r))/100;return%20e+n(o+%22kg%22)}},{pattern:/(\d+\.%3F\d*)%20%3Flbs%3F/gi,func:function(e,r,t,a){var%20o=Math.round(45.3592*parseFloat(r))/100;return%20e+n(o+%22kg%22)}},{pattern:/((\d+,%3F)+\.%3F\d*)%20%3Fmiles%3F/gi,func:function(e,r,t,a){var%20r=parseFloat(r.replace(%22,%22,%22%22)),o=Math.round(160.934*r)/100;return%20e+n(o+%22km%22)}},{pattern:/(\d+\.%3F\d*)%20%3Fmpg/gi,func:function(e,r,t,a){var%20o=Math.round(100*(235.214/parseFloat(r)))/100;return%20e+n(o+%22L%20/%20100km%22)}},{pattern:/(\d+\.%3F\d*)%20%3Fmph/gi,func:function(e,r,t,a){var%20o=Math.round(160.934*parseFloat(r))/100;return%20e+n(o+%22km/h%22)}}],a=[%22code%22,%22pre%22,%22xmp%22];r(document.body,t)}();


Contributions welcome

### Contributors

[Manu Wallner](https://github.com/milch)
[Carlos Fenollosa](https://github.com/cfenollosa)
