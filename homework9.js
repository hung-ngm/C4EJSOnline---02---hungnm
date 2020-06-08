//Exercise 1
// let promise = new Promise((resolve,rejcet) => {
//     resolve('Promise is da best')
// })
// promise.then(alert)

// async function printText(){
    
//     const result = await 'Promise is da best';
//     console.log(result);
// }
// printText();

//Exercise 2


// function createUrl(url){
//     const x = `https://pokeapi.co/api/v2/pokemon/${url}/`;
//     console.log(x);
//     return x;
// }

// console.log(createUrl('pikachu'));


// const fetchPromise = fetch(createUrl('pikachu'));


// fetchPromise.then(connection => {
//     console.log("connected");
//     console.log(connection);
//     const jsonpromise = connection.json();
//     jsonpromise.then(
//       res => console.log(res)
//     )
// });
// var SheetDB = require('sheetdb-js')
// SheetDB.read('https://sheetdb.io/api/v1/58f61be4dda40', {}).then(function(result){
//     console.log(result);
//   }, function(error){
//     console.log(error);
//   });

//Exercise 4
// function NumberGen(){
//   return Math.floor(Math.random() * 11);
// }
// const x = NumberGen();
// console.log(x);
// if (x < 0){
//   console.log('Failed: the number is smaller than 0');
// } else if (x > 10){
//   console.log('Failed: the number is bigger than 10');
// } else {
//   console.log('Passed, bravo');
// }

//Exercise 5
// function getRndInteger(a, b) {
//   return Math.floor(Math.random() * (b - a) ) + a;
// }

// const x = getRndInteger(4, 16);
// console.log(x);
// if (x < 4) {
// console.log('Failed: the number is smaller than 4');
// } else if (x > 16) {
// console.log('Failed: the number is bigger than 16');
// } else {
// console.log('Passed, bravo');
// }

//Exercise 6
// function distance(x1,y1,x2,y2){
//   return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
// }
// const d = distance(3,10,0,6);
// console.log(d);
// if (d != 5) {
//   console.log('Failed: the calculation is wrong');
// } else {
//   console.log('Passed, bravo');
// }

//Exercise 7

const Paragraph = document.getElementById('paragraph');
const Author = document.getElementById('author');

async function postQuote(url){
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  Paragraph.textContent = data['contents']['quotes'][0]['quote'];
  Author.textContent = data['contents']['quotes'][0]['author']
  


}
postQuote('http://quotes.rest/qod.json');