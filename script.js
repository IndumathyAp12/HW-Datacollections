console.log("Data collections-homework")

// //Part 1: Refactoring Old Code
// let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
// // let csvStr = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


// let cell1 = "";
// let cell2 = "";
// let cell3 = "";
// let cell4 = "";
// let cell = 1
// // let row = 1

// for (let i = 0; i < csvStr.length; i++) {

//   if (csvStr[i] === ','){
//     cell++
//     continue
//   }

//   if (csvStr[i] === "\n") {
//     cell = 1
//     cell1 = "";
//     cell2 = "";
//     cell3 = "";
//     cell4 = "";
//     continue
//   }

//   switch (cell) {
//     case 1:
//       cell1 += csvStr[i]
//     break
//     case 2:
//       cell2 += csvStr[i]
//     break
//     case 3:
//       cell3 += csvStr[i]
//     break
//     case 4:
//       cell4 += csvStr[i]
//     break
//   }

//   if (cell === 4 && csvStr[i + 1] === '\n' || i + 1 === csvStr.length) {
//     console.log(cell1, cell2, cell3, cell4);
//   }

// }

console.log("============================================================")

//Part 1 -Replacing JavaScript switch statement with Array literals


const ID = ["42", "57", "63", "98"];
const Name = ["Bruce", "Bob", "Blaine", "Bill"];
const Occupation = ["Knight", "Fry cook", "Quiz Master", "Doctor's Assistant"];
const Age = ["41", "19", "58", "26"];
const Array = [""];
const title = ["ID", "Name", "Occupation", "Age"];

console.log(`${title[0]} ${title[1]} ${title[2]} ${title[3]}`);

for (let i = 0; i < 4; i++) {
  Array[i] = ID[i] + " " + Name[i] + " " + Occupation[i] + " " + Age[i];
  console.log(Array[i]);
}

console.log("========================================================")

// Part 2: Expanding Functionality 
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26" ;
let arr = [];
let rows = [];
let columns = [];


let numofColumns 

// let value = 0;
// // creating two-dimensional array
// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = value++;
//   }
// }
// console.log(arr)

rows = str.split("\n")
columns = rows[0].split(",")

for ( i = 0 ; i < rows.length ; i++) {
  columns = rows[i].split(",")
  if (columns.length > numofColumns){
    columns.length = numofColumns
  }
  arr.push(columns)
}
console.log(arr)
 

console.log("=========================================================")

//Part 3: Transforming Data



let arrHead = arr[0];
let newArray= [];
 for (let i=1 ; i< arr.length; i++){
 newArray[i-1]={};
 for (let j=0 ; j<arr.length-1; j++){

 newArray[i-1][arrHead[j].toLowerCase()]=arr[i][j];
 }
 }
console.log(newArray)

//Part 4: Sorting and Manipulating Data
newArray.pop()
newArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
newArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(newArray)

let avgAge=0;
for(i=0;i<newArray.length;i++){
  avgAge+=parseInt(newArray[i].age)
  }
  avgAge=avgAge/newArray.length
  console.log(avgAge)

 //Part 5: Full Circle
 
let strReverse=''
strReverse=Object.keys(newArray[0]).toString()
for(i=1; i<newArray.length;i++){
  strReverse+='\\n'
  strReverse+=Object.values(newArray[i]).toString()
}
console.log(strReverse)


