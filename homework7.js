
// //Exercise 1
// const container = document.getElementById('list');
// // for(let i = 0; i < 3; i++){
// //     container.insertAdjacentHTML('beforeend',`<li>${i}</li>`);
// // }

// //Exercise 3
// //A variable declared by let, in a function cannot exist after the function finishes running.
// //A variable declared by var, in a function cannot exist after the function finishes running.

// //Exercise 4
// const liContainer = document.getElementsByTagName('li');
// console.log(liContainer);
// for(let i = 0; i < liContainer.length; i++){
//     console.log(liContainer[i]);
// }

// //Exercise 5
// const classContainer = document.getElementsByClassName('singer');
// for(let i = 0; i < classContainer.length; i++){
//     console.log(classContainer[i]);
// }

//Exercise 12
const items = ['Backpack','MiBand watch','Ring'];
console.log(items);

const ItemUl = document.getElementById('item_list_ul');
for(let i = 0; i < items.length; i++){
    ItemUl.insertAdjacentHTML('beforeend',`<li><span>${items[i]}</span></li>`)
}
console.log(ItemUl); 

const ItemInput = document.getElementById('item_input');
const AddButton = document.getElementById('add_btn');





AddButton.addEventListener('click', () => {
    const name = ItemInput.value;
    items.push(name);
    ItemUl.insertAdjacentHTML('beforeend',`<li><span>${name}</span></li>`);
    

})   


const LiRemoveButton = document.getElementsByTagName('li');


function AddRemoveButton(){
    const LiList = document.getElementsByTagName('li');
    for(let i = 0; i< LiRemoveButton.length; i++){
        LiRemoveButton[i].insertAdjacentHTML('beforeend',`<button class = 'Remove_an_item'>Remove</button>`);
        
    
    }
    const ButtonList = document.getElementsByClassName('Remove_an_item');
    console.log(ButtonList);
    for(let j = 0; j < ButtonList.length; j++){
        ButtonList[j].addEventListener('click',() => {
            ButtonList[j].remove();
            console.log(LiList[j]);
            LiList[j].remove();
            

        });
    }
    
}






const Remove = document.getElementById('remove_item');
Remove.addEventListener('click',AddRemoveButton);   





// for(let i = 0; i < ItemRemoved.length; i++){
//     const ItemRemoved = document.getElementById('Remove_an_item');
//     ItemRemoved[i].addEventListener('click', () => {
//         items.splice(i,1);
//     })
// }




