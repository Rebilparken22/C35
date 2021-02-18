var ball;
var wall;
var database;
var position;
var position2;
var position3;

function setup(){
    createCanvas(700,500);
    database = firebase.database();

    var ballsloc = database.ref("ball/position");
    ballsloc.on("value",readposition);

    var ballsloc2 = database.ref("ball2/position2");
    ballsloc2.on("value",readposition2);

    var ballsloc3 = database.ref("ball3/position3");
    ballsloc3.on("value",readposition3);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ball2 = createSprite(270,250,10,10);
    ball2.shapeColor = "green";

    ball3 = createSprite(290,250,10,10);
    ball3.shapeColor = "blue";

    wall = createSprite(50,50,100,5);
    wall2 = createSprite(100,100,5,100);
    wall3 = createSprite(50,150,5,100);
    wall4 = createSprite(100,200,100,5);
    wall5 = createSprite(150,250,200,5);
    wall6 = createSprite(150,100,5,100);
    wall7 = createSprite(150,300,5,100);
    wall8 = createSprite(100,300,100,5);
    wall9 = createSprite(125,350,50,5);
    wall10 = createSprite(100,400,5,100);
    wall11 = createSprite(50,400,5,100);
    wall12 = createSprite(75,450,50,5);
    wall13 = createSprite(200,400,100,5);
    wall14 = createSprite(200,325,5,50);
    wall15 = createSprite(200,50,100,5);
    wall16 = createSprite(200,150,5,100);
    wall17 = createSprite(250,150,100,5);
    wall18 = createSprite(250,75,5,50);
    wall19 = createSprite(300,175,5,350);
    wall20 = createSprite(250,175,5,50);
    wall21 = createSprite(250,450,200,5);
    wall22 = createSprite(350,450,5,100);
    wall23 = createSprite(400,350,100,5);
    wall24 = createSprite(400,425,5,50);
    wall25 = createSprite(350,300,100,5);
    wall26 = createSprite(350,150,5,200);
    wall27 = createSprite(400,200,100,5);
    wall28 = createSprite(400,275,5,50);
    wall29 = createSprite(400,150,100,5);
    wall30 = createSprite(400,50,5,100);
    wall31 = createSprite(450,50,100,5);
    wall32 = createSprite(500,75,5,50);
    wall33 = createSprite(525,100,50,5);
    wall34 = createSprite(550,25,5,50);
    wall35 = createSprite(600,50,100,5);
    wall36 = createSprite(600,100,5,100);
    wall37 = createSprite(550,200,100,5);
    wall38 = createSprite(500,250,100,5);
    wall39 = createSprite(550,275,5,50);
    wall40 = createSprite(650,300,100,5);
    wall41 = createSprite(650,200,5,100);
    wall42 = createSprite(675,100,50,5);
    wall43 = createSprite(675,450,50,5);
    wall44 = createSprite(650,475,5,50);
    wall45 = createSprite(550,450,100,5);
    wall46 = createSprite(550,400,100,5);
    wall47 = createSprite(450,450,5,100);
    wall48 = createSprite(675,350,50,5);
    wall49 = createSprite(650,325,5,50);
    wall50 = createSprite(475,300,50,5);

    ball.collide(wall);


}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        ball.x = ball.x -4;
    }
    else if(keyDown(RIGHT_ARROW)){
        ball.x = ball.x +4;
    }
    else if(keyDown(UP_ARROW)){
        ball.y = ball.y -4
    }
    else if(keyDown(DOWN_ARROW)){
        ball.y = ball.y +4
    }

    if(keyDown("A")){
        ball2.x = ball2.x -4;
    }
    else if(keyDown("D")){
        ball2.x = ball2.x +4;
    }
    else if(keyDown("W")){
        ball2.y = ball2.y -4
    }
    else if(keyDown("S")){
        ball2.y = ball2.y +4
    }

    if(keyDown("J")){
        ball3.x = ball3.x -4;
    }
    else if(keyDown("L")){
        ball3.x = ball3.x +4;
    }
    else if(keyDown("I")){
        ball3.y = ball3.y -4
    }
    else if(keyDown("K")){
        ball3.y = ball3.y +4
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

//     function changePosition(x,y){
//     database.ref("ball/position").set({
//         'x': position.x + x,
//         'y': position.y + y
//     })        
// }
// function changePosition2(x,y){
//     database.ref("ball2/position").set({
//         'x': position2.x + x,
//         'y': position2.y + y
//     })        
// }
// function changePosition3(x,y){
//     database.ref("ball3/position").set({
//         'x': position3.x + x,
//         'y': position3.y + y
//     })        
// }
