//getting key values from classes in HTML
const calculator = document.querySelector('.calc')
const keys = calculator.querySelector('.calculatorKeys')

keys.addEventListener('click', e => {
//function for PRESSESD key 
 if (e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
        console.log('number key!')
      }
      else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }
      else if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      else if (action === 'clear') {
        console.log('clear key!')
      }
      
      else if (action === 'calculate') {
        console.log('equal key!')
      }
 }
})
//getting the value from our user from buttons to diplay on the 'Display'
const display = document.querySelector('.calculatorDisplay')

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...
    if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent //if our display is 0 then display the key which is pressed
        }
        else {
            display.textContent = displayedNum + keyContent; //concatinate the value user is entering through button
          }
      } else if (action === 'decimal') {
        display.textContent = displayedNum + '.'//concatinate the '.' 
      }
  } 
})

