//Exercise 1
// let a = 5;
// let b = 6;
// console.log(a, b);
// b = [a, a = b][0];
// console.log(a, b)

//Exercise 2
// str.split(separator, limit)
// const s = 'Hello beauty there'
// const a = Array(s.split(" "))
// console.log(a)

//Exercise 3
// const a = [4, 5, 7, -8];
// console.log(...a);


//Exercise 4
// let items = ['Jeans','T-Shirt','Socks'];



// let q;
// while(true){
//     q = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)')
//     if(q == 'c' || q == 'r' || q == 'u' || q == 'd'){
//         if(q == 'c'){
//             let newItem = prompt('Enter the name of the new item')
//             items.push(newItem)
//             alert('Done')
//         } else if(q == 'r'){
//             console.log('The current items are: ')
//             for(let i = 0; i < items.length; i++){
//                 console.log(`${i+1}. ${items[i]}`)
//             }
//             alert('Done')
//         } else if(q == 'u'){
//             let PosUpdate = Number(prompt('Enter the position you want to update'))
//             let newName = prompt('Enter the new name')
//             items[PosUpdate - 1] = newName
//             alert('Done')

//         } else {
//             let delPos = prompt('Enter the position you want to delete')
//             items.splice(delPos,1)
//             alert('Done')

//         }


//     } else {
//         alert('This command is not supported')
//     }

// }


//Exercise 5
// let NumList = prompt(`Enter a sequence of number, separated by commas(,)`);
// let NumArray = NumList.split(',');

// let s = 0;
// for(let i = 0; i < NumArray.length; i++){
//     s += Number(NumArray[i])

// }
// alert(`The sum of them is ${s}`)

//Exercise 6
// let NumList = prompt(`Enter a sequence of number, separated by ","`);
// let NumArray = NumList.split(',');

// let s = NumList[0];
// for (let i = 0; i < NumArray.length; i++){
//     if(Number(NumArray[i]) < s){
//         s = Number(NumArray[i])
//     }
// }
// alert(`The smallest number is ${s}`);

//Exercise 7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let number = Number(prompt('Enter a number'));
// let i = 0;
// let k = true;
// while(k){
//     if(i >= arr.length){
//         alert(`${number} is NOT found in my array`);
//         k = false;

//     } else {
//         if(Number(arr[i]) == number){
//             alert(`${number} is FOUND in my array at index ${i}`);
//             k = false;
//         } else{
//             i+=1
//         }
//     }
// }

//Exercise 8

// let sheepList = [5,7,300,90,24,50,75]
// console.log(`Hello, my name is Phuong Nam and here is my sheep sizes:`);
// for(let i  = 0; i < sheepList.length; i++){
//     console.log(sheepList[i])
// }
// let sheepMax = Math.max(...sheepList);
// console.log(`Now my biggest sheep has size ${sheepMax}, let's shave it`);

// sheepList[sheepList.indexOf(sheepMax)] = 8;
// console.log('After shearing, here is my flock')
// for(let i  = 0; i < sheepList.length; i++){
//     console.log(sheepList[i])
// }

// for(let j = 0; j < 4; j++){
//     console.log(`MONTH ${j}`)
//     console.log('One month has, passed, my sheeps have grown, here are their sizes')
    
//     for(let i  = 0; i < sheepList.length; i++){
//         sheepList[i]+=50
//     }
//     for(let i  = 0; i < sheepList.length; i++){
//         console.log(sheepList[i])
//     }
//     let sheepMax = Math.max(...sheepList);
//     console.log(`Now my biggest sheep has size ${sheepMax}, let's shave it`);

//     sheepList[sheepList.indexOf(sheepMax)] = 8;
//     console.log('After shearing, here is my flock')
//     for(let l  = 0; l < sheepList.length; l++){
//         console.log(sheepList[l])
//     }
// }
// let s = 0;
// for(let i  = 0; i < sheepList.length; i++){
//     s+=sheepList[i]
// }
// console.log(`My flock has size in total ${s}`)
// console.log(`I would get ${s*2}`)

//Exercise 9
// const colors = ['red','gray','blue','purple','cyan'];
// for(let i = 0; i < colors.length; i++){
//     color(`${colors[i]}`)
//     fd(50+25*i)
//     rt(90)
//     fd(50+25*i)
//     rt(90)
//     fd(50+25*i)
//     rt(90)
//     fd(50+25*i)
//     rt(90)
// }

//Exercise 10
// let NameList = prompt('Enter a sequence of names');
// const NameArray = NameList.split(',');
// const newArray = NameArray.map(x => '<' + x + '>');

// let o = '';
// for (let i = 0; i < NameArray.length; i++){
//     o = o + NameArray[i] + ','
// }

// let s = '';
// for (let j = 0; j < newArray.length; j++){
//     s = s+ newArray[j] + ','
// }
// alert(`${o} => ${s}`);

//Exercise 11
// let NumSequence = prompt('Enter a sequence number');
// let NumArray = NumSequence.split(',');
// let s = '';
// for (let i = 0; i < NumArray.length; i++){
//     s = s + NumArray[i] + ','
// }
// let odd = '';
// for (let i = 0; i < NumArray.length; i++){
//     if(Number(NumArray[i])%2 == 1){
//         odd = odd + NumArray[i] + ',' 
//     }
// }
// alert(`${s} => ${odd}`)


//Using filter
let NumSequence = prompt('Enter a sequence number');
let NumArray = NumSequence.split(',');
let OddArray = NumArray.filter(x => x % 2 == 1)
let s = '';
for (let i = 0; i < NumArray.length; i++){
    s = s + NumArray[i] + ','
}
let odd = '';
for (let j = 0; j < OddArray.length; j++){
    odd = odd + OddArray[j] + ','
}
alert(`${s} => ${odd}`);
