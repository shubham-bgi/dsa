let str = 'wwwdaaaaav';
let count = 1;
let output = '';
for(let i = 0; i<str.length; i++) {
    if(str[i] === str[i+1]) count ++;
    else {
        output += `${count}${str[i]}`;
        count = 1;
    }
}
console.log(output)