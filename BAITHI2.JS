
//Cách 1 
let str1 ="abcde"
let str2 ="012"
let r=''

if(str1.split("").length <= str2.split("").length){
    for(let i =0 ;i<str2.split("").length;i++){
        if(!str1[i]){
            r = r + str2[i]
        }
        else {
            r= r+str1[i]+str2[i]
        }
    }
} 
else {
    for(let i =0 ;i<str1.split("").length;i++){
        if(!str2[i]){
            r = r + str1[i]
        }
        else {
            r= r+str1[i]+str2[i]
        }
    }
}

console.log(r)
//Cách 2
let str1 = prompt();
let  str2 =prompt();
function merge2String(s1, s2) {
    let iter_len = s1.length;
    let longer_string = s2;
    let len_s2 = s2.length;

    if (iter_len > len_s2) {
        iter_len = len_s2;
        longer_string = s1;
    }
    
    let result = "";
    
    for (let i = 0; i < iter_len; ++i) {
        result += s1[i] + s2[i];
    }

    result += longer_string.slice(iter_len);
    
    return result;
    
} 
console.log(merge2String(str1, str2))