/**
 * This quiz is to test your knowledge of if-statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Declare a const named initialValue and set its value to 10.
 */

const initialValue = 10;

/**
 * Question 2
 * Declare a let variable named result and set its initial value to 0.
 */

let result = 0;

/**
 * Question 3
 * Using an if statement, check if initialValue is greater than 5. If true, set result to initialValue times 2.
 */

if (initialValue > 5) {
    result = (initialValue * 2);
};


/**
 * Question 4
 * Declare an array named numbers containing the first five prime numbers.
 */

let numbers = [1, 3, 4, 5, 7];

/**
 * Question 5
 * If the fifth value in the numbers array is greater than initialValue, add 5 to result.
 */

if (numbers [4] > initialValue) {
    result += 5
};

/**
 * Question 6
 * Declare an object named settings with two properties: theme set to "light" and notifications set to true.
 */

let settings = {
    theme: "light",
    notifications: true,
};


/**
 * Question 7
 * Using an if statement, if notifications property is true, add 3 to result.
 */

if (notification === true) {
    result += 3
};


/**
 * Question: 8
 * Change the theme property of settings to "dark".
 */

settings.theme = "dark";


/**
 * Question: 9
 * If theme property is "dark" and result is less than 30, push the number 13 to the numbers array.
 */

if (settings.theme === "dark" && result < 30) {
    numbers.push (13)
};



/**
 * Question: 10
 * Declare a let variable named index and set its value to 4.
 */


let index = 4;


/**
 * Question: 11
 * If the value at the index position in the numbers array is equal to 7, multiply result by 2.
 */


if (numbers [index] === 7) {
    result *= 2
};


/**
 * Question 12
 * Change the value of index to the first position in the numbers array that has a value of 13.
 */


index = numbers [5];


/**
 * Question 13
 * If the index is odd, set notifications property to false.
 */


if (index % 2 === 0 ) {
    settings.notifications = false
};


/**
 * Question 14
 * If the notifications property is false, subtract initialValue from result.
 */


if (settings.notifications === false) {
    result -= initialValue
};


/**
 * Question 15
 * If initialValue minus result is less than 10, add an array containing three zeros to the end of the numbers array.
 */


if ( (initialValue - result) < 0 ) {

    numbers.push (0, 0, 0)
};


/**
 * Question 16
 * If the numbers array contains more than 7 elements, update the theme property of settings to "blue".
 */


if ( numbers.length > 7) {
    settings.theme = "blue"
};


/**
 * Question 17
 * Declare a const named multiplier with a value of 5.
 */


const multiplier = 5;



/**
 * Question 18
 * If the multiplier is a multiple of initialValue, assign the product of multiplier and result to result.
 */


if (multiplier % initialValue) {
    result*= multiplier
};


/**
 * Question 19
 * Create a new object userData with properties name set to "Alex", and score set to the value of result.
 */


let userData = {
    name: "Alex",
    score: result,
};

/**
 * Question 20
 * If score is greater than 50, add a new property to userData named membership and set its value to "gold".
 */


if (userData.score > 50) {
    userData.membership = "gold"
};



/**
 * Question 21
 * If userData name property starts with the letter "A", add 10 to the score property of userData.
 */


if (userData.name.startsWith("A")) {
userData.score += 10
};



/**
 * Question 22
 * Push the score property of userData to the numbers array.
 */


numbers.push (userData.score);



/**
 * Question 23
 * If the last element of the numbers array is odd, add a hasBonus property to userData and set its value to true.
 */


if (numbers[numbers.length - 1] % 2 !== 0){
    userData.hasBonus = true
};

/**
 * Question 24
 * If settings.theme is not "red", add 15 to the score property of userData.
 */


if (settings.theme !== "red") {
    userData.score += 15
};


/**
 * Question 25
 * If userData has a hasBonus property and its value is true, set result to the sum of result and the score property of userData,
 */

if (userData.hasBonus && userData.hasBonus === true) {
    result += userData.score
};