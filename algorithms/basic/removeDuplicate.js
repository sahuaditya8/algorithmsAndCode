function removeDuplicate(arr) {
    let exists = {};
    let outArr = [];

    arr.forEach(element => {
        if (!exists[element]) {
            outArr.push(element);
            exists[element] = true;
        }
    });
    return outArr;
}

let res = removeDuplicate([1, 1, 3, 4, 5, 3, 6, 2, 1, 2]);
console.log(res);

console.log(res.sort());