var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
//猜测次数
var guesses = 0;
//击沉
var isSunk = false;

while (isSunk == false) {
    //获取用户输入
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        //非法输入
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
    }
    //击中位置
    if (guess == location1 || guess == location2 || guess == location3) {
        alert("HIT!");
        hits = hits + 1;
        //击沉船
        if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
        }
    } else {
        alert("Miss!")
    }


}
//结束提示
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);
