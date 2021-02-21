//定义一个函数（函数体）
/**
 * 并不需要显式指定参数的类型
 * @param name
 * @param weight
 */
function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF")
    } else {
        console.log(name + " says woof woof")
    }
}

//多次调用这个函数
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);
//
bark("juno", 20);
bark("scottie", -1);
bark("dino", 0, 0);
bark("fido", "20");
bark("lady", 10);
bark("bruno", 21);
var points = 0;

function playTurn(player, location) {
    points = 0;
    if (location == 1) {
        points = points + 100;
    }
    return points;
}

var total = playTurn("Jai", 1);
alert(points);