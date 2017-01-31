// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    clearCurrent();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    clearCurrent();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
});

// Test for changing the current input to a percentage
QUnit.test( "Percentage test", function( assert ) {
    clearCurrent();
    addDigit('50');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
});

// Test for calcualtiong factorial of current input
QUnit.test( "Calculating factorial test", function( assert ) {
    clearCurrent();
    addDigit('5');
    factorial();
    assert.equal(document.getElementById("screen").value, "120", "Passed - Expected 120");
});

// Test for calcualtiong the square of the current input
QUnit.test( "Calculating square test", function( assert ) {
    clearCurrent();
    addDigit('7');
    square();
    assert.equal(document.getElementById("screen").value, "49", "Passed - Expected 49");
});


