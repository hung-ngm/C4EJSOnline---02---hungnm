
//Exercise 1
const container = document.getElementById('list');
// for(let i = 0; i < 3; i++){
//     container.insertAdjacentHTML('beforeend',`<li>${i}</li>`);
// }

//Exercise 3
//A variable declared by let, in a function cannot exist after the function finishes running.
//A variable declared by var, in a function cannot exist after the function finishes running.

//Exercise 4
const liContainer = document.getElementsByTagName('li');
console.log(liContainer);
for(let i = 0; i < liContainer.length; i++){
    console.log(liContainer[i]);
}

//Exercise 5
const classContainer = document.getElementsByClassName('singer');
for(let i = 0; i < classContainer.length; i++){
    console.log(classContainer[i]);
}