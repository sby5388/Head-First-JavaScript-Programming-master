function saveMyProfile(name, birthday, GPA, newUser) {
    if (birthday > 2004) {

    } else {

    }
}

saveMyProfile("krissy", 1991, 3.81, false);

var student = "krissy";
var year = 1991;
var GPA = 381 / 100;
var status = "existinguser";
var isNewUser = (status == "newuser");
saveMyProfile(student, year, GPA, isNewUser);

function add1(a, b) {
    return a + b;
}

function add2(a, b) {
    //ignored
}

var a = 10;
var b = 20;
var add1_0 = add1(a, b);
var add2_0 = add2(a, b);
console.log("add1_0 = " + add1_0);
console.log("add2_0 = " + add2_0);

//作用域
var i = 100;

function temp0() {
    var i = 30;
}

//todo 局部变量需要通过var来声明，否则会自动变成全局变量
function playTurn(player, location) {
    points = 0;
    if (location == 1) {
        points = points + 100;
    }
    return points;
}

var total = playTurn("Jai", 1);
alert(points);