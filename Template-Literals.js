var myString = "this is my string";

var person = {
    firstName: 'Chuck',
    lastName: 'Noris',
    age: '80',
    note: 'badass'
}; 

// var result = person.firstName + person.lastName + ' is ' + 'an ' + person.age + ' year old ' + person.note + '.'; 

// console.log(result); 

var result = `${person.firstName} ${person.lastName} is an ${person.age} year old ${person.note}.`; 

console.log(result);

var twotLines = 'This is one line. \nThis is the second line right here'; 

console.log(twotLines);