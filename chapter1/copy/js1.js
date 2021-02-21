var price = 28.99;
var discount = 10;
var total = price - (price * (discount / 100));
if (total > 25) {
    freeShipping();
}


var count = 10;
while (count > 0) {
    juggle();
    count = count - 1;
}

function freeShipping() {
    // todo

}

function juggle() {
    // todo
}

var dog = {name: "Rover", weight: 35};

if (dog.weight > 30) {
    alert("WOOF WOOF");
} else {
    alert("woof woof");
}

var circleRadius = 20;
var circleArea = Math.PI * (circleRadius * circleRadius);
//todo 全局变量
var i0 = 30;
i0 = 31;
//todo 局部变量
let i1 = 20;
i1 = 21;
//todo 不可变量
const i2 = 30;
//i2 = 30;//编译出错
