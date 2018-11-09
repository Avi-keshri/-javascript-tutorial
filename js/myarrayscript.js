//1.create array

var studentName = ["Avinash","Bablu","Rajesh","Babu"];

//2.Access the element of an array
document.getElementById('demo1').innerHTML= studentName[0];

//3.changing array element

studentName[1] ="Abhishek";
document.getElementById('demo2').innerHTML = studentName[1];

//4.Access full array

document.getElementById('demo3').innerHTML = studentName;

//5.Access the first array element

document.getElementById('demo4').innerHTML =studentName[0];

//6.Access the last array element

var res = studentName[studentName.length-1];
document.getElementById('demo5').innerHTML = res;

//7.Looping array element through for

var text= '';
var arrLen =studentName.length;
var i;
text ="<ul>";
for(i =0; i < arrLen; i++ ){
	text+="<li>"+studentName[i]+ "</li>";
}
text+="</ul>";
document.getElementById('demo6').innerHTML =text;

//8.Looping array element through foreach(array iteration)

var text ='';
text ='<ul>';
studentName.forEach(myfunction);
text +="</ul>";
document.getElementById('demo7').innerHTML =text;


function myfunction(value){
	text+="<li>"+value+ "</li>";
}

//9.Adding array element through push method

studentName.push('Dharma');
document.getElementById('demo8').innerHTML =studentName;

//10.Adding array element through array length property

studentName[studentName.length] = "Kajal";
document.getElementById('demo9').innerHTML =studentName;

//11.Recognize an array

document.getElementById('demo10').innerHTML = Array.isArray(studentName);