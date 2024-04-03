let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Rawalpindi"];

let orgString = 'I love my country Pakistan. <br> I love my city Faisalabad. <br> I love my Homeland.';

document.getElementById('original-string').innerHTML = orgString;

document.getElementById("clear-input-btn").onclick = function () {
    document.getElementById("input").value = "";
}

document.getElementById("clear-output-btn").onclick = function () {
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn1").onclick = function () {
    document.getElementById("output").innerHTML = orgString.toLowerCase();
}

document.getElementById("btn2").onclick = function () {
    document.getElementById("output").innerHTML = orgString.toUpperCase();
}

document.getElementById("btn3").onclick = function () {
    let capi = '<span style="text-transform: capitalize;">' + orgString + '</span>';
    document.getElementById("output").innerHTML = capi;
}

document.getElementById("btn4").onclick = function () {
    let text = document.getElementById("input").value;
    if (!text) {
        alert("Please enter the text!");
        return;
    }
    text = text.toLowerCase();
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;
}

document.getElementById("btn5").onclick = function () {
    document.getElementById("output").innerHTML = "";
    for (let i = 0; i < cities.length; i++) {
        document.getElementById("output").innerHTML += "<p>" + (i + 1) + ") " + cities[i] + "</p>";
    }
}

document.getElementById("btn6").onclick = function () {
    let city = document.getElementById("input").value;
    if (!city) {
        alert("Please Enter City Name!");
        return;
    }
    else {
        let firstLetter = city.charAt(0).toUpperCase();
        let remainingLetters = city.slice(1).toLowerCase();
        let finalCityName = firstLetter + remainingLetters;

        let cityFound = false

        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === finalCityName) {
                cityFound = true;
                let result = '<span> Your city <span style="color: red;">"' + finalCityName + '"</span> is already in the list. </span>';
                document.getElementById("output").innerHTML = result;
            }
        }

        if (cityFound == false) {
            cities.push(finalCityName);
            document.getElementById("output").innerHTML = '<span> Your city <span style="color: green;">"' + finalCityName + '"</span> is added to the list. </span>';
        }
    }
}

document.getElementById("btn7").onclick = function () {
    let city = document.getElementById("input").value;
    if (!city) {
        alert("Please Enter City Name!");
        return;
    }
    else {
        let firstLetter = city.charAt(0).toUpperCase();
        let remainingLetters = city.slice(1).toLowerCase();
        let finalCityName = firstLetter + remainingLetters;

        let cityFound = false

        for (let i = 0; i < cities.length; i++) {
            if (cities[i] === finalCityName) {
                cityFound = true;
                let result = '<span> Your city <span style="color: green;">"' + finalCityName + '"</span> is in the list. &#128151;</span>';
                document.getElementById("output").innerHTML = result;
            }
        }

        if (cityFound == false) {
            let result = '<span> Your city <span style="color: red;">"' + finalCityName + '"</span> is not in the list. &#128528; <br> Click Add Your City In List button to add your city in the list.</span>';
            document.getElementById("output").innerHTML = result;
        }
    }
}

document.getElementById("btn8").onclick = function () {
    let newOrgString = orgString.toLowerCase();
    let text = document.getElementById("input").value;
    text = text.toLowerCase();
    if (!text) {
        alert("Please Enter Text To Search!");
        return;
    }
    let findText = newOrgString.indexOf(text);
    if (findText !== -1) {
        let result = '<span> Your text <span style="color: green;">"' + text + '"</span> is found at index: ' + findText + '</span>';
        document.getElementById("output").innerHTML = result;
    }
    else {
        let result = '<span> Your text <span style="color: red;">"' + text + '"</span> is not found.</span>';
        document.getElementById("output").innerHTML = result;
    }
}

document.getElementById("btn9").onclick = function () {
    let newOrgString = orgString.toLowerCase();
    let replace = document.getElementById("input").value;
    replace = replace.toLowerCase();
    replace = new RegExp(replace, 'g');
    if (!replace) {
        alert("Please Enter Text To Search!");
        return;
    }
    let replaceWith = prompt("Enter text you want to replace with.");
    if(!replaceWith) {
        alert("Please enter text you want to replace with!")
    }
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOrgString.replace(replace, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}