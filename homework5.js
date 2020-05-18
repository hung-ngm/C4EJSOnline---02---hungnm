//part 1-1
// console.log(Math.random());

//part 1-2
// let Arr = [2, 5, 6, 9, 10];
// console.log(Arr);
// console.log(Arr[Math.round(Math.random()*4)]);







// let qList = [
//     {
//         question: 'How many goals has Ronaldo scored in the Champions League',
//         ansChoice: [123,124,125,126],
//         correct: 2,
//     },
//     {
//         question: 'How many legs do an octopus has?',
//         ansChoice: ['4 legs','no legs','8 legs','two legs'],
//         correct: 3,

//     },
//     {
//         question: 'Which country is home to the kangaroo?',
//         ansChoice: ['Australia','Austria','New Zealand','US'],
//         correct: 0
//     },
//     {

//     }
  
// ];

// let i;
// let ans;
// let score = 0;
// while(true){
//     i = Math.floor(Math.random()*qList.length);
//     console.log(i);
//     ans = Number(prompt(`${qList[i].question} \r\n 1. ${qList[i].ansChoice[0]} \r\n 2. ${qList[i].ansChoice[1]} \r\n 3. ${qList[i].ansChoice[2]} \r\n 4. ${qList[i].ansChoice[3]}`));
//     if(ans == qList[i].correct + 1){
//         alert('Bravo');
//         score+=1;
//         qList.slice(i,1);
//     } else {
//         alert('Good luck next time');
//         break;
//     }
// };
// console.log(`Score: ${score}`);


//Part 3.1
// let words = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let a = [];
// let b = [];


// for(let i = 0; i < words.length; i++){
//     if(a.indexOf(words[i]) == -1){
//         a.push(words[i]);
//         b.push(1);
    
//     } else{
//         b[a.indexOf(words[i])] += 1;
//     }
     
   
    
// }

// for(let j = 0; j< a.length; j++){
//     console.log(`${a[j]} : ${b[j]}`);
// }

//Part 3.1 cach 2
// let words = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
// let a = {

// };
// for(let i = 0; i < words.length; i++){
//     if(a[words[i]]){
//         a[words[i]] ++;
//     } else {
//         a[words[i]] = 1;
//     }
// }
// console.log(a);

const inventory = [

    {
    
        name: 'HP Envy 13aq',
    
        price: 21000,
    
        brand: 'HP',
    
        quantity: 5,
    
    },
    
    {
    
        name: 'Dell XPS 9370',
    
        price: 30000,
    
        brand: 'Dell',
    
        quantity: 1,
    
    },
    
    {
    
        name: 'Dell Inspiron 3567',
    
        price: 9300,
    
        brand: 'Dell',
    
        quantity: 12,
    
    },
    
    {
    
        name: 'Dell Latitude E5450',
    
        price: 8600,
    
        brand: 'Dell',
    
        quantity: 2,
    
    },
    
    {
    
        name: 'Asus Zenbook',
    
        brand: 'Asus',
    
        price: 20000,
    
        quantity: 4,
    
    },
    
    {
    
        name: 'HP Pavilion',
    
        brand: 'HP',
    
        price: 14000,
    
        quantity: 7,
    
    },
];
let inventoryByBrand = {

};
for(let i = 0; i < inventory.length; i++){
    if(inventoryByBrand[inventory[i].brand] == undefined){
        inventoryByBrand[inventory[i].brand] = [];
    } 
    inventoryByBrand[inventory[i].brand].push(inventory[i]);

    
}
console.log(inventoryByBrand);
let brand = prompt('Which brand?');
let genNum = inventoryByBrand[brand].length;
let s = '';
let totalprice = 0;
for(let j = 0; j< inventoryByBrand[brand].length; j++){
    s =  s + inventoryByBrand[brand][j].name + ' ';
    totalprice += inventoryByBrand[brand][j].price * inventoryByBrand[brand][j].quantity;
}
alert(`There are ${genNum} generations of ${brand} in inventory : \r\n  ${s} \r\n With total value: ${totalprice.toLocaleString()} K`);