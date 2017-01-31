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
