
function display(data=0){
    const displayResult = document.querySelector('.display-out');
    displayResult.textContent = data;
}

function getTextContent(nodeObject){
    const node = document.querySelector("#" + nodeObject.id);
    const getNumber = node.childNodes;
    const displayNumber = getNumber[1].textContent;
    return Number(displayNumber);
}

function getNumber(button){

    const textDisplay = getTextContent(this);
    display(textDisplay);
    
   // display(this.id[lengthOfinput-1]);
}

const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(button => button.addEventListener('click', getNumber));

display();
