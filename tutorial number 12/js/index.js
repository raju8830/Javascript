// Function Propart
function myFunction(p1, p2){
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 5);

// new function Proparty
function newFunction(raju, raju1 ) {
    return  raju + raju1;
}
document.getElementById("demo1").innerHTML = newFunction(35, 4754)


// Function Varialble

let x = nmyFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function nmyFunction(a, b) {
    return a * b;
}


// javaScript Object

let name = "Write Your Name"
document.getElementById('writename').innerHTML = name ;

// input Value

let inputs = "Please Write Somthing";
document.getElementById("input").nodeType = inputs;



// Create a Object
let persoin = {
    firstName: "JavaScript Object ",
    lastName: "You Can See Your Id Number",
    yourId: "Your ID Number ",
    id: 9585,
    companyName: " Stragel Company"

};
document.getElementById("newObject").innerHTML = persoin["firstName"];

document.getElementById("id").innerText = persoin.yourId + "" + persoin.id;

document.getElementById("newPart").innerHTML =  persoin.lastName;

document.getElementById("theName").innerHTML = "This is the Name Your Company" + persoin.companyName;
document.getElementById("theName").style.fontSize = "25px";

// function
function sleep(name, time){
    console.log(name + "IS sleep at " + time)
}
sleep("Jashim ", "10pm");
sleep("Hasan ", "1pm");
sleep("Shain ", "12pm");
sleep("Karim ", "9pm");



// Object Proparty
let newnumber = new Number(5);
console.log(newnumber);