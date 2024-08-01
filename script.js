const display = document.getElementById("text");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calc() {
  try{
    display.value = eval(display.value);
  }

  catch{
    display.value = 'Error';
  }
}


