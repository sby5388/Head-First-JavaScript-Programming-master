//重构 HighScore.js
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

function printAndGetHighScore(scores) {
    var highScore;
    var output;
    highScore = scores[0];
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

//泡泡最多且成本最低的一个
function getMostCostEffectiveSolution(scores, costs, highscore) {
    var max = 100;
    var result = 0;
    for (var i = 0; i < scores.length; i++) {
        if (highscore == scores[i]) {
            if (costs[i] < max) {
                max = costs[i];
                result = i;
            }
        }
    }
    return result;
}

var highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);

console.log("Solutions with the highest score: " + bestSolutions);


var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");

//其他的方式
var array = new Array(10);