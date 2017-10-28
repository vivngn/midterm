

document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("controls").style.bottom = "0px";
});

var srcStr = document.getElementById("bgInput").value;

function changeBG(){
    document.getElementById("bgpic").scr = srcStr
};

function transferInput(){
    
    var val = document.getElementById("bgpic").value;
    if(val== "hourse"){
        srcStr = "img/bg1.jpg";
    } else if(val == "night"){
        srcStr = "img/bg2.jpg";
    } else if(val == "mountain"){
        srcStr = "img/bg3.jpg";
    } else {
        srcStr = val;
    }

};



document.getElementById("bgInput").addEventListener("keyup", function(ev){
    console.log(ev.keycode);
    if(ev.keyCode == 13){
        changeBG()
    }
});

document.getElementById("titleInput").addEventListener("keyup", function(ev){
    document.getElementById("title").innerHTML = document.getElementById("titleInput").value;
});


document.getElementById("desInput").addEventListener("keyup", function(ev){
    document.getElementById("description").innerHTML = document.getElementById("desInput").value;
});

document.getElementById("colorInput").addEventListener("change", function(ev){
    document.getElementById("title").style.color = document.getElementById("colorInput").value;
    document.getElementById("description").style.color = document.getElementById("colorInput").value;
});

var center = document.getElementById("background");
var mleft = 0;
var mtop = 0;
var mheight = 300;


document.getElementById("bgInput").addEventListener("keydown", function(){
    mleft = mleft - 10;
    center.style.left = mleft + "px";
});

document.getElementById("bgInput").addEventListener("keydown", function(){
    mleft = mleft + 10;
    center.style.left = mleft + "px";
});

document.getElementById("bgInput").addEventListener("keydown", function(){
    mtop = mtop - 10;
    center.style.top = mtop + "px";
});

document.getElementById("bgInput").addEventListener("keydown", function(){
    mtop = mtop + 10;
    center.style.top = mtop + "px";
});

document.getElementById("bgInput").addEventListener("keydown", function(){
    mheight = mheight + 10;
    center.style.height = mheight + "px";
});

document.getElementById("bgInput").addEventListener("keydown", function(){
    mheight = mheight - 10;
    center.style.height = mheight + "px";
});

document.getElementById("bgInput").addEventListener("keyup", function(ev){
    console.log(ev.keycode);
    if(ev.keyCode == 13){
        transferInput();
        changeBG();
    }});

