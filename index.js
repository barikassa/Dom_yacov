//! objects;



//! date 
// ! במקרה של ניו דייט כל הפונקיות של דייט יעבדו אחרת,ללא ניו זה יתן רק סטרינג של אותו יוםץ 

// var mydate= new date();// כאן ניתן להשתמש בו בכל האוציות של דייט 
// console.log(mydate);

// var mydate= date();
// console.log(mydate); // כאן זה יהיה רק סטרינג
//! חשוב מאוד לגבי מערך 
// myobject={
//     x:5,
//     str:"yuyu",
//     person:{name:"lala", age:78},
// }

// var inputUser= prompt("shoe  the key");
// console.log(myobject[inputUser]);
// console.log(myobject.person[inputUser]);//כל מה שנכנס בפרומפט ימצא את הדומה לו באובייקט
// myobject[inputUser]="hello" // זה השמה לתוך המערך 

//! צרו פונקציה שמקבלת מהמשתמש שם ןגיל.הפונקציה מדפיסה ללוג של פרסון בשדה חדש.
//!1.
// var userName =prompt("write your name");
// var userAge=Number(prompt("wrire your age"));
// function getNameAndAge (userName,userAge){
//     var person={};
//     person.name=userName
//     person.age = userAge
//     console.log(person);
// }  
// var result= getNameAndAge(userName, userAge);
// console.log(result);
//!2. 


// var firstName =prompt("write your firstName");
// var lastName= prompt("write your lastName");
// var userAge=Number(prompt("wrire your age"));
// function printObjectPerson(firstName,lastName,userAge){
//    var person={}
//    person.Firstname=firstName;
//    person.LastName= lastName;
//    person.age= userAge;
//    console.log(person);
// }
// var result= printObjectPerson(firstName,lastName,userAge);
// console.log(result);
//!3. 



// function printPersonObject(fname,lname,uAge){
//     var person={};
//     person.fullName=fname+lname;
//     person.age= uAge;
//     person.email=fname+"@gmail.com";
//     return person;
// }

// var firstName =prompt("write your firstName");
// var lastName= prompt("write your lastName");
// var userAge=Number(prompt("wrire your age"));
// var resultPerson=printPersonObject(firstName,lastName,userAge);
// console.log(resultPerson);

//!5. 
//!1. 
// function printHeloowThere(){
//   }document.write("hellowWorld");
//!2. 
//  function printHeloowDavid(){

//  }document.write("hellow there David");
//!3. 
// var userName=prompt("write your name");
// function printFromTheUser(printName , printName){
//     document.write("hellow there");
// }
// printFromTheUser(userName);
//!4. 
// var userFirstName =prompt("write your firstName");
// var  userLastName= prompt("write your lastName");
// var userAge=Number(prompt("wrire your age"));
// function printOnWindows(firstName, lastName, age){
//     document.write(firstName, lastName, age);
// }
// var printDitailes = printOnWindows(userFirstName,userLastName,userAge);
//!5. 
// var userName =prompt("write your name");
// var userAge=Number(prompt("wrire your age"));
// function getIdByDiv(fullName,age){
//     var printDiv=document.getElementById("getId");
//      printDiv.innerHTML=userName;


//      document.write(fullName, age);
// } 
// var printResult= getIdByDiv(userName,userAge);
//!6. 
// var userFirstName =prompt("write your firstName");
// var  userLastName= prompt("write your lastName");
// var userAge=Number(prompt("wrire your age"));
// function getHtmlAndPrint(firstName, lastName, age){
//     var divPrinter1= document.getElementById("div1");
//     divPrinter1.innerHTML=userFirstName;
//     var divPrinter2= document.getElementById("div2");
//     divPrinter2.innerHTML=userLastName;
//     var divPrinter3= document.getElementById("div3");
//     divPrinter3.innerHTML=userAge;
// }
// var pinterResult=getHtmlAndPrint(userFirstName,userLastName,userAge);
//! 7. 
// var userFirstName =prompt("write your firstName");
// var  userLastName= prompt("write your lastName");
// function printOnWindows (firstName, age){
//     document.write(`<div>name:${firstName},age:${age} </div>`)
// }
// let printOnWindowsResult=printOnWindows(userFirstName,userLastName);
//! 8. 
// var userFirstName = prompt("write your firstName");
// var userLastName = prompt("write your lastName");
// var userAge = Number(prompt("wrire your age"));
// function printElementsOnWindows(firstName, lastName, age) {
//     document.write(`<div><p>name:${firstName},lasname:${lastName},age:${age} </p></div>`)
// }
// var printOnWindowsResult = printElementsOnWindows(userFirstName, userLastName, userAge);
//!9. 
// var userFirstName = prompt("write your firstName");
// var userLastName = prompt("write your lastName");
// var userAge = Number(prompt("wrire your age"));
// function printElementsOnWindows(firstName, lastName, age) {
//     document.write(`<div><p>name:${firstName},lasname:${lastName},age:${age} </p></div>`)
// }
// var printOnWindowsResult = printElementsOnWindows(userFirstName, userLastName, userAge);
//!10. 
// var userFirstName = prompt("write your firstName");
// var userLastName = prompt("write your lastName");
// var userAge = Number(prompt("wrire your age"));
// function printElementsOnWindows(firstName, lastName, age) {
//     document.write(`<div><p id="idName">name:${firstName},lasname:${lastName},age:${age} </p></div>`)
// }
// var printOnWindowsResult = printElementsOnWindows(userFirstName, userLastName, userAge);
//!11.a
// var userFirstName = prompt("write your firstName");
// function printElementsOnWindows(firstName){
//       document.write(`<p id="firstNameId"> first-name:${firstName}</p>`);
// }
// var printOnWindowsResult=printElementsOnWindows(userFirstName);
//!11.b 
// var userLastName = prompt("write your lastName");
// function addLastName(LastName){
//    var a =document.getElementById("firstNameId");
//    a.innerText +=LastName;

// }
// var result = addLastName(userLastName);
//!12.a
// var userLastName = prompt("write your lastName");
// function getFirstName(firstName){
//     document.write(`<p id="pId"> first-Name:${firstName} </p>`)
// }
// var getElementByIdResult=getFirstName(userLastName);
// //!12.b
// var userLastName = prompt("write your lastName");
// function addLastNameOnP(lastName){
//     var existFirstName =document.getElementById("pId");
//     existFirstName.innerText +=" "+ userLastName +" "+ new Date() ;
// }
// var result= addLastNameOnP(userLastName);
//!13a.b 
// var userCarType = prompt("write your carBrand");
// var userCompanyName = prompt("write car company");
// var userCapacity = Number(prompt("wrire car capacity"));
// function getObject(color,carBrand, carCapacity){
//     var car={};
//      car.name=color;
//      car.Brand=carBrand;
//      car.Capacity=carCapacity;
//      document.write(car.name,car.Brand,car.Capacity);
//      console.log(car);
// } 
// var myCar= getObject(userCarType,userCompanyName,userCapacity); 
// document.write(car.name);
//!14.a,b // להשלים את ההוספה של התאריך
// var userCarType = prompt("write your carBrand");
// var userCompanyName = prompt("write car company");
// var userCapacity = Number(prompt("wrire car capacity"));

// function getObject(color, carBrand, carCapacity,manifacturingDate) {
    
//     car = {};
//     car.name = color;
//     car.brand = carBrand;
//     car.carCapacity= carCapacity;
    
//     return car;

// }
// var myCar = getObject(userCarType, userCompanyName, userCapacity);
// console.log(myCar);
// document.write(myCar)












































