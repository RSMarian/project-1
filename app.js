var pics = [
    "moodsimg/m7.png",//0
    "moodsimg/m8.png",//1
    "moodsimg/m5.png",//2
    "moodsimg/m6.png",//3
    "moodsimg/m3.png",//4
    "moodsimg/m1.png",//5
    "moodsimg/m2.png" //6
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 7){
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});
