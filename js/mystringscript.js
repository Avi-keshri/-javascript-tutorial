
//1.javascript property

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = str.length;
document.getElementById('demo1').innerHTML=sln;

//2.javascript methods

//The search() method cannot take a second start position argument.
//The indexOf() method can take a second start position argument.

//a).Finding a string in a string(indexof and lastindexof)
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf('locate');
document.getElementById('demo2').innerHTML =pos;

var str ="Please locate where 'locate' occurs!";
var pos =str.lastIndexOf('locate');
document.getElementById('demo3').innerHTML=pos;

//b).search methods(Searching for a String in a String)

var str = "Please locate where 'locate' occurs!";
var pos = str.search('locate');
document.getElementById('demo4').innerHTML=pos;

//c).Extracting String Parts
//i).The slice(startPosition,endPosition) Method

var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
document.getElementById('demo5').innerHTML=res;

var str ="Apple, Banana, Kiwi";
var res =str.slice(-12,-6);
document.getElementById('demo6').innerHTML=res;

//ii).The substring(startPosition,endPosition) Method(not accept negative values)

var str ="Apple, Banana , Kiwi";
var res =str.substring(7,13);
document.getElementById('demo7').innerHTML=res;

//iii).The substr(startPosition.length) Method

var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
document.getElementById("demo8").innerHTML=res;

//d).Replacing String Content

var str = "Please Visit Microsoft!";
var n = str.replace('Microsoft','W3schools');
document.getElementById('demo9').innerHTML=n;

//e).string.trim()

var str = "  Hello world  ";
var res = str.trim();
document.getElementById('demo10').innerHTML=res;

//f).Extracting String Characters

//i).The charAt() Method

var str ="HELLO WORLD!";
var res =str.charAt(0);
document.getElementById('demo11').innerHTML=res;