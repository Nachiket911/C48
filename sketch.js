var home, gameState = 0, match, score = 0, typeIn;

function preload(){



}

function setup(){

    createCanvas(displayWidth -100, displayHeight -100);

    home = new HomeScreen();
    //console.log("1");
    home.display();

}   

function draw(){
    console.log(gameState); 

    //background("white");

    if(gameState === 1){

        home.hide();
        // createElements();
        background("green");
        match.createElements();

        gameState = 2;
        //match.dragAndDrop();
       // drawSprites();

    }

    if(gameState === 2){

        text(score + " coins", 500, 300)
        match.dragAndDrop();
        drawSprites();

    }

    if(score > 0){

        gameState = 3;
        
    }

   

    if(gameState === 3){
        gameState = 4;
        console.log(gameState);

        levelTwo();
       
    }

    if(gameState === 4){

    }

}

function levelTwo(){

    typeIn = new TypeIn();
    console.log("Calling Type in..")
    typeIn.display();
    

}