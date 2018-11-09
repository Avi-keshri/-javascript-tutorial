//javascript object Accessors(GETTERS and SETTERS)

//1.JavaScript Getter (The get Keyword)

var person={
	firstName:'Avinash',
	lastName:'Keshri',
	age:30,
	language:'Hindi',
	get lang(){
		return this.language;
	}
};

document.getElementById('demo1').innerHTML=person.lang;

//2.JavaScript Setter (The set Keyword)

var person = {

	firstName:'John',
	lastName:'Doe',
	language:'',
    set lang(value){
    	this.language = value;
    }
};

person.lang='English';

document.getElementById('demo2').innerHTML=person.language;

//3.JavaScript Function or Getter?
 //a).Access fullName as a function: person.fullName().
 //b).Access fullName as a property: person.fullName.
var person = {
     firstName:"John",
     lastName:'Doe',
     fullName:function(){
     	return this.firstName + " " + this.lastName;
     }

};
// Display data from the object using a method:
document.getElementById('demo3').innerHTML=person.fullName();

var person = {
	firstName:'John',
	lastName:"Doe",
	get fullName(){
		return this.firstName + " " + this.lastName;
	}
};
// Display data from the object using a getter:
document.getElementById('demo4').innerHTML=person.fullName;

//JavaScript Object Constructors
//Sometimes we need a "blueprint" for creating many objects of the same "type".
//The way to create an "object type", is to use an object constructor function.
//constructor function for person objects
function Person(first,last,age,eye){
	this.firstName = first;
	this.lastName  = last;
	this.age       = age;
	this.eyeColor  = eye;
}

// create two Person objects
var myFather = new Person('John','Doe',50,'blue');
var myMother = new Person('Sally','Rally',48,'green');

document.getElementById('demo5').innerHTML="My Father is " + myFather.age + " My Mother is " + myMother.age;

// Add nationality to first object

myFather.nationality = 'Indian';

document.getElementById('demo6').innerHTML="My Father is " + myFather.nationality;

// Add a name method to first object

myFather.fullName = function(){
	return this.firstName + " " + this.lastName;

}

document.getElementById('demo7').innerHTML = 'My Father is ' + myFather.fullName();