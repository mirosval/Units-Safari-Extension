# Units

Safari extension to convert imperial units embedded in text to their metric equivalent.

### Download

Download from [here](https://github.com/mirosval/Units-Safari-Extension/blob/master/units.safariextz?raw=true)

### Example

`6'2"` will be replaced with `6'2" (187.96cm)`

### Unit support

For now it supports the following conversions:

* Feet + inches to cm or m
* Lbs to kg
* Miles to km
* Miles per gallon to litres per 100 km
* Miles per hour to KM/H
* Time 1/21/16 1pm to 21.01.2016 13:00

### Bookmarklet

If you don't use Safari, the code still works as a bookmarklet. Created using [bookmarkleter](http://chriszarate.github.io/bookmarkleter/)

Paste the following as your bookmark URL:

    javascript:!function(){function%20t(t){return%22%20(%22+t+%22)%22}function%20n(n,e,r,a,o,d){r=null!=r%26%26r.trim().length%3E0%3Fr:0;var%20u=Math.round(100*(30.48*parseInt(e,10)+2.54*parseInt(r,10)))/100;if(Number.isNaN(u))return%20n;var%20i=void%200!=d%3Fd.slice(0,o):%22%22;return%20i=i.split(%22%22).reverse().join(%22%22),/^(%3F:[^0-9]+%3F)'\s/.test(i)%3Fn:u%3E230%3Fn+t(Math.round(u)/100+%22m%22):n+t(u+%22cm%22)}function%20e(t,n){if(t%3C=1)return%220%22+t;var%20e=n-Math.ceil(Math.log10(t));return%200==e%3Ft:%220%22.repeat(e)+t}function%20r(t,n){if(t.nodeType===Node.TEXT_NODE)for(var%20e=0,a=n.length;e%3Ca;++e)t.nodeValue=t.nodeValue.replace(n[e].pattern,n[e].func);else%20if(t.nodeType===Node.ELEMENT_NODE%26%26!o.includes(t.tagName.toLowerCase()))for(var%20e=0,d=t.childNodes.length;e%3Cd;++e)r(t.childNodes[e],n)}var%20a=[{pattern:/(\d+)'(\d*)(%22|''|)/g,func:n},{pattern:/(\d+)ft%20%3F(\d*)in/g,func:n},{pattern:/(\d+\.%3F\d*)%20%3Fpounds%3F/gi,func:function(n,e,r,a){return%20n+t(Math.round(.453592*parseFloat(e)*100)/100+%22kg%22)}},{pattern:/(\d+\.%3F\d*)%20%3Flbs%3F/gi,func:function(n,e,r,a){return%20n+t(Math.round(.453592*parseFloat(e)*100)/100+%22kg%22)}},{pattern:/((\d+,%3F)+\.%3F\d*)%20%3Fmiles%3F/gi,func:function(n,e,r,a){var%20e=parseFloat(e.replace(%22,%22,%22%22));return%20n+t(Math.round(1.60934*e*100)/100+%22km%22)}},{pattern:/(\d+\.%3F\d*)%20%3Fmpg/gi,func:function(n,e,r,a){return%20n+t(Math.round(235.214/parseFloat(e)*100)/100+%22L%20/%20100km%22)}},{pattern:/(\d+\.%3F\d*)%20%3Fmph/gi,func:function(n,e,r,a){return%20n+t(Math.round(1.60934*parseFloat(e)*100)/100+%22km/h%22)}},{pattern:/(\d{1,2}):%3F(\d{0,2})\s*(%3F:(p|a)\.%3Fm\.%3F|(midnight|noon|[mn]\b))/gi,func:function(n,r,a,o,d,u,i){var%20s=parseInt(r),p=parseInt(a)||0;return%20void%200!=o%3F%22p%22==o.toLowerCase()%26%26s%3C12%3Fs+=12:%22a%22==o.toLowerCase()%26%2612==s%26%26(s=0):void%200!=d%26%26(d.toLowerCase().startsWith(%22n%22)%26%2612==s%3Fs=12:d.toLowerCase().startsWith(%22m%22)%26%2612==s%26%26(s=0)),n+t(e(s,2)+%22:%22+e(p,2))}},{pattern:/(\d{1,2})\/(\d{1,2})\/(\d{4}|\d{2})\b(%3F:\s[\w\s\.:]+\s\((\d{2}:\d{2})\))%3F/gi,func:function(n,r,a,o,d,u,i){var%20s=parseInt(r),p=parseInt(a),c=parseInt(o),f=(new%20Date).getUTCFullYear();if(s%3E12)return%20n;c%3C100%26%26(c+=2e3+c%3Ef%3F1900:2e3);var%20l=e(p,2)+%22.%22+e(s,2)+%22.%22+c;return%20void%200===d%3Fn+t(l):n.slice(0,n.lastIndexOf(%22(%22))+t(l+%22%20%22+d)}}],o=[%22code%22,%22pre%22,%22xmp%22];r(document.body,a)}();


Contributions welcome

### Contributors

[Manu Wallner](https://github.com/milch)
[Carlos Fenollosa](https://github.com/cfenollosa)
