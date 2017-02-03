// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    allClear();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    allClear();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

// Test for changing the current input to a percentage
QUnit.test( "Percentage test", function( assert ) {
    allClear();
    addDigit('50');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
});

// Test for calcualtiong factorial of current input
QUnit.test( "Calculating factorial test", function( assert ) {
    allClear();
    addDigit('5');
    factorial();
    assert.equal(document.getElementById("screen").value, "120", "Passed - Expected 120");
});

// Test for calcualtiong the square of the current input
QUnit.test( "Calculating square test", function( assert ) {
    allClear();
    addDigit('7');
    square();
    assert.equal(document.getElementById("screen").value, "49", "Passed - Expected 49");
});

// Test for changing the sign of the current input
QUnit.test( "Change sign test", function ( assert ) {
    allClear();
    addDigit('1');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-1", "Passed - Expected -1");
});

// Test for finding the inverse
QUnit.test( "Inverse test", function ( assert ) {
    allClear();
    addDigit('5');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

// Test for finding square root
QUnit.test( "Square root test", function ( assert ) {
    allClear();
    addDigit('4');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "2", "Passed - Expected 2");
});

// Test for clearing JUST current input, not the stored procedure
QUnit.test( "Clear current input only test", function ( assert ) {
    allClear();
    addDigit('3');
    storeOperator('+');
    addDigit('5');
    clearCurrent();
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "5", "Passed - Expected 5");
});

// Test for pi
QUnit.test( "Pi test", function ( assert ) {
    allClear();
    addDigit('Math.PI');
    pi();
    assert.equal(document.getElementById("screen").value, "3.141592653589793", "Passed - Expected 3.141592653589793");
});

// Test for calculating the sine of a curent input in DEGREE mode
QUnit.test( "Sine in DEGREE mode test", function ( assert ) {
    allClear();
    addDigit('3');
    addDigit('0');
    degreeSine();
    assert.equal(document.getElementById("screen").value, "0.5000000000", "Passed - Expected 0.5000000000");
});

// Test for calculating the cosine of a current input in DEGREE mode
QUnit.test( "Cosine in DEGREE mode test", function ( assert ) {
    allClear();
    addDigit('3');
    addDigit('0');
    degreeCosine();
    assert.equal(document.getElementById("screen").value, "0.8660254038", "Passed - Expected 0.8660254038");
});

// Test for calculating the tangent of a current input in DEGREE mode
QUnit.test( "Tangent in DEGREE mode test", function ( assert ) {
    allClear();
    addDigit('6');
    addDigit('0');
    degreeTangent();
    assert.equal(document.getElementById("screen").value, "1.7320508076", "Passed - Expected 1.7320508076");
});

// Test for calculating the sine of a current input in RADIAN mode
QUnit.test( "Sine in RADIAN mode test", function ( assert ) {
    allClear();
    addDigit('9');
    addDigit('0');
    sine();
    assert.equal(document.getElementById("screen").value, "0.8939966636", "Passed - Expected 0.8939966636");
});

// Test for calculating the cosine of a current input in RADIAN mode
QUnit.test( "Cosine in RADIAN mode test", function ( assert ) {
    allClear();
    addDigit('1');
    addDigit('2');
    addDigit('0');
    cosine();
    assert.equal(document.getElementById("screen").value, "0.8141809705", "Passed - Expected 0.8141809705");
});

// Test for calculating the tangent of a current input in RADIAN mode
QUnit.test( "Tangent in RADIAN mode test", function ( assert ) {
    allClear();
    addDigit('1');
    addDigit('8');
    addDigit('0');
    tangent();
    assert.equal(document.getElementById("screen").value, "1.3386902104", "Passed - Expected 1.3386902104");
});

// Test for when dividing by zero, an error message shows up
QUnit.test( "Dividing by zero test", function ( assert ) {
    allClear();
    addDigit('9');
    storeOperator('/');
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "ERROR DIVIDE BY 0", "Passed - Expected ERROR DIVIDE BY 0");
});

