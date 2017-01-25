var currentInput = "0";
var memory = "0";
var operator = 0;
// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
// Adds a digit to the current input
function addDigit(dig) {
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}
// Adds a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
// Clears everything.
function allClear() {
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op) {
    if (op.indexOf("") > -1) {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
}
// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
        if (currentInput == Infinity) {
            currentInput = "ERROR DIVIDE BY 0";
        }
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Change the sign of the current input
function changeSign() {
    currentInput = (currentInput - 1);
    displayCurrentInput();
}
// Clear the current input back to 0
function clearCurrent() {
    currentInput = "0";
    displayCurrentInput();
}
// Change the current input to a percentage
function percentage() {
    currentInput = (currentInput / 100)
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial() {
    var result = 1;
    for (i = currentInput; i > 0; i--) {
        result = result * i;
    }
    currentInput = result;
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    currentInput = Math.pow(currentInput, 0.5);
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    currentInput = Math.pow(currentInput, -1);
    displayCurrentInput();
}

function controlLength() {
    if (currentInput.length >= 17) {
        currentInput = currentInput.substr(0, 17);
    }
    else {
        currentInput = currentInput;
    }
}

function sine() {
    var roundSin = Math.sin(currentInput);
    currentInput = roundSin.toFixed(10);
    displayCurrentInput();
}

function cosine() {
    var roundCosine = Math.cos(currentInput);
    currentInput = roundCosine.toFixed(10);
    displayCurrentInput();
}

function tangent() {
    var roundTangent = Math.tan(currentInput);
    currentInput = roundTangent.toFixed(10);
    displayCurrentInput();
}

function pi() {
    currentInput = Math.PI;
    displayCurrentInput();
}

function degreeSine() {
    var roundDegreeSine = Math.sin((currentInput * (Math.PI / 180)));
    currentInput = roundDegreeSine.toFixed(10);
    displayCurrentInput();
}

function degreeCosine() {
    var roundDegreeCosine = Math.cos((currentInput * (Math.PI / 180)));
    currentInput = roundDegreeCosine.toFixed(10)
    displayCurrentInput();
}

function degreeTangent() {
    var roundDegreeTangent = Math.tan((currentInput * (Math.PI / 180)));
    currentInput = roundDegreeTangent.toFixed(10);
    displayCurrentInput();
}
var memvalue;

function memoryStore() {
    memvalue = document.getElementById('screen').value;
}

function memoryRecall() {
    currentInput = memvalue;
    displayCurrentInput();
}

function memoryPlus() {
    currentInput = parseInt(memvalue) + parseInt(currentInput);
    displayCurrentInput();
}

function memoryMinus() {
    currentInput = parseInt(memvalue) - parseInt(currentInput);
    displayCurrentInput();
}

function memoryClear() {
    memvalue = "0";
    currentInput = memvalue;
    displayCurrentInput();
}

function baseTen() {
    currentInput = Math.pow(10, currentInput);
    displayCurrentInput();
}
