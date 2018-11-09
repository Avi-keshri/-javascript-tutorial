//1).function declaration

function functionName(parameters){
	//code to be executed
}
function myfunction(a,b){
	return a*b;
}
var x = myfunction(3,4);
document.getElementById('demo1').innerHTML=x;

//2). function expressions

//function without name is anonymous function

var y = function(a,b){ return a*b};

document.getElementById('demo2').innerHTML=y(4,4);

//self invoking function

(function(){

	document.getElementById('demo3').innerHTML='self invoking function';
})();


//JavaScript Function Call

//With the call() method, you can write a method that can be used on different objects.

var person = {
	fullName:function(city,state){
	 return this.firstName + ' '+ this.lastName + ' ' + city + ' ' + state;
	}
}

var person1 = {

	firstName:'avinash',
	lastName:'keshri'
}

var z = person.fullName.call(person1,'Dhanbad','Jharhand');

document.getElementById('demo4').innerHTML= z;


//JavaScript Function Apply

//With the apply() method, you can write a method that can be used on different objects.
var personName = {

	fullPersonName:function(city,country){
		return this.firstName + ' ' + this.lastName +' ' + city + ' '+ country;
	}
}
var studentName = {

	firstName:'avinash',
	lastName:'keshri'
}
 
 var studentNameResult = personName.fullPersonName.apply(studentName,['Ranchi','India'])

 document.getElementById('demo5').innerHTML=studentNameResult;