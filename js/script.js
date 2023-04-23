//1 task
// function arithmetic (array) {
//     let sum = 0;
//     for (let i=0; i<=array.length; i++) {    //loop for array search 
//         if (typeof(array[i]) == 'number') { // defined type - 'number' 
//             sum += +array[i];   //add up all number data 
//         }
//     }
//     return sum;
//  }
// const list = ['1',2,'3',4,'5',6]; //example array


// console.log (arithmetic(list)); // 12
//
//2 task
// function sum (first,second) {
//     return (first + second);
// }
// function sub (first,second) {
//     return (first - second);
// }
// function mult (first,second) {
//     return (first * second);
// }
// function div (first,second) {
//     return (first / second);
// }
// function exp (first,second) {
//     return Math.pow(first,second) 
// }
// function doMath (x,znak,y) {
//     if (znak === '+') {
//         return x + '+' + y + '=' + sum(x,y);
//     }
//     if (znak === '-') {
//         return x + '-' + y + '=' + sub(x,y);
//     }
//     if (znak === '*') {
//         return x + '*' + y + '=' + mult(x,y);
//     }
//     if (znak === '/') {
//         return x + '/' + y + '=' + div(x,y);
//     }
//     if (znak === '^') {
//         return x + '^' + y + '=' + exp(x,y);
//     }
// } 
// let a = parseFloat(prompt('Enter first number'));
// let oper =prompt("Enter operation");
// let b = parseFloat(prompt('Enter second number'));
// alert(`Result: \n${doMath(a,oper,b)}`)
//
// 3 task
// function arrayTaskAdd (iter,secondLevel) {
//     let arrAdd = [];
//     for (let j = 1;j<=secondLevel; j++) {
//         let valSecond = prompt(`Enter #${j} value to #${iter} element array`);
//         arrAdd.push(valSecond);
//     }
//     return arrAdd
// }
// function arrayTaskMain (firstLevel,secondLevel) {
//     let arrMain = [];
//     for (let i = 1; i<=firstLevel; i++) {
//         arrMain.push(arrayTaskAdd (i,secondLevel));
//     }
//     return arrMain;
// }
// let main = prompt('Enter length main array');
// let add = prompt ('Enter length additional array');
// let result = arrayTaskMain (main,add);
// console.log(result);
// 
// 4 task
// function addLetter (number){
//     let letterDel = [];
//     for (let i = 1; i<=number; i++) {
//         letterDel.push(prompt(`enter #${i} letter`));
//     }
//     return letterDel
// }
// function arrayToString (string){
//     string.join
//     let regularVal = new RegExp('[' + string + ']','gi');
//     return eval(regularVal)
// }
// function phraseEdit (phrase,value){
    
//     return phrase.replace(arrayToString(value), '')
// }
// let string = prompt('Enter phrase');
// let counter = prompt('Enter the number of letter to be removed');
// let letters = addLetter (counter);
// alert(phraseEdit(string,letters));
