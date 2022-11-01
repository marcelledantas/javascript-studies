this keyword/variable: special variable that is created for every execution context (every function). takes the value of (points to) the "owner" the function in which the this keyword is used.

this is NOT static. It depends on how the function is called, ans its value is only assigned when the function is actually called

Examples:

Method: this = <Object that is calling the method>
const jonas = {
name: 'Jonas',
year: 1989,
calcAge: function (){
return 2037 - this.year; //This is 'jonas', because is the name of object that is calling the method - this.year = propertie of jonas object
}
}

jonas.calcAge();

Simple function call: this = undefined;

Arrow functions: this = <this of surrounding function (lexical this)>
Arrow functions does not have this keyword, it inherits it from a parent function. (IMPORTANT PROPERTIES -> IT CAN CAUSE BUGS)

Event listener: this = <DOM element that the handler is attached to>

this does NOT point to the function itself, and also NOT the its variable environment!
