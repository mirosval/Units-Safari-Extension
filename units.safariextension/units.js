function wrap(str) {
    return ' (' + str + ')';
}

function convertFeetToSI(match, feet, inches, p3, offset, str){
    // Make sure that inches are always at least 0, because sometimes 
    // people use just 6' to denote length in feet 
    inches = inches != null && inches.trim().length > 0 ? inches : 0

    var length = Math.round(100 * (parseInt(feet, 10) * 30.48 + parseInt(inches, 10) * 2.54)) / 100;

    // If for some reason the length could not be computed, just leave the match alone
    if (Number.isNaN(length)) {
        return match
    }

    // Here we make sure that numbers at the end of sentences surrounded by '' are left alone, as
    // they are most likely not feet. To do that, searching at the matching location backwards,
    // we are looking for the next position of a '. If it is not between letters (e.g. "don't") 
    // or if there is no number preceding it (e.g. "5'") then we ignore the match
    var stringUntilMatch = str != undefined ? str.slice(0, offset) : ""
    stringUntilMatch = stringUntilMatch.split('').reverse().join('') //Reverse the string

    if (/^(?:[^0-9]+?)'\s/.test(stringUntilMatch)) {
        return match
    }

    if(length > 230) {
        return match + wrap(Math.round(length) / 100 + "m");
    } else {
        return match + wrap(length + "cm");
    }
}

let unitsExt_Replacements = [{
    /* Change heights in format 6'5" to metric units */
    pattern: /(\d+)'(\d*)("|''|)/g,
    func: convertFeetToSI
},{
    pattern: /(\d+)ft ?(\d*)in/g,
    func: convertFeetToSI
},{
    pattern: /(\d+\.?\d*) ?pounds?/ig,
    func: function(match, lbs, offset, str){
        var weight = Math.round(100 * (parseFloat(lbs) * 0.453592)) / 100;

        return match + wrap(weight + "kg");
    }
},{
    /* Change weight from lbs to KG */
    pattern: /(\d+\.?\d*) ?lbs?/ig,
    func: function(match, lbs, offset, str){
        var weight = Math.round(100 * (parseFloat(lbs) * 0.453592)) / 100;

        return match + wrap(weight + "kg");
    }
},{
    /* Miles to km */
    pattern: /((\d+,?)+\.?\d*) ?miles?/ig,
    func: function(match, miles, offset, str){
        var miles = parseFloat(miles.replace(',', ''))
        var dist = Math.round(100 * (miles * 1.60934)) / 100;

        return match + wrap(dist + "km");
    }
},{
    /* Miles to km */
    pattern: /(\d+\.?\d*) ?mpg/ig,
    func: function(match, mpg, offset, str){
        var lkm = Math.round(100 * (235.214 / parseFloat(mpg))) / 100;

        return match + wrap(lkm + "L / 100km");
    }
},{
    /* Miles to km/h */
    pattern: /(\d+\.?\d*) ?mph/ig,
    func: function(match, miles, offset, str){
        var dist = Math.round(100 * (parseFloat(miles) * 1.60934)) / 100;

        return match + wrap(dist + "km/h");
    }
}];

let unitsExt_ignoreElements = [
    "code",
    "pre",
    "xmp"
]

function replacePattern(node, patterns) {
    if(node.nodeType === Node.TEXT_NODE) {
        for(var i = 0, len = patterns.length; i < len; ++i) {
            node.nodeValue = node.nodeValue.replace(patterns[i].pattern, patterns[i].func);
        }
    } else if(node.nodeType === Node.ELEMENT_NODE && !unitsExt_ignoreElements.includes(node.tagName.toLowerCase())) {
        for(var i = 0, num = node.childNodes.length; i < num; ++i) {
            replacePattern(node.childNodes[i], patterns);
        }
    }
}

replacePattern(document.body, unitsExt_Replacements);
