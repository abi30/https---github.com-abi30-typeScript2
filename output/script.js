"use strict";
// const country ="i love Bangladesh";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// console.log(country);
// let done :boolean = true;
// let myNum:number=32;
// let say: string="hello World";
// console.log(say);
// console.log(myNum);
// let arr:string[]=["rakin","rakib","abddulla"];
// let nameArray: Array<string>=["riak","suche","rakin"];
// console.log(nameArray);
// arr.forEach(vale=>{
//     console.log(vale);
// });
// let myUnknownValue:any=1;
// myUnknownValue="we are learning typescript";
// console.log(myUnknownValue);
// let myNumberArray:Array<number>=[32,43,12];
// console.log(myNumberArray);
// let myNumberArray2 :number[] =[32,56,76,3];
// console.log(myNumberArray2)
// // var greeting = "Hello There";
// // function hello() {
// //    for (var i = 0; i < 5; i++) {
// //        var greeting = "Ah the negotiator";
// //    }
// //    console.log(greeting);
// // }
// // hello();
// // var greeting1 = "Hello There";
// // function hello1() {
// //    for (var i = 0; i < 5; i++) {
// //        let greeting1 = "Ah the negotiator";
// //    }
// //    console.log(greeting1);
// // }
// // hello1();
// var myArray = [];
// for (var i = 0; i < 10; i++) {
//     let y = i;
//     myArray.push(()=> {
//         console.log( i);
//     })
// }
// for(let val of myArray){
//     val();
// }
// let fname="IQIBL";
// let multiLineStrings = `hello 
// world
//  my
//   name
//    is
//     Mario ${fname}`;
// let fruits=["radf","riaerg","dsferg","rifff","dff"];
// fruits.push("rakibabud");
// console.log(fruits);
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("logoname");
// console.log("riadf");
// let mixd = ["rakib",4,true,{}];
// mixd.push({name:"abdulla",
// age:30});
// console.log(mixd);
// let base ={a:1,b:2};
// let obj=Object.create(base);
// obj["c"]=34;
// obj["d"]=21;
// for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }
// class Person{
// name:string;
// age:number;
// constructor(name:string,age:number) {
//     this.name=name;
//     this.age=age;
// }
// eat():void{
//     console.log(`${this.name} eats when hungry.`)
// }
// info():void{
//     console.log(`${this.name} is ${this.age}'s old.`)
// }
// }
// class student extends Person{
//     rollnumber:number;
//     constructor(rollnumber:number,name:string,age:number){
//         super(name,age);
//         this.rollnumber=rollnumber;
//     }
//     displayInformation():void{
//         console.log(`name :${this.name },Roll Number : ${this.rollnumber}.`);
//     }
//     eat():void{
//         console.log(`${this.name} eats during break.`)
//     }
//     info():void{
//     console.log(`${this.name} is ${this.age}'s old and he/she is too young !`)
//     }
// }
// var students1=new student(4,"abudla",32);
// students1.eat();
// var person1= new Person("Iqbal Kabir",60);
// person1.eat();
// person1.info();
// students1.info();
// interface ractangleOption{
//     width:number;
//     length:number;
// }
// function drawRectangle(options:ractangleOption){
//     let width=options.width;
//     let length= options.length;
//     let sum = width*length;
//     console.log(sum);
// }
// drawRectangle({width:4,length:35});
// let c:{
//     name:string,
//     age:number,
//     adult:boolean
// }
// c={
//     name:"rakib",age:43,adult:true
// }
// let myFunc:Function;
//   myFunc=()=>{
// console.log("hello");
// };
// myFunc();
// const myFunc=(name:string,age:number,earn:number)=>{
// console.log(`${name} is ${age}'s old and he earns ${earn} euro`);
// }
// myFunc("rakb",32,2300);
// let calc:(a:number,b:number,c:string)=>number;
// calc=(firstnumber:number,secondNumber:number,action:string)=>{
// if (action==="add"){
//     return firstnumber+secondNumber;
// }else if(action==="minus"){
// return firstnumber-secondNumber;
// }else{
//     return -1;
// }
// }
// let myAnswer =calc(43,54,"add");
// console.log(myAnswer);
// let logDetails:(obj:{name:string,age:number})=>boolean;
// logDetails=(member:{name:string,age:number})=>{
//     if ((member.age>=18)&&(member.age<=30)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let rakib={
//     name:"rakb",
//     age:23
// }
// let ansL:boolean =logDetails(rakib);
// console.log(ansL);
// aliases-type-------------------------------------------hello
// type stringOrNumber=number|string;
// type userType={name:string,age:number};
// const userDetails=(id:stringOrNumber,user:userType)=>{
//     console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}.`);
// }
// const sayHello =(user:userType)=>{
//     console.log(`Hello ${user.age>50?"Sir":"Mr."} ${user.name}`);
// }
// // let id:any="AT2321";
// // let rakib={
// //     name:"rakib",
// //     age:65
// // }
// // userDetails(id,rakib);
// // sayHello(rakib);
// class Dog{
//    private dogName:string;
//     private dogBreed:string;
//     constructor(dogName:string,dogBreed:string){
//         this.dogName=dogName;
//            this.dogBreed=dogBreed;
//     }
//     name(){
//         return `this dog name is ${this.dogName} his breed is ${this.dogBreed}`;
//     }
//     toHeel(){
//         return `Heel , ${this.dogName}!`;
//     }
// }
// let dog1 = new Dog("lulu","red");
// console.log(dog1.name());
// let awesomeDog = new Dog("Rex", "German Shepherd");
// console.log(awesomeDog.name());
// console.log(awesomeDog.toHeel());
// class FancyDog extends Dog{
//   price:number;
//   constructor(dogName:string,dogBreed:string,price:number){
//       super(dogName,dogBreed);
//       this.price=price;
//   }
//   name(){
//       return `${super.name()}`;
//   }
//   dogPrice(){
//       return `${super.toHeel()}  cost ${this.price} Euro`;
//   }
// }
// let puppy = new FancyDog("fido","pomaranian",150);
// console.log(puppy.dogPrice());
// console.log(puppy.name());
// class uglyDog extends Dog{
// // test(){
// //     return `${this.dogName}`;
// // }
// }
// let doggo1=new Dog("Rex","Germen Shephert");
// // doggo1.test();
console.log("hello");
// interface student {
//     Firstname:string;
//     lastname:string;
//     age?:number;
//     showMessage?:Function;
// }
// class Person implements student{
// Firstname:string;
// lastname:string;
// age?:number;
// // for default value
// constructor(fname:string,lname:string,age:number=0){
//     this.Firstname=fname;
//     this.lastname=lname;
//     this.age=age;
// }
//  showMessage(){
//    return`${this.Firstname} is firstname and ${this.lastname} lastname and age ${this.age}`;
//  }
//  info(){
//     return `${this.lastname} is his last name`;
//  }
// }
// let p1=new Person("rakib","abdulla",32);
// let p2 = new Person("shuvo","karim");
// p1.Firstname="rakib";
// console.log(p1.showMessage());
// console.log(p2.showMessage());
var Vehicles = /** @class */ (function () {
    function Vehicles(performance, kilometers, seats, fuelType, year) {
        this.performance = performance;
        this.kilometers = kilometers;
        this.seats = seats;
        this.fuelType = fuelType;
        this.year = year;
        // Find nice unique id generator
        this.id = Math.random() * 1000000;
    }
    Vehicles.prototype.showPrice = function () {
        return "costs " + this.calcPrice().toFixed(2) + "\u20AC";
    };
    Vehicles.prototype.calcPrice = function () {
        return (this.performance * (this.kilometers / this.year));
    };
    return Vehicles;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(performance, kilometers, seats, fuelType, year, axes) {
        var _this = _super.call(this, performance, kilometers, seats, fuelType, year) || this;
        _this.axes = axes;
        return _this;
    }
    Truck.prototype.showPrice = function () {
        return "Truck " + _super.prototype.showPrice.call(this);
    };
    Truck.prototype.calcPrice = function () {
        return (_super.prototype.calcPrice.call(this) * ((this.axes / 10) + 1));
    };
    return Truck;
}(Vehicles));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(performance, kilometers, seats, fuelType, year, oldtimer) {
        var _this = _super.call(this, performance, kilometers, seats, fuelType, year) || this;
        _this.oldtimer = oldtimer;
        return _this;
    }
    Bike.prototype.showPrice = function () {
        return "Bike " + _super.prototype.showPrice.call(this);
    };
    Bike.prototype.calcPrice = function () {
        return (_super.prototype.calcPrice.call(this) * this.oldimterFactor());
    };
    Bike.prototype.oldimterFactor = function () {
        if (this.oldtimer) {
            return 2;
        }
        else {
            return 1;
        }
    };
    return Bike;
}(Vehicles));
var vehicleArr = [
    new Truck(120, 60000, 3, 'diesel', 2010, 3),
    new Truck(120, 60000, 3, 'diesel', 2010, 2),
    new Bike(80, 6000, 1, 'nitro', 2010, false),
    new Bike(80, 6000, 1, 'nitro', 2010, true)
];
var content = "";
vehicleArr.forEach(function (vehicle) { return content += createCard(vehicle); });
document.querySelector("[data-meta=\"entry\"]").innerHTML = content;
registerButtons();
function createCard(vehicle) {
    var retVal = " <div class=\"col\">\n                              <div class=\"card m\" style=\"background-color: #191919;\">\n                                  <div class=\"card-body\">\n                                      <p class=\"card-text text-light\">Performance: " + vehicle.performance + "</p>\n                                      <p class=\"card-text text-light\">Kilometers: " + vehicle.kilometers + "</p>\n                                      <p class=\"card-text text-light\">Seats: " + vehicle.seats + "</p>\n                                      <p class=\"card-text text-light\">Fuel Type: " + vehicle.fuelType + "</p>\n                                      <p class=\"card-text text-light\">Year: " + vehicle.year + "</p>";
    if (vehicle instanceof Truck) {
        retVal += "<p class=\"card-text text-light\">Axes: " + vehicle.axes + "</p>";
    }
    else {
        retVal += "<p class=\"card-text text-light\">Oldtimer?: " + vehicle.oldtimer + "</p>";
    }
    retVal += "\n                                  </div>\n                              </div>\n                          </div>\n                      \n                          <div class=\"card-footer\">\n                                  <button type=\"button\" class=\"btn btn-outline-success\" data-meta=\"button\" data-id=\"" + vehicle.id + "\">Get Price</button>\n                                  <p data-meta=\"price\" data-id=\"" + vehicle.id + "\"></p>\n                          </div>\n                       \n                      </div>";
    return retVal;
}
function registerButtons() {
    document.querySelectorAll("[data-meta=\"button\"]").forEach(function (button) { return button.addEventListener("click", showPrice); });
}
function showPrice() {
    for (var _i = 0, vehicleArr_1 = vehicleArr; _i < vehicleArr_1.length; _i++) {
        var vehicle = vehicleArr_1[_i];
        if (vehicle.id == this.dataset.id) {
            document.querySelector("[data-meta=\"price\"][data-id=\"" + this.dataset.id + "\"]").innerHTML = "" + vehicle.calcPrice();
        }
    }
}
