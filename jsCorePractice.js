// JS METHODS

/**************************
 * List to be Practiced
 *
 * for each...in
 * .map()
 * .filter()
 * .reduce()
 * .split()
 * setTimeout()
 * clearTimeout()
 * setInterval()
 * clearInterval()
 * .innerHTML
 * .toString()
 */

/******* .innerHTML - Retrieves or modifies the contents of an HTML element */

// Retrieving HTML of element - assigns value of HTML element with ID "RetrieveTest" to retrieveHTML
let retrieveHTML = document.getElementById('RetrieveTest').innerHTML

console.log(retrieveHTML)

// Changing HTML of element - modified the content of HTML element with ID "ChangeTest"

const innerChangeTest = () => {
	document.getElementById('ChangeTest').innerHTML =
		'If you are seeing this then .innerHTML has successfully modified the content of this HTML element'
}
/********* .toString() Method */

const toStringTest = () => {
	let testArray = ['Skylar', 'Charlie', 'Matthew', 'Nikki', 'Andrew', 'Michael']
	let testOutput = testArray.toString()
	document.getElementById('ToString').innerHTML = testOutput
}

/************* .filter() Method */

const filterTestArrayCode = [8, 4, 10, 14, 16, 22, 35, 42, 28]

const filterTestArray = () => {
	let testOutput = filterTestArrayCode.toString()
	document.getElementById('FilterArray').innerHTML = testOutput
}

const filterTest = () => {
	document.getElementById('FilterTest').innerHTML = filterTestArrayCode.filter(
		num => num >= 18
	)
}

// .filter() method using user input and returning it
const userTestArray = [
	'John',
	'Mike',
	'Adam',
	'Cheryl',
	'Lacey',
	'Cass',
	'Chari',
]

let userTempInput // Necessary to store User Input in global scope for access in more than 1 function

// Gets user input, pushes it to userTestArray then displays the new array on webpage
const userTestInput = () => {
	let userInput = prompt('What is your first name?')
	userTempInput = userInput
	userTestArray.push(userInput)
	let userTestOutput = userTestArray.toString()
	document.getElementById('UserTestInput').innerHTML = userTestOutput
}

// Using .filter() to display only the user's input
const userFilterTest = () => {
	document.getElementById(
		'UserFilterTest'
	).innerHTML = userTestArray.filter(element => element.includes(userTempInput))
}

/****************
 * .reduce() Method
 */

// Question from Nick: use array [2,2,3,4,4,5,2,2,5,5,3,1,1,6,4]
// Reduce the array to an object where the keys are the numbers appearing in the array
// and the values are the number of occurrences of each number
// Result should look like this: {1:2, 2:4, 3:2, 4:3, 5:3, 6:1 }

// Note: Object.values() returns the values in an object's key/value pairs as an array
// Note: Object.keys() returns the keys in an object's key/value pairs as an array
// Note: .includes() checks to see whether an array contains a specific value

const reduceTestArray = [2, 2, 3, 4, 4, 5, 2, 2, 5, 5, 3, 1, 1, 6, 4]

const reduceInitialValue = {}

const reduceArrayDisplay = () => {
	let output = reduceTestArray.toString()
	document.getElementById('ReduceTestArray').innerHTML = output
}

// Verbose Method

// const reducerFunction = (number, count) => {
// 	!number[count] ? (number[count] = 1) : (number[count] += 1)
// 	return number
// }

// let result = reduceTestArray.reduce(reducerFunction, reduceInitialValue)

// console.log(result)

// Condensed Method

const condensedResult = reduceTestArray.reduce((number, count) => {
	!number[count] ? (number[count] = 1) : (number[count] += 1)
	return number
}, reduceInitialValue)

console.log(condensedResult)

const reducedArrayDisplay = () => {
	document.getElementById('ReducedTestArray').innerHTML = JSON.stringify(
		condensedResult
	)
}
