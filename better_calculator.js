var currentInput = "0";

var memory = "0";

var operator = 0;

/**
 * Helper function for displaying the current input
 * @author Steve Temple
 */
function displayCurrentInput()
{
    document.getElementById('screen').value = currentInput;
}

/**
 * Adds a digit to the current input
 * @author Nick Tanaka
 * @param {number} dig      This is the digit that the user types into the calculator text box
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
 * @author Nick Tanaka
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
 * @author Nick Tanaka
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
 * @author Nick Tanaka
 * @param op        This is the mathematical operation that the user chooses to use by pressing a button with one of the four operations
 */
function storeOperator(op)
{
    if (op.indexOf("*") > -1)
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
 * @author Nick Tanaka
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
 * @author Nick Tanaka
 */
function changeSign()
{
    currentInput = (currentInput * -1);
    displayCurrentInput();
}

/**
 * Clear the current input back to 0
 * @author Nick Tanaka
 */
function clearCurrent()
{
    currentInput = "0";
    displayCurrentInput();
}

/**
 * Change the current input to a percentage
 * @author Nick Tanaka
 */
function percentage()
{
    currentInput = (currentInput / 100)
    displayCurrentInput();
}

/**
 * Calculate the factorial of the current input
 * @author Nick Tanaka
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
 * @author Nick Tanaka
 */
function square()
{
    currentInput = Math.pow(currentInput, 2);
    displayCurrentInput();
}

/**
 * Calculate the square root of the current input
 * @author Nick Tanaka
 */
function squareRoot()
{
    currentInput = Math.pow(currentInput, 0.5);
    displayCurrentInput();
}

/**
 * Calculate the inverse of the current input
 * @author Nick Tanakat
 */
function inverse()
{
    currentInput = Math.pow(currentInput, -1);
    displayCurrentInput();
}

/**
 * Prevents the user from inputting more than 17 values into the calculator text box
 * @author Nick Tanaka
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
 * Finds the sine of the current input
 * @author Nick Tanaka
 */
function sine()
{
    var round_sin = Math.sin(currentInput);
    currentInput = round_sin.toFixed(10);
    displayCurrentInput();
}

/**
 * Finds the cosine of the current input
 * @author Nick Tanaka
 */
function cosine()
{
    var round_cosine = Math.cos(currentInput);
    currentInput = round_cosine.toFixed(10);
    displayCurrentInput();
}

/**
 * Finds the tangent of the current input
 * @author Nick Tanaka
 */
function tangent()
{
    var round_tangent = Math.tan(currentInput);
    currentInput = round_tangent.toFixed(10);
    displayCurrentInput();
}

/**
 * Uses JavaScript's built-in Math.PI value to return a value for Pi
 * @author Nick Tanaka
 */
function pi()
{
    currentInput = Math.PI;
    displayCurrentInput();
}

/**
 * Finds the sine of the current input but returns the value in degrees
 * @author Nick Tanaka
 */
function degreeSine()
{
    var round_degree_sine = Math.sin((currentInput * (Math.PI / 180)));
    currentInput = round_degree_sine.toFixed(10);
    displayCurrentInput();
}

/**
 * Finds the cosine of the current input but retuns the value in degrees
 * @author Nick Tanaka
 */
function degreeCosine()
{
    var round_degree_cosine = Math.cos((currentInput * (Math.PI / 180)));
    currentInput = round_degree_cosine.toFixed(10)
    displayCurrentInput();
}

/**
 * Finds the tangent of the current input but returns the value in degrees
 * @author Nick Tanaka
 */
function degreeTangent() {
    var round_degree_tangent = Math.tan((currentInput * (Math.PI / 180)));
    currentInput = round_degree_tangent.toFixed(10);
    displayCurrentInput();
}
var mem_value;

/**
 * Stores a value that the user wants to save for future calculator operations
 * @author Nick Tanaka
 */
function memoryStore()
{
    mem_value = document.getElementById('screen').value;
}

/**
 * Recalls the value that was previously stored by the user with the memoryStore() function
 * @author Nick Tanaka
 */
function memoryRecall()
{
    currentInput = mem_value;
    displayCurrentInput();
}

/**
 * Adds the current input value to the value that was prevously stored in the memoryStore() function
 * @author Nick Tanaka
 */
function memoryPlus()
{
    currentInput = parseInt(mem_value) + parseInt(currentInput);
    displayCurrentInput();
}

/**
 * Subtracts the current input value from the value that was previously stored in the memoryStore() function
 * @author Nick Tanaka
 */
function memoryMinus()
{
    currentInput = parseInt(mem_value) - parseInt(currentInput);
    displayCurrentInput();
}

/**
 * Clears the value that was previously stored in the memoryStore() function
 * @author Nick Tanaka
 */
function memoryClear()
{
    mem_value = "0";
    currentInput = mem_value;
    displayCurrentInput();
}

/**
 * Finds the value of 10 to the power of the current input
 * @author Nick Tanaka
 */
function baseTen()
{
    currentInput = Math.pow(10, currentInput);
    displayCurrentInput();
}
