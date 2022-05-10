
function display(data=0){
    const displayResult = document.querySelector('.display-out');
    displayResult.textContent = data;
}

function getNumber(button){
    console.log(this.id);
}

const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(button => button.addEventListener('click', getNumber));

display();
