var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    price: 12356,
    started: false,
    mileage: 88000,
    start: function () {
        started = true;
    },
    stop: function () {
        started = false;
    },

    drive: function () {
        if (started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};
console.log(fiat.make);
console.log(fiat.year);
console.log(fiat.price);
//

var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};
var bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);
if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
//定义在对象中的函数，称为“方法”,需要 "function" 这个关键字,但是放在方法名称后面

var man = {
    name: "Zhang San",
    age: 20,
    talk: function () {
        console.log("myName is " + this.name);
        console.log("myAge is " + this.age);
    },
};
man.talk();
man.name = "Li Si";
man.talk();
//

var eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function () {
        return this.advice[this.index];
    }
};
eightBall.shake();
console.log(eightBall.look());
//遍历一个对象的全部属性
for ( prop in man) {
    console.log(prop +" : " + man[prop])
}

