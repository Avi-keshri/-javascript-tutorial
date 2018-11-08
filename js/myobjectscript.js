//creating a JavaScript Object

//1.Using an Object Literal

var person = { firstName:"Avinash",lastName:"keshri",age:30};

document.getElementById('demo1').innerHTML=person.firstName;

//2.Using the JavaScript Keyword new

var personName =new Object();

personName.firstName='Bablu';
personName.lastName='vishwkarma';
personName.age=30;
personName.state="jharkhand";

document.getElementById('demo2').innerHTML=personName.firstName;

//3.JavaScript Objects are Mutable

//objects are mutable: They are addressed by reference, not by value.
var x = personName;  // This will not create a copy of person.

x.age=20;

document.getElementById('demo3').innerHTML=personName.age;
var txt ='';

//add new property to an object
personName.country='india';

//delete property from an object
delete personName.state;

var i;
for( i in personName){

	txt+=personName[i] +"</br>";
}
document.getElementById('demo4').innerHTML=txt;

//javascript methods

var carName = {
	name:'BMW',
	model:'447',
	color:'black',
	fullDetail:function(){
		return this.name + ' ' + this.model;
	}
}

document.getElementById('demo5').innerHTML=carName.fullDetail();

//add new method to an object

person.fullName = function(){
	return this.firstName+ " " + this.lastName;
}
document.getElementById('demo6').innerHTML=person.fullName();
