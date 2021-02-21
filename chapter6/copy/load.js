function init() {
    var entry2 = document.getElementById("entry2");
    //todo getElementById 的返回值也有可能出现空值，理应当做判空处理
    if (entry2 == null) {
        return;
    }
    entry2.innerHTML = "<H3>hello entry2</H3>";
    //动态设置样式
    entry2.setAttribute("class", "greenTxt");

    var attribute = entry2.getAttribute("alt");
    //结果为null,本来就没有图片的相关信息
    console.log("attribute = " + attribute);
}

//当网页加载完成时，才会调用init这个函数
window.onload = init;
