

// Changes the text displayed in the Calculator when button is pressed
function display(data=0){
    const displayResult = document.querySelector('.display-out');
    console.log(data);

    if(displayResult.textContent === "0" || typeof data !== 'number'){
        displayResult.textContent = data;
    }else {
        displayResult.textContent += data;
    }
}


// When AC button is pressed and set the display are to 0
function clearDisplay(){
    const displayResult = document.querySelector('.display-out');
    displayResult.textContent = 0;
}

// gets the  number or the operator clicked
function getTextContent(nodeObject){
    const node = document.querySelector("#" + nodeObject.id);
    const text = node.childNodes[1].textContent;
    return (text);
}

function onNumber(button){

    const numberDisplay = getTextContent(this);
    display(Number(numberDisplay));
}


function onOperations(){
    const operationDisplay = getTextContent(this);
    display(operationDisplay);
}


let operand = [];
let operation = "";
const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(button => button.addEventListener('click', onNumber));

const operationButtons = document.querySelectorAll('.operations');
operationButtons.forEach(button => button.addEventListener('click', onOperations));

const ac = document.querySelector('#ac');
ac.addEventListener('click',clearDisplay);

display();
