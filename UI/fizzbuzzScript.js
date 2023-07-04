//printFizzBuzz() takes a number from the input box and prints the fizzbuzz up to that number in a <p>
function printFizzBuzz() 
{
    let number = document.getElementById("number").value;
    console.log(number)
    finalArray = fizzbuzz(number);
    finalArrayText = finalArray.join("<br>");
    document.getElementById("demo").innerHTML = finalArrayText;
}

//clearScreen changes the <p> of the fizzbuzz to display nothing
function clearScreen()
{
    document.getElementById("demo").innerHTML = "";
}

// fizzbuzz takes a number, prints that number of numbers in a fizzbuzz form
function fizzbuzz(num) {
    numArray = ['3', '5', '7', '11', '13', '17']

    finalArray = []
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
            finalArray.push(i);
        }
        else
        {
            if (messageArray.includes("fezz")) //for special cas
            {
                console.log("fezz");
                finalArray.push("fezz");
            }
            else if (messageArray.includes("fezzBang")) //for special cas
            {
                console.log("fezzBang");
                finalArray.push("fezzBang");
            }
            else 
            {
                console.log(messageArray.join("")); //join whatever is in the message array into a string, and print it
                finalArray.push(messageArray.join(""));
            }
        }
    }
    return finalArray
}