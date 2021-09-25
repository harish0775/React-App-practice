
// 👨🏻‍🏫 function

// var a = 20;
// var b = 10;

// const sum = demo(a,b);
// function demo(a, b) {
//   return a + b;
// }

// console.log(sum);

//👨🏻‍🏫  Objects

// const Vechicle = {
//      type : "Truck",
//      Fuel : "petrol",
//      Capacity : "100ton"
//      }

//     console.log(`Type`, Vechicle.type);

//👨🏻‍🏫  Objects Methods

// const student = {
//     first : 'Harish',
//     Last : 'Nishad',
//     FullName : function(){
//         return this.first + " "+ this.Last;
//     }
// }

// console.log('Student-fullName',student.FullName());

//👨🏻‍🏫  EVENTS
// function demo(){
// document.getElementById('demo').innerHTML=Date();
// }


function demo(){

    window.alert("Hey");
}


//JavaScript Object

//Create Empty Object

// const person = {};
// person.name = "Harish"
// person.class = "BCA"
// person.id= 121


// console.log(`Name`, person)

//->>>>>>>>>>>>>>>>>JavaScript Objects are Mutable
// const person = {};
// person.name = "Harish"
// person.class = "BCA"
// person.id= 121

// person.name = "Don"

// console.log(`Name`, person)



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>JavaScript Object Properties


// const person = {
//     name : 'Harish',
//     phone : 93913,
//     id : 12
// }
// let text = "Person"+ "  "
// for(let x in person){
//    text  = text + person[x]+" ";   
// }


// console.log(`don : `, text)

//-------------------------Nested Objects
// const person = {
//     name : 'Harish',
//     phone : 93913,
//     id : 12,
//     Address : {
//      QNo:96,
//      Block: 'Q',
//      Area:"DElhi"
//     }
// }
// console.log(`person`, person.Address.Block)

//--------------------------------Nested Array Object

// const person = {
//     name : 'Harish',
//     phone : 93913,
//     id : 12,
//     Address : {
//      QNo:96,
//      Block: 'Q',
//      Area:"DElhi"
//     },
//     Arrayob : [
//       person1 = { name : "HArish", age :"21" },
//       person2 = { name  : "Kumar" ,age : "23" },
      

//     ]
// }
// console.log(`person`, person.Arrayob.person1)


// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for (let i in myObj.cars) {
//   x += "<h2>" + myObj.cars[i].name + "</h2>";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + "<br>";
//   }
// }

// console.log(`myObj`, myObj)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let person = {
//     name : "HArish",
//       lastName: "Doe",

// }



// person.name = function(){
//     return (this.name + "" +this.lastName).toUpperCase();
// }

// console.log(`person`, );





//>>>>>>>>>>>>>>>>>>>>>>>>>>>>Object Display


// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// console.log(`object.value(person)`, JSON.stringify(person))


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>JavaScript Object Accessors

const person = {
  name: "John",
  age: 30,
  city: "New York",
  language  : "",
   set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set a property using set:
person.lang = "hisadhkahdasdajdshkjasd";
const pe = person.lang;
console.log(`person.language`, pe);


