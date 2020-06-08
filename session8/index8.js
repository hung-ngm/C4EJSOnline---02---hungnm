
//Exercise 1
// let count = 0;
// let Plus = document.getElementById('plus');
// let Minus = document.getElementById('minus');
// let Value = document.getElementById('value');
// Plus.addEventListener('click',() => {
//     count+=1;
//     Value.innerHTML = count;
   
// })

// Minus.addEventListener('click',() => {
//     count-=1;
//     Value.innerHTML = count;
    
// })


let StartValue;
let Inter;
let NumberValue = document.getElementById('number_value');

function UpdateValue(x){
    x = x - 1;
    console.log(x);
    NumberValue.textContent = x;
    if(x == 0){
        NumberValue.textContent = `Time's up`
        clearInterval(Inter);
    }
}

let InputValue = document.getElementById('input_value');
let Start = document.getElementById('start');
let Stop = document.getElementById('stop');

Start.addEventListener('click',() => {
    StartValue = InputValue.value;
    Inter = setInterval(() => {
        
        StartValue -= 1;
        UpdateValue(StartValue);
        
    },1000);

    
})
Stop.addEventListener('click', () => {
    NumberValue.textContent = 'Stopped';
    clearInterval(Inter);
})






