

// Changes the text displayed in the Calculator when button is pressed
function display(data=0){
    const displayResult = document.querySelector('.display-out');
    //console.log(data);

    if (displayResult.textContent === "0" || typeof data !== 'number'  || isNaN(Number(displayResult.textContent))){
        displayResult.textContent = data;
    }else {
        displayResult.textContent += data;
    }
}

// Operation Functions

function add(operand1, operand2){

    const result = Number(operand1) + Number(operand2);
    console.log(operand);
   // operand = [];
    return result;
}

function substract(operand1, operand2){
    return Number(operand1) - Number(operand2);
}

function multiply(operand1,operand2){
    return Number(operand1) * Number(operand2);
}

function divide(operand1,operand2){
    return Number(operand1) / Number(operand2);
}


// When AC button is pressed and set the display are to 0
function clearDisplay(){
    const displayResult = document.querySelector('.display-out');
    displayResult.textContent = 0;
    operand = [];
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
    let operationDisplay = getTextContent(this);
    console.log(this.id);
   
    const previousText = document.querySelector(".display-out").textContent;
    display(operationDisplay); 
    

    if(isNaN(Number(previousText))){
        console.log("Error");
    }else{
        operand.push(Number(previousText));

        if(operand.length == 2 ){
            operationDisplay = Number(add(operand[0],operand[1]));
            operand = [];
            display(operationDisplay); 
        }
       
    }

    console.log(operand);
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
