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
var userDetails = function (id, user) {
    console.log("user id is " + id + ", name is " + user.name + " and age is " + user.age + ".");
};
var sayHello = function (user) {
    console.log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
// let id:any="AT2321";
// let rakib={
//     name:"rakib",
//     age:65
// }
// userDetails(id,rakib);
// sayHello(rakib);
var Dog = /** @class */ (function () {
    function Dog(dogName, dogBreed) {
        this.dogName = dogName;
        this.dogBreed = dogBreed;
    }
    Dog.prototype.name = function () {
        return "this dog name is " + this.dogName + " his breed is " + this.dogBreed;
    };
    Dog.prototype.toHeel = function () {
        return "Heel , " + this.dogName + "!";
    };
    return Dog;
}());
var dog1 = new Dog("lulu", "red");
console.log(dog1.name());
var awesomeDog = new Dog("Rex", "German Shepherd");
console.log(awesomeDog.name());
console.log(awesomeDog.toHeel());
var FancyDog = /** @class */ (function (_super) {
    __extends(FancyDog, _super);
    function FancyDog(dogName, dogBreed, price) {
        var _this = _super.call(this, dogName, dogBreed) || this;
        _this.price = price;
        return _this;
    }
    FancyDog.prototype.name = function () {
        return "" + _super.prototype.name.call(this);
    };
    FancyDog.prototype.dogPrice = function () {
        return _super.prototype.toHeel.call(this) + "  cost " + this.price + " Euro";
    };
    return FancyDog;
}(Dog));
var puppy = new FancyDog("fido", "pomaranian", 150);
console.log(puppy.dogPrice());
console.log(puppy.name());
var uglyDog = /** @class */ (function (_super) {
    __extends(uglyDog, _super);
    function uglyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return uglyDog;
}(Dog));
var doggo1 = new Dog("Rex", "Germen Shephert");
// doggo1.test();
console.log("hello");
