let cities = ["Faisalabad", "Lahore", "Islamabad", "Karachi", "Rawalpindi"];

let orgString = 'I love my country Pakistan. <br> I love my city Faisalabad. <br> I love my Homeland.';

document.getElementById('original-string').innerHTML = orgString;

document.getElementById("clear-input-btn").onclick = function () {
    document.getElementById("input").value = "";
}

document.getElementById("clear-output-btn").onclick = function () {
    document.getElementById("output").innerHTML = "";
    Toastify({
        text: "Output Cleared",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

document.getElementById("btn1").onclick = function () {
    document.getElementById("output").innerHTML = orgString.toLowerCase();
    Toastify({
        text: "Successfully converted to lowercase",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

document.getElementById("btn2").onclick = function () {
    document.getElementById("output").innerHTML = orgString.toUpperCase();
    Toastify({
        text: "Successfully converted to uppercase",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

document.getElementById("btn3").onclick = function () {
    let capi = '<span style="text-transform: capitalize;">' + orgString + '</span>';
    document.getElementById("output").innerHTML = capi;
    Toastify({
        text: "Successfully converted to capitalize",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}

document.getElementById("btn4").onclick = function () {
    let text = document.getElementById("input").value;
    if (!text) {
        Toastify({
            text: "Please enter text to format.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
        return;
    }
    text = text.toLowerCase();
    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = text;
    Toastify({
        text: "Successfully converted to better format",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
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
        // alert("Please Enter City Name!");
        Toastify({
            text: "Please enter city name to add to the list.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
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
        Toastify({
            text: "City is added to the list.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
}

document.getElementById("btn7").onclick = function () {
    let city = document.getElementById("input").value;
    if (!city) {
        // alert("Please Enter City Name!");
        Toastify({
            text: "Please enter city name to to check.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
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
                Toastify({
                    text: "City is present in the list.",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: false, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                }).showToast();
            }
        }

        if (cityFound == false) {
            let result = '<span> Your city <span style="color: red;">"' + finalCityName + '"</span> is not in the list. &#128528; <br> Click Add Your City In List button to add your city in the list.</span>';
            document.getElementById("output").innerHTML = result;
            Toastify({
                text: "Your city is not found.",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: false, // Prevents dismissing of toast on hover
                style: {
                    background: "linear-gradient(to right, #ff1111, #ff4545)",
                },
            }).showToast();
        }
    }
}

document.getElementById("btn8").onclick = function () {
    let newOrgString = orgString.toLowerCase();
    let text = document.getElementById("input").value;
    text = text.toLowerCase();
    if (!text) {
        // alert("Please Enter Text To Search!");
        Toastify({
            text: "Please enter word to find.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
        return;
    }
    let findText = newOrgString.indexOf(text);
    if (findText !== -1) {
        let result = '<span> Your text <span style="color: green;">"' + text + '"</span> is found at index: ' + findText + '</span>';
        document.getElementById("output").innerHTML = result;
        Toastify({
            text: "Your word found successfully.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    }
    else {
        let result = '<span> Your text <span style="color: red;">"' + text + '"</span> is not found.</span>';
        document.getElementById("output").innerHTML = result;
        Toastify({
            text: "Your word not found.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: false, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #ff1111, #ff4545)",
            },
        }).showToast();
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
    if (!replaceWith) {
        alert("Please enter text you want to replace with!")
    }
    replaceWith = replaceWith.toLowerCase();
    let replaceWord = newOrgString.replace(replace, replaceWith);
    document.getElementById("output").innerHTML = replaceWord;
}