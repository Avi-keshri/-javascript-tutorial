//1.Add array element to last of an array using (push and pop methods)

var studentName = ["Avinash","Rajesh","Bablu","Dharma"];

studentName.push('Babu');
document.getElementById('demo1').innerHTML = studentName;

studentName.pop();
document.getElementById('demo2').innerHTML =studentName;

//2.Add array element to first of an array using (unshift and shift methods)

studentName.unshift('Abhishek');
document.getElementById('demo3').innerHTML = studentName;

studentName.shift();
document.getElementById('demo4').innerHTML =studentName;

//3.splicing an array
//In splice 2 refres items added in that given position starting position and also 2 is how many items are deleted from array

studentName.splice(2,2,'Bhupesh','Vikash');
document.getElementById('demo5').innerHTML = studentName;

studentName.splice(0,1);
document.getElementById('demo6').innerHTML =studentName;

//4.concatenating array 

var fruitsName = ['Apple','Banana','Kiwi'];
var className = ['One','Two','Three'];

var result =fruitsName.concat(className);
document.getElementById('demo7').innerHTML =result;

//5.slice an array(The slice() method slices out a piece of an array into a new array.)

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

var res = fruits.slice(2);
document.getElementById('demo8').innerHTML = res;

var res = fruits.slice(1,3);
document.getElementById('demo9').innerHTML =res;

//6.sorting array and reverse an array
//By default, the sort() function sorts values as strings.

var result = fruits.sort();
document.getElementById('demo10').innerHTML =result;

var result =fruits.reverse();
document.getElementById('demo11').innerHTML =result;

//sort  array alphabetically

var points = [40, 100, 1, 5, 25, 10]; 
document.getElementById('demo12').innerHTML =points;

function myalphafunc(){
 var result = points.sort();
 document.getElementById('demo13').innerHTML =result;
}

//sort array numerically

function mynumericfunc(){
 //sort by ascending order
	var result = points.sort(function(a,b){return a-b});
    document.getElementById('demo14').innerHTML =result;

 //sort by descending order
    var result1 =points.sort(function(a,b){return b-a});
    document.getElementById('demo15').innerHTML =result1;
}