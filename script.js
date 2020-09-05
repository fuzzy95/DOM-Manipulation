// document.getElementsByTagName("h1");

// document.getElementsByClassName("second");

// document.getElementById("first");

// document.querySelector("h1");

// document.querySelector("li");

// document.querySelectorAll("li");

// document.querySelector("li").getAttribute("random");

// document.querySelector("li").setAttribute("random", "4000");

// // document.querySelector("h1").style.background = "purple";

// var h1 = document.querySelector("h1");
// h1.className = "header";

// document.querySelector("li").classList;

// document.querySelector("li").classList.add("header");

// document.querySelector("h1");

// document.querySelector("h1").innerHTML = "<strong>!!!</strong>";

// document.querySelectorAll("l1")[1];

// document.querySelectorAll("l1")[1].parentElement;

// document.querySelectorAll("l1")[1].parentElement.parentElement;

// // cache selectors

// var h1 = document.querySelector("h1");

// --------------------------------------- Listen ------------------------------

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function () {
//     console.log("POKE!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function input_length() {
    return input.value.length;
}

function create_list_element() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ("");
}

function add_list_after_click() {
    if (input_length() > 0) {
        create_list_element();
    }
}

function add_list_after_keypress(event) {
    if (input_length() > 0 && event.keyCode === 13) {
        create_list_element();
    }
}

button.addEventListener("click", add_list_after_click);

input.addEventListener("keypress", add_list_after_keypress);