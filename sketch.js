var ball;
var database;
var position;
var position2;
var position3;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    var ballsloc = database.ref("ball/position");
    ballsloc.on("value",readposition);

    var ballsloc2 = database.ref("ball2/position");
    ballsloc2.on("value",readposition2);

    var ballsloc3 = database.ref("ball3/position");
    ballsloc3.on("value",readposition3);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball2 = createSprite(270,250,10,10);
    ball2.shapeColor = "green";
    ball3 = createSprite(290,250,10,10);
    ball3.shapeColor = "blue";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-4,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(4,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-4);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+4);
    }
    if(keyDown("A")){
        changePosition2(-4,0);
    }
    else if(keyDown("D")){
        changePosition2(4,0);
    }
    else if(keyDown("W")){
        changePosition2(0,-4);
    }
    else if(keyDown("S")){
        changePosition2(0,+4);
    }
    if(keyDown("J")){
        changePosition3(-4,0);
    }
    else if(keyDown("L")){
        changePosition3(4,0);
    }
    else if(keyDown("I")){
        changePosition3(0,-4);
    }
    else if(keyDown("K")){
        changePosition3(0,+4);
    }
    drawSprites();
}
function readposition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}
function readposition2(data){
    position2 = data.val();
    ball2.x = position2.x;
    ball2.y = position2.y;
}
function readposition3(data){
    position3 = data.val();
    ball3.x = position3.x;
    ball3.y = position3.y;
}

    function changePosition(x,y){
    database.ref("ball/position").set({
        'x': position.x + x,
        'y': position.y + y
    })        
}
function changePosition2(x,y){
    database.ref("ball2/position").set({
        'x': position2.x + x,
        'y': position2.y + y
    })        
}
function changePosition3(x,y){
    database.ref("ball3/position").set({
        'x': position3.x + x,
        'y': position3.y + y
    })        
}
