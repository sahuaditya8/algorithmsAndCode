function removeDuplicateChar(str) {
    var len = str.length,
        char,
        charCount = {},
        newStr = [];
    for (var i = 0; i < len; i++) {
        char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else
            charCount[char] = 1;
    }
    for (var j in charCount) {
        if (charCount[j] == 1)
            newStr.push(j);
    }
    return newStr.join('');
}

function removeDuplicateMap(str) {
    let charCount = {};
    let newStr = [];
    let strArr = str.split('');
    console.log(strArr);
    strArr.forEach(element => {
        if (charCount[element]) {
            charCount[element]++;
        } else {
            charCount[element] = 1;
        }
        console.log(charCount);


        // charCount.forEach(function (value, key) {
        //     console.log(key + " = " + value);
        //     if (value == 1) {
        //         newStr.push(key);
        //     }
        // })
    });
    return newStr;
}

let res = removeDuplicateChar('Learn more javascript dude');
console.log(res);