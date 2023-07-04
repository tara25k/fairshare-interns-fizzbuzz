// fizzbuzz takes a number, prints that number of numbers in a fizzbuzz form
function fizzbuzz(num) {
    // main loop
    for (i=1; i<=num; i++){
        messageArray = []
        //special cases
        if (numArray.includes('7') && i%7 == 0)
        {
            messageArray.push("bang");
        }

        if (numArray.includes('3') && i%3 == 0)
        {
            messageArray.push("fizz");
        }

        if (numArray.includes('5') && i%5 == 0)
        {
            messageArray.push("buzz");
        }

        if (numArray.includes('13') && i%13 == 0)
        {
            messageArray.push("fezz");
        }

        if (numArray.includes('11') && i%11 == 0)
        {
            messageArray.push("bong");
            if (i%13 == 0)
            {
                messageArray.push("fezzBong");
            }
        }

        if (numArray.includes('17') && i%17 == 0){
            messageArray = messageArray.reverse();
        }

        //deciding what to print
        if (messageArray.length == 0) //if there are no messages
        {
            console.log(i);
        }
        else
        {
            if (messageArray.includes("fezz")) //for special cas
            {
                console.log("fezz");
            }
            else if (messageArray.includes("fezzBang")) //for special cas
            {
                console.log("fezzBang");
            }
            else 
            {
                console.log(messageArray.join("")); //join whatever is in the message array into a string, and print it
            }
        }
    }

}

//fizbuzz single takes a number and returns a message
function fizzBuzzSingle(num) {
    i = num
    // main loop

    messageArray = []
    //special cases
    if (numArray.includes('7') && i%7 == 0)
    {
        messageArray.push("bang");
    }

    if (numArray.includes('3') && i%3 == 0)
    {
        messageArray.push("fizz");
    }

    if (numArray.includes('5') && i%5 == 0)
    {
        messageArray.push("buzz");
    }

    if (numArray.includes('13') && i%13 == 0)
    {
        messageArray.push("fezz");
    }

    if (numArray.includes('11') && i%11 == 0)
    {
        messageArray.push("bong");
        if (i%13 == 0)
        {
            messageArray.push("fezzBong");
        }
    }

    if (numArray.includes('17') && i%17 == 0){
        messageArray = messageArray.reverse();
    }

    //deciding what to print
    if (messageArray.length == 0) //if there are no messages
    {
        return i;
    }
    else
    {
        if (messageArray.includes("fezz")) //for special cas
        {
           return "fezz";""
        }
        else if (messageArray.includes("fezzBang")) //for special cas
        {
            return "fezzBang";
        }
        else 
        {
            return messageArray.join(""); //join whatever is in the message array into a string, and print it
        }
    }

}

//MAIN

//for reading in from the console
// const readline = require('readline'); 
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

//defining global variables
let num = 0;
let numArray = [];

// reading numbers in from the command line
// process.argv.forEach((val, index) => {
//     if (index > 1){
//         numArray.push(val); //we add them to an array, which is checked every time a rule is about to begin
//         //if the rule number is in this list, we can proceed with the rule
//     }
// });
// console.log(numArray) //for debugging
numArray = ['3', '5', '7', '11', '13', '17']

//for reading in from the console
//we use a promise to be able to run the fizzbuzz function after asking the prompt, instead of simultaneously
// const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

// (async() => {
//   try {
//     num = await prompt("How many numbers do you want to use? ");
//     rl.close();
//     //catching errors:
//   } catch (e) {
//     console.error("Unable to prompt", e);
//   }
// })();

// // When done reading prompt, call fizzbuzz
// rl.on('close', () => console.log(fizzBuzzSingle(num)));
fizzbuzz(100);
module.exports = fizzbuzz;
