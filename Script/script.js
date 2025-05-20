"use strict";

function calculateYou() {
    let userGen = document.getElementById("userGen").value;
    let userName = document.getElementById("fullName").value;
    let userAge = document.getElementById("userAge").value;
    let favFood = document.getElementById("favFood").value;
    let favMovie = document.getElementById("favMovie").value;
    let favSport = document.getElementById("favSport").value;
    let Hobby1 = document.getElementById("hobbyOne").value;
    let Hobby2 = document.getElementById("hobbyTwo").value;
    let Hobby3 = document.getElementById("hobbyThree").value;
    let outputP = document.getElementById("theResult");
    let genVar = returnGen(userGen);

    outputP.innerText = "This is " + userName + " and " + genVar[1] + " is " + userAge + " years old, " + genVar[0] + " favorite food is " + favFood + " " + genVar[0] + " favorite movie is " + favMovie + " along with that " + genVar[0] + " favorite sport is " + favSport + " and " + genVar[0] + " top 3 hobbies are " + Hobby1 + ", " + Hobby2 + " and " + Hobby3 + ".";
}

function returnGen(defineGen) {
    if (defineGen == "Male") {
        let maleArray = ["his", "he",];
        return maleArray;
    } else if (defineGen == "Female") {
        let feArray = ["her", "she",];
        return feArray;
    }
}