//FUNCTIONS
//Upto ES5 Version
function myFunction() {
	console.log("ES5 Function")
}
//calling a function
myFunction()

//declaring a variable
var varname = "value"
//From ES6 Version (this function will be called as arrow function)
var myFunc = () => {
	console.log("ES6 Function")
}
//calling ES6 Function
myFunc()

//Parameters in functions
var str="Sugan"
console.log("Stored in str variable: "+str)

//Function with Single Parameter
function parameterUnderstanding(gotParam) {
	console.log("Stored in gotParam in function: "+gotParam)
}
parameterUnderstanding("Sugan")

//Function with Multiple Parameters
function multiParameterUnderstanding(gotParam1, gotParam2) {
	console.log("Unassigned Multiple Marameters: "+gotParam1+gotParam2)
}
multiParameterUnderstanding("Sugan")
multiParameterUnderstanding("Sugan","Mei")

//Function with Multiple Parameters
function multiParameterUnderstandingAssigned(gotParam1, gotParam2="") {
	console.log("Multiple Parameters Assigned: "+gotParam1+gotParam2)
}
multiParameterUnderstandingAssigned("Sugan")
multiParameterUnderstandingAssigned("Sugan","Meiy")

//Function Overriding
//Functions with same names
function funcName() {
	console.log("funcName 1 called")
}
funcName()
function funcName() {
	console.log("funcName 2 called")
}
funcName()

//Functions with same name and parameter
function funcNameWithParam(str) {
	console.log("funcName called "+str)
}
funcNameWithParam("A")
function funcNameWithParam(str) {
	console.log("funcName called "+str)
}
funcNameWithParam("B")

//Example Program: BMI Calculation
function calculateBMI(weight, height) {
	var bmi=weight/(height*height)
	console.log("Your BMI: "+bmi)
}
calculateBMI(85, 1.85)