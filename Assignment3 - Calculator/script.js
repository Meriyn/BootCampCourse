const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.buttons button'); //Array-like object
let operatorPressed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        //the above code iterates over each of the enetered values by the user by using forEach() and saves it

        //The buttonValue variable is assigned the text content of the button that was CLICKED, which is accessed using the textContent property of the button element.

        //So the code is looping through all the buttons and adding a click event listener to each one. When a button is clicked, the value of that button (i.e. the text content) is stored in the buttonValue variable for further processing

        //Question: is buttonValue and array-like object here?
        //Answer: No, buttonValue is not an array-like object here. It is a variable that stores the text content of the button that WAS CLICKED. In the code, buttonValue is assigned the value of button.textContent, which gets the text content of the button element that was CLICKED. It is then used in the if statements to determine which action to take based on the value of the button clicked.

        //So it is the LAST CLICKED button by the user!!

        if (buttonValue === 'AC') {
            screen.value = '';
            operatorPressed = false;
        } else if (buttonValue === '=') {
            screen.value = eval(screen.value);
            operatorPressed = false;
        } else if (buttonValue === '.' && screen.value.includes('.')) {
            // Prevent multiple decimal points
            return;
        } else if (
            ['+', '-', '*', '/'].includes(buttonValue) &&
            operatorPressed
        ) {
            // Prevent multiple operators
            return;
            //This code block checks if the current buttonValue (i.e., the value of the button that was just clicked) is one of the operators (+, -, *, /) and if the operatorPressed variable is currently true.
        } else {
            screen.value += buttonValue;
            if (['+', '-', '*', '/'].includes(buttonValue)) {
                operatorPressed = true;
            } else {
                operatorPressed = false;
            }
        }
    });
});