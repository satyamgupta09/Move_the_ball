var ball=document.getElementById("ball");

ball.style.top = ball.offsetTop+"px";
ball.style.left = ball.offsetLeft+"px";

var ballHeight=ball.offsetHeight;
var ballWidth=ball.offsetWidth;

window.addEventListener("keypress",function(event){
    key(event.keyCode);
});

function setvalue(value){
    var temp=value+"px";
    console.log(temp);
    return temp;
}

function key(keydaba){
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    //w
    if(keydaba==119 || keydaba==87){
        console.log("ljdgnlf"+keydaba);
        if(top>5){
            ball.style.top=setvalue(top-5);
        }
    }
    //a
    if(keydaba==97 || keydaba ==65){
        if(left>5){
            ball.style.left=setvalue(left-5);
        }
    }
    //s
    if(keydaba==115 || keydaba==83){
        if((window.innerHeight-ballHeight)-5>top){
            ball.style.top=setvalue(top+5);
        }
    }
    //d
    if(keydaba==100 || keydaba==68){
        if((window.innerWidth-ballWidth)-5>left){
            ball.style.left=setvalue(left+5);
        }
    }
}