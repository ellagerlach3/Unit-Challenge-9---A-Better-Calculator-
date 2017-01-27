var current_input = "0";

var memory = "0";

var operator = 0;

/**
 * Helper function for displaying the current input
 *
 * @param ...
 * @return .....
 */
function displayCurrentInput()
{
    document.getElementById('screen').value = currentInput;
}

/**
 * Adds a digit to the current input
 *
 * @param ...
 * @return .....
 */
function addDigit(dig)
{
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1))
    {
        currentInput = dig;
    }
    else
    {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal to the current input
 *
 * @param ...
 * @return .....
 */
function addDecimal()
{
    if (currentInput.length == 0)
    {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else
    {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1)
        {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything.
 *
 * @param ...
 * @return .....
 */
function allClear()
{
    currentInput = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 *
 * @param ...
 * @return .....
 */
function storeOperator(op)
{
    if (op.indexOf("") > -1)
    {
        operator = 1;
    }; //codes for
    if (op.indexOf("/") > -1)
    {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1)
    {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1)
    {
        operator = 4;
    }; // difference
    memory = currentInput; //store value
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Calculate using operator, the memory and what is current
 *
 * @param ...
 * @return .....
 */
function calculate()
{
    if (operator == 1)
    {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2)
    {
        currentInput = eval(memory) / eval(currentInput);
        if (currentInput == Infinity)
        {
            currentInput = "ERROR DIVIDE BY 0";
        }
    };
    if (operator == 3)
    {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4)
    {
        currentInput = eval(memory) - eval(currentInput);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Change the sign of the current input
 *
 * @param ...
 * @return .....
 */
function changeSign()
{
    currentInput = (currentInput - 1);
    displayCurrentInput();
}

/**
 * Clear the current input back to 0
 *
 * @param ...
 * @return .....
 */
function clearCurrent()
{
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Change the current input to a percentage
 *
 * @param ...
 * @return .....
 */
function percentage()
{
    currentInput = (currentInput / 100)
    displayCurrentInput();
}

/**
 * Calculate the factorial of the current input
 *
 * @param ...
 * @return .....
 */
function factorial()
{
    var result = 1;
    for (i = currentInput; i > 0; i--)
    {
        result = result * i;
    }
    currentInput = result;
    displayCurrentInput();
}

/**
 * Calculate the square of the current input
 *
 * @param ...
 * @return .....
 */
function square()
{
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}

/**
 * Calculate the square root of the current input
 *
 * @param ...
 * @return .....
 */
function squareRoot()
{
    currentInput = Math.pow(currentInput, 0.5);
    displayCurrentInput();
}

/**
 * Calculate the inverse of the current input
 *
 * @param ...
 * @return .....
 */
function inverse()
{
    currentInput = Math.pow(currentInput, -1);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function controlLength()
{
    if (currentInput.length >= 17)
    {
        currentInput = currentInput.substr(0, 17);
    }
    else
    {
        currentInput = currentInput;
    }
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function sine()
{
    var round_sin = Math.sin(currentInput);
    currentInput = round_sin.toFixed(10);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function cosine()
{
    var round_cosine = Math.cos(currentInput);
    currentInput = round_cosine.toFixed(10);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function tangent()
{
    var round_tangent = Math.tan(currentInput);
    currentInput = round_tangent.toFixed(10);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function pi()
{
    currentInput = Math.PI;
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function degreeSine()
{
    var round_degree_sine = Math.sin((currentInput * (Math.PI / 180)));
    currentInput = round_degree_sine.toFixed(10);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function degreeCosine()
{
    var round_degree_cosine = Math.cos((currentInput * (Math.PI / 180)));
    currentInput = round_degree_cosine.toFixed(10)
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function degreeTangent() {
    var round_degree_tangent = Math.tan((currentInput * (Math.PI / 180)));
    currentInput = round_degree_tangent.toFixed(10);
    displayCurrentInput();
}
var mem_value;

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function memoryStore()
{
    mem_value = document.getElementById('screen').value;
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function memoryRecall()
{
    currentInput = mem_value;
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function memoryPlus()
{
    currentInput = parseInt(mem_value) + parseInt(currentInput);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function memoryMinus()
{
    currentInput = parseInt(mem_value) - parseInt(currentInput);
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function memoryClear()
{
    mem_value = "0";
    currentInput = mem_value;
    displayCurrentInput();
}

/**
 * Description...
 *
 * @param ...
 * @return .....
 */
function baseTen()
{
    currentInput = Math.pow(10, currentInput);
    displayCurrentInput();
}
