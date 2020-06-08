let timeSheetData = [
    {
        Column1:'Project',
        Column2:'Task',
        Column3:'Time Spent',
    },
    {
        Column1:'Learn front-end',
        Column2:'Learn HTML',
        Column3:6,
    },
    {
        Column1:'Learn front-end',
        Column2:'Learn CSS',
        Column3:8,
    },
    {
        Column1:'Learn front-end',
        Column2:'Learn JS Variables and Data Types',
        Column3:6,
    },
    {
        Column1:'Learn git',
        Column2:'Learn git basics',
        Column3:2,
    }
    
];

let Head = document.getElementById('head');
let Body = document.getElementById('body');

for (let property in timeSheetData[0]){
    Head.insertAdjacentHTML('beforeend',`<th>${timeSheetData[0][property]}</th>`);
}
Head.insertAdjacentHTML('beforeend',`<th>Actions</th>`);
for(let i = 1; i < timeSheetData.length; i++){
    Body.insertAdjacentHTML('beforeend',`<tr id = 'row_${i+1}'></tr>`);
    let row = document.getElementById(`row_${i+1}`)
    for (let property in timeSheetData[i]){
        row.insertAdjacentHTML('beforeend',`<td style = 'text-align:center;'>${timeSheetData[i][property]}</td>`);
    }
    row.insertAdjacentHTML('beforeend',`<button id = 'button_${i+1}'>X</button>`);
}

let Project = document.getElementById('project');
let Task = document.getElementById('task');
let TimeSpent = document.getElementById('time_spent');
let Add = document.getElementById('add');






let y = timeSheetData.length;


Add.addEventListener('click',() => {
    // Head.insertAdjacentHTML('beforeend',`<th>Actions</th>`);
    Body.insertAdjacentHTML('beforeend',`<tr id = 'row_${y+1}'></tr>`);
    let newrow = document.getElementById(`row_${y+1}`);
    newrow.insertAdjacentHTML('beforeend',`<td style = 'text-align:center;'>${Project.value}</td>`);
    newrow.insertAdjacentHTML('beforeend',`<td style = 'text-align:center;'>${Task.value}</td>`);
    newrow.insertAdjacentHTML('beforeend',`<td style = 'text-align:center;'>${TimeSpent.value}</td>`);
    newrow.insertAdjacentHTML('beforeend',`<button id = 'button_${y+1}'>X</button>`);
    y += 1

    // AddRemoveButton();
    


})

for(let k = 0; k < y; k++){
    let BtnNumber = document.getElementById(`button_${k+1}`);
    console.log(BtnNumber);
    BtnNumber.addEventListener('click',() => {
        let DelRow = document.getElementById(`row_${k+1}`);
        console.log(DelRow);
        DelRow.remove();
    });
}