const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

const number = document.querySelector('#number')

const INITIAL_VALUE = 0
const INCREMENT_AMOUNT = 1

function decreaseNumber(){
    number.innerHTML -= INCREMENT_AMOUNT
}
function resetNumber(){
    number.innerHTML = INITIAL_VALUE
}
function increaseNumber(){
    let x = parseInt(number.innerHTML);
    x+= INCREMENT_AMOUNT;
    number.innerHTML = x;
}
decrease.addEventListener('click',decreaseNumber);
reset.addEventListener('click',resetNumber);
increase.addEventListener('click',increaseNumber);