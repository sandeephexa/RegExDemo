// Metachars & Quantifiers
let re;

re = /hello/i;

// metacharacter mathc
re = /^h/i; // must start with "h"
re = /d$/i; // must ends with "d"
re = /world$/i; // must ends with "world"
re = /^world$/i; // starts with "world" and ends with "world"
re = /h.llo/i; // matches any ONE character
re = /h*llo/i; // matches any ONE character 0 or more times
re = /gre?a?y/i; // Optional values ex : grey or gray
re = /gre?a?y\?/i; // Escape characters  ex : grey? (remove ? at the end)

// [] brackets character sets
re = /gr[ae]y/i; // a or e are optional
re = /[GF]ray/;  // G or F are must 
re = /[^GF]ray/;  // G or F should not be there
re = /[A-Z]/; // match any uppercase letter
re = /[a-z]/; // match any lowercase letter
re = /[A-Za-z]/; // match both uppercase and lowercase letters
re = /[0-9]ray/; // matches a number with "ray"
re = /[0-9][0-9]ray/

// Braces {} Quantifiers
re = /Hel{2}o/i; // must occur exactly {m} times
re = /Hel{2,4}o/i; // must occur exactly {m,n} times
re = /Hel{2,}o/i; // must occur atleast {m} times

// Paranthesis - Grouping
re = /^([0-9]x){3}$/

// string to match
const str = '3x3x3x'; 

var result = re.exec(str);
console.log(result);

function reTest(re,str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does Not macthes ${re.source}`);
    }
}

reTest(re,str);