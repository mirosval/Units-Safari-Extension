
var replacements = [{
    // Change heights in format 6'5" to metric units
    pattern: /(\d+)'(\d*)("|''|)/g,
    func: function(match, feet, inches, p3, offset, str){
        var length = Math.round(100 * (parseInt(feet, 10) * 30.48 + parseInt(inches, 10) * 2.54)) / 100;

        if(length > 230) {
            return match + ' (' + Math.round(length) / 100 + "m)";
        } else {
            return match + ' (' + length + "cm)";
        }
    }
},{
    // Change weight from lbs to KG
    pattern: /(\d+\.?\d*) ?lbs/ig,
    func: function(match, lbs, offset, str){
        var weight = Math.round(100 * (parseFloat(lbs) * 0.453592)) / 100;

        return match + ' (' + weight + "kg)";
    }
},{
    // Miles to km
    pattern: /(\d+\.?\d*) ?miles?/ig,
    func: function(match, miles, offset, str){
        var dist = Math.round(100 * (parseFloat(miles) * 1.60934)) / 100;

        return match + ' (' + dist + "km)";
    }
},{
    // Miles to km
    pattern: /(\d+\.?\d*) ?mpg/ig,
    func: function(match, mpg, offset, str){
        var lkm = Math.round(100 * (235.214 / parseFloat(mpg))) / 100;

        return match + ' (' + lkm + "L / 100km)";
    }
},{
    // Miles to km/h
    pattern: /(\d+\.?\d*) ?mph/ig,
    func: function(match, miles, offset, str){
        var dist = Math.round(100 * (parseFloat(miles) * 1.60934)) / 100;

        return match + ' (' + dist + "km/h)";
    }
}];

function replacePattern(node, patterns) {
    if(node.nodeType === Node.TEXT_NODE) {
        for(var i = 0, len = patterns.length; i < len; ++i) {
            node.nodeValue = node.nodeValue.replace(patterns[i].pattern, patterns[i].func);    
        }
    } else if(node.nodeType === Node.ELEMENT_NODE) {
        for(var i = 0, num = node.childNodes.length; i < num; ++i) {
            replacePattern(node.childNodes[i], patterns);
        }
    }
}

replacePattern(document.body, replacements);
