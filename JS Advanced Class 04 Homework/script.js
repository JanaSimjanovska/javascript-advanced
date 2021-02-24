// Exercise 1 - Kje ja pratam koga kje stignam da go zavrsam kalkulatorot od JS Basic, pa kje go prerabotam kako vo baranjeto od vezbava;


// Exercise 2
// Write a function that will reverse a string as output (any string), using recursion e.g. Hello -> olleH

let testString = "Hello"
let resultString = "";
let resultString2 = "";


let reverseString = function(string) {
    if (string === '') {
        return '';
    }
    resultString += string.slice(-1)
    reverseString(string.slice(0, string.length - 1))
    return resultString;
}

let reverseStringArrowFunction = string => {
    if (string === ''){
        return '';
    }
    resultString2 += string.slice(-1)
    reverseStringArrowFunction(string.slice(0, string.length - 1))
    return resultString2;
}

console.log(reverseString(testString));
console.log(reverseStringArrowFunction("testString"));

// Exercise 3
// Write a function that will take two arguments. First argument should be a sentence, second one should be one word. Return how many times the word had appeared in that sentence. e.g appearance('This was a hot summer, and a very dry one', 'a') -> should return that 'a' was present 2 times.

let testString2 = 'This was a hot ssummers, summer,  and a very dry one.' //Namerno mi e izmisljotini recenicava, proveruvav kako kje raboti, pokusavav, eksperimentirav :) Ja ostavam vaka, cisto poso mi e merak deka raboti :)

let punctuationMarks = /[!"#$%&'()*+,./:;<=>?@\^_`{|}~-]/g;

let findWord = (sentence, word) => {
    let counter = 0;
    sentence.replaceAll(punctuationMarks, "").split(" ").forEach(element =>{
        if(element === word){
            counter++
        }
    })
    if(counter === 0){
        return `This sentence doesn't contain the word "${word}".`;
    }
    else if(counter === 1){
        return `This sentence contains the word "${word}" once.`;
    }
    else {
        return `This sentence contains the word "${word}" ${counter} times.`;
    }
}

console.log(findWord(testString2, "a"))


// Exercise 4
// Using recursive function do the function that will calculate Fibonacci sequence for any number. fibonacciSequence(n) (where n is positive real number) and print the result. e.g fibonacciSequence(8) -> should return array of following numbers 0, 1, 1, 2, 3, 5, 8, 13, 21

let fibonacciArray = [0, 1];

let getFibonacci = number => {
    let nextNumber = 0;
    if(number === 1){
        return;
    }
    for(let i = 0; i < fibonacciArray.length; i++){
        nextNumber = fibonacciArray[fibonacciArray.length - 2] + fibonacciArray[fibonacciArray.length - 1]  
    }
    fibonacciArray.push(nextNumber);
    getFibonacci(number - 1);
    return fibonacciArray;
}

let checkNumber = number => {
    if(number <= 0){
        console.error(`Please enter a number from 1 and up!`);
    }
    else{
        return getFibonacci(number);
    }
}

console.log(checkNumber(8));


// Bonus exercise
// Write a function that will print table using Javascript arrow functions, the table should have x columns and y rows. The values for x and y are inserted by the user.

let inputRows = document.getElementById('rows');
let inputColumns = document.getElementById('columns');
let createTableBtn = document.querySelector('button');
let tableArea = document.getElementById('table-area');


// Ova mi e stara zadaca, i samo ja prepisav istata, ama so arrow functions, ako mozam uste neso da prepravam, smenam, skratam, kazete :)

let createTable = (rows, columns, element) => {

    element.innerHTML = `<table id="table" border = "1"></table>` 

    document.getElementById('table').innerHTML = `<tbody id = 'tbody'></tbody>`
   
    if (isNaN(rows) || isNaN(columns)){ 
        alert `You must enter numerical values!`;
    } 
    else if ((rows < 1) || (columns < 1)){
            alert `You must enter numbers from 1 and up!`;
    } 
    else {
        for (let i = 1; i <= rows; i++){
            document.getElementById('tbody').innerHTML += `<tr class="row"></tr>`;
            for (let j = 1; j <= columns; j++){
                document.getElementsByClassName('row')[i-1].innerHTML += `<td class="tableCell">Row ${i} Column ${j}</td>`; 
            }   
        }      
    }
}


createTableBtn.addEventListener('click', () => {
    createTable(inputRows.value, inputColumns.value, tableArea);
    inputRows.value = '';
    inputColumns.value = '';
})
