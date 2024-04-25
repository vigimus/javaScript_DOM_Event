//Cacherar dem grejer vi vill använda så att vi slipper repitera oss varje gång

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


//Massa funktioner under
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
    createListElement();
	}
}

function addListAdterKeypress(event) {
	
	if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
	}	
}
//Om någon klickar på "knappen" kör den här funktionen
button.addEventListener("click", addListAfterClick);
//Om någon trycker "enter" kör den här funktionen
input.addEventListener("keypress", addListAdterKeypress); 