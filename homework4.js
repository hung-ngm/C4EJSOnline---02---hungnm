//Exercise 1
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color:'white'
// };

// for (let x in product){
//     console.log(`${x} : ${product[x]}`);
// }

// x receives Property from product


//Exercise 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate:  `2019-10-08T18:00:24+0000`,
    expectedHours: 0.5,
};
({subject, dueDate, assignTo} = task);
console.log(subject);
console.log(dueDate);
console.log(assignTo);