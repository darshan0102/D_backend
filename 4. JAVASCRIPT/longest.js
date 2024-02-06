let  a = prompt("enetr alphabetic string :");

let r = longest_word(a);
console.log("longest word in this line :",r);

function longest_word(string) {
    let words = string.split(' ');
    let result = '';

    for(let i=0; i < words.length; i++){
     if(words[i].length > result.length) {
        result = words[i];
     }
    }
       return result;
}
