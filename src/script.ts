
// const country ="i love Bangladesh";

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

type stringOrNumber=number|string;
type userType={name:string,age:number};


const userDetails=(id:stringOrNumber,user:userType)=>{
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}.`);
}

const sayHello =(user:userType)=>{
    console.log(`Hello ${user.age>50?"Sir":"Mr."} ${user.name}`);
}

// let id:any="AT2321";
// let rakib={
//     name:"rakib",
//     age:65
// }
// userDetails(id,rakib);
// sayHello(rakib);

class Dog{
   private dogName:string;
    private dogBreed:string;
    constructor(dogName:string,dogBreed:string){
    
        this.dogName=dogName;
           this.dogBreed=dogBreed;
    }

    name(){
        return `this dog name is ${this.dogName} his breed is ${this.dogBreed}`;
    }

    toHeel(){
        return `Heel , ${this.dogName}!`;

    }

}

let dog1 = new Dog("lulu","red");
console.log(dog1.name());

let awesomeDog = new Dog("Rex", "German Shepherd");

console.log(awesomeDog.name());
console.log(awesomeDog.toHeel());

class FancyDog extends Dog{

  price:number;
  constructor(dogName:string,dogBreed:string,price:number){
      super(dogName,dogBreed);
      this.price=price;
  }

  name(){
      return `${super.name()}`;
  }

  dogPrice(){
      return `${super.toHeel()}  cost ${this.price} Euro`;
  }


}

let puppy = new FancyDog("fido","pomaranian",150);
console.log(puppy.dogPrice());
console.log(puppy.name());


class uglyDog extends Dog{


// test(){
//     return `${this.dogName}`;
// }

}
let doggo1=new Dog("Rex","Germen Shephert");
// doggo1.test();

