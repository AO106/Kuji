let element = document.getElementById("test")
let elementt = document.getElementById("bo")


let co = document.getElementById("test");
elementt.addEventListener("click", function(){
    var rnd = Math.floor( Math.random()*6 );
    var omikuji;
    if (rnd === 0) omikuji = "大吉";
    if (rnd === 0) co.style.color = '#FF0000'
    else co.style.color = '#FFF'
    if (rnd === 1) omikuji = "吉";
    if (rnd === 2) omikuji = "中吉";
    if (rnd === 3) omikuji = "小吉";
    if (rnd === 4) omikuji = "末吉";
    if (rnd === 5) omikuji = "凶";
    element.innerHTML= "<p>"+ omikuji +"</p>"
});
