// Exercises with students JSON file

function makeCall(url, callbackFunction){
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log("The request was successful.");
            callbackFunction(result);
            
        })
        .catch(error => {
            console.log("The request failed!")
            console.error(error);
        })
}

let femaleNamesAvg5 = [];
let avgGradeAllFemalesOver24 = [];

function print(data){
    console.log("All students", data);

    console.log("All students with an average grade higher than 3", data.filter(student => student.averageGrade > 3));

    console.log("All students with an average grade between 2 and 5", data.filter(student => student.averageGrade < 5 && student.averageGrade > 2));

    data.map(student => {
        if(student.gender === "Female" && student.averageGrade === 5){
            femaleNamesAvg5.push(student.firstName);
            return femaleNamesAvg5;
        }
    });
    console.log("All female student names with an average grade of 5", femaleNamesAvg5);

    console.log("All male student full names who live in Skopje and are over 18 years old");
    data
        .filter(student => student.city === "Skopje" && student.age > 18 && student.gender === "Male")
        .forEach((student, index) => console.log(`${index + 1}. ${student.firstName} ${student.lastName}`));
 
    console.log("The average grades of all female students over the age of 24");
    data
        .filter(student => student.gender ==="Female" && student.age > 24)
        .forEach((student, index) => console.log(`${index + 1}. ${student.firstName} ${student.lastName} - Average grade ${student.averageGrade}.`));

    console.log("All male students with a name starting with B and average grade over 2", data.filter(student => student.firstName[0] === "B" && student.averageGrade > 2 && student.gender === "Male"));

    console.log(`The average grades of all female students over the age of 16 and who lives in Skopje and has "L" or "l" in their last name`);
    data
        .filter(student => student.age > 16 && student.city === "Skopje" && student.gender === "Female" && (student.lastName.includes("L") || student.lastName.includes("l")))
        .forEach((student, index) => console.log(`${index + 1}. ${student.firstName} ${student.lastName} - Average grade ${student.averageGrade}.`));
}

makeCall("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json", print);


// Callback function that will return result of multiplication of two numbers

let multiplyTwo = (num1, num2) => num1 * num2;

let getResultOfMultiplication = (callbackFunction, number1, number2) => callbackFunction(number1, number2);

console.log(getResultOfMultiplication(multiplyTwo, 3, 6));


// Callback function that will print the result of every user from "https://jsonplaceholder.typicode.com/users"

let getUsersBtn = document.getElementById("getAllUsers");
let resultParagraph = document.getElementById("resultPar");

let printUsers = (users, element) => {
    if (users !== undefined && users.length > 0){
        users.forEach((user, index) => element.innerHTML += `${index + 1}. Name: ${user.name}<br />
        Username: ${user.username}<br />
        Email: ${user.email}.<br /><br />`)
    }
}

getUsersBtn.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(result => {
            console.log("The request was successful.", result);
            printUsers(result, resultParagraph);
        })
        .catch(error => {
            console.log("The request failed!");
            console.error(error);
        })
})