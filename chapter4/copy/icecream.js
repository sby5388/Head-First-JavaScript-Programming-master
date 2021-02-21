//P179/P138 代码冰箱贴
var products = ["Choo Choo Chocolate",
    "Icy Mint", "Cake Batter",
    "Bubblegum"];
var hasBubbleGum = [false,
    false,
    false,
    true];

var i = 0;
while (i < products.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] +
            " contains bubble gum");
    }
    i = i + 1;
}
//for 循环
for (var j = 0; j < products.length; j++) {
    if (hasBubbleGum[j]) {
        console.log(products[j] +
            " contains bubble gum");
    }
}