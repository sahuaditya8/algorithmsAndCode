function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
      rtnStr +=str[i];
    }
    return rtnStr;
  }

  function reverseUsingArray(str){
    var rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    for(var i = str.length-1; i>=0;i--){
      rtnStr.push(str[i]);
    }
    return rtnStr.join('');
  }

  function recursiveReverse (str) {
    if (str === "") {
        return "";
    } else {
        console.log(str.substr(1));
        console.log(str.charAt(0));
        console.log(str.substr(1) + str.charAt(0));
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
       
  
  let res = reverse('you are a nice dude');
  console.log(res);

  let res1 = reverseUsingArray('you are a nice dude');
  console.log(res1);

  let res2 = recursiveReverse('you are a nice dude');
  console.log(res2);