const fizzbuzz = require('./fizzbuzz');

test('3 should return the expected fizz', () => {
    const output = fizzbuzz(100);
    let outputArray = output.split("\n");
    console.log(outputArray);
    expect(output).toBe("fizz");
 });

test('255 should return the expected buzzfizz', () => {
// Arrange
// Act
const output = fizzbuzz("255");

// Assert
expect(output).toBe("buzzfizz");
});