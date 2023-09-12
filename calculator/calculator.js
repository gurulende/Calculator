let calculation = localStorage.getItem('calcuation');

displayCalculation();


function updateCalculation(value){
    calculation += value;

    displayCalculation();

    localStorage.setItem('calcualtion', calculation);
}

function displayCalculation(){
   document.querySelector('.js-message').innerHTML = calculation;
}