// Shorthand characters
let re;


re = /\w/; // word match - alphanumeric
re = /\w+/; // word match - alphanumeric one or more
re = /\W/ // non-word characters
re = /\d/; // matches digits
re = /\d+/; // matches digits one or more times
re = /\D/; // matches non-digits
re = /\s/; // matches whitespace character
re = /\S/; // matches non whitespace character
re = /Hell\b/i; // word boundary ex : it returns index of 18 in "Hello, welcome to Hell"

// Assertions or Conditions
re = /x(?=y)/; // checks if x is followed by y
re = /x(?!y)/; // checks if x is NOT followed by y

const str = 'adfjxf'; 


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