

// Changes the text displayed in the Calculator when button is pressed
function display(data=0){
    const displayResult = document.querySelector('.display-out');
    //console.log(data);

    if (displayResult.textContent === "0" || previousInput !== "num"){
        displayResult.textContent = data;
    }else {
        displayResult.textContent += data;
    }
}

// Operation Functions

function add(operand1, operand2){

    const result = Number(operand1) + Number(operand2);
    //console.log(operand);
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
    if (operand2 === '0'){
        return "ERROR";
    }
    return Number(operand1) / Number(operand2);
}


// calls the correct operation depending on the id of  the button clicked
function callOperation(operationId){

    let result; 
    if (operationId === "addition"){
        result = add(operand[0] ,operand[1]);
    } else if (operationId === "substraction") {
        result = substract(operand[0],operand[1]);
    }else if( operationId === "multiplication"){
        result = multiply(operand[0],operand[1]);
    }else if(operationId === "division"){
        result = divide(operand[0],operand[1]);
    }

    return result;
}

// When AC button is pressed and set the display are to 0
function clearDisplay(){
    const displayResult = document.querySelector('.display-out');
    displayResult.textContent = 0;
    operand = [];
    expression = [];
    operation = null;
}

// gets the  number or the operator clicked
function getTextContent(nodeObject){
    const node = document.querySelector("#" + nodeObject.id);
    const text = node.childNodes[1].textContent;
    return (text);
}


//function
function getPreviousNumber(){
    const previousNumber = document.querySelector('.display-out').textContent;
    return (previousNumber);
}

function onNumber(button){

    const numberDisplay = getTextContent(this);
    display((numberDisplay).replace(" ",''));
    previousInput = "num";
}


function onOperations(){


    if (previousInput === "ops"){
        console.log("Can't Chain two operations");
        return ;
    }

    const getNumber = getPreviousNumber();
    operand.push(getNumber);
    expression.push(getNumber);
    console.log(operand);
    previousInput = "ops";
    
    expression.push(this.id);
    

    if (operation === null){
         operation = this.id;
    }else{
        result = callOperation(operation);
        operand = [result];
        operation = this.id;
        display(result);
    }
    
}


let expression = [];
let operand = [];
let operation = null;
let previousInput = "";


const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(button => button.addEventListener('click', onNumber));

const operationButtons = document.querySelectorAll('.operations');
operationButtons.forEach(button => button.addEventListener('click', onOperations));

const ac = document.querySelector('#ac');
ac.addEventListener('click',clearDisplay);         

display();
