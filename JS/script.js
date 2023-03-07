console.log("ruunnin");

// game constants
let changeDirect={x:0,y:0};
const moveSound = new Audio('../turning.mp3');
const foodsound=new Audio("../eating.mp3")
const gameover = new Audio('../gameover.mp3');
const speed=10;
let score=0; 
let lastPaintTime = 0;

let snakebody=[
    {x:13, y:16},
];
let food={x:10,y:5};

//game functions

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snakebody){
    if(snakebody[0].x >18 || snakebody[0].x <=0 || snakebody[0].y>18 || snakebody[0].y<=0){
        return true;
    }
    return false;
}


// writing the logic of how game runs
const gameEngine=()=>
{
    //task 1. displaying the snake and food
    
        //1.1 rendering snake
    board.innerHTML=" ";
    snakebody.forEach((e,index)=>{
        //rendering head of snake 
        snakeElement=document.createElement('div');
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.style.gridRowStart=e.y;
        
        if (index===0) {
            snakeElement.classList.add('head');
        }
        else{

            snakeElement.classList.add('body');
        }
        board.appendChild(snakeElement);  
    })
    
    // 1.2 rendering food 
    foodElement=document.createElement('div');
    foodElement.style.gridColumnStart=food.x;
    foodElement.style.gridRowStart=food.y;
    
    foodElement.classList.add('food');
    board.appendChild(foodElement);
    
    
    // task 2. updating position of snake array and food
//game over 
    if (isCollide(snakebody)) {
        gameover.play();
        alert("gameover! press enter to play again");
        snakebody=[
            {x:13, y:16},
        ]; 
        changeDirect={x:0,y:0}  
    }

    

    //task 3: condition of food eaten
    if (snakebody[0].x==food.x && snakebody[0].y==food.y) {
        foodsound.play();
        console.log("eaten")

        //increasing lenght of snake
        snakebody.unshift({x:snakebody[0].x+changeDirect.x,y:snakebody[0].y+changeDirect.y})

        //regenrating new food
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
        //I know the logic, I have copied this from internet
    }

    //moving the snake
    for (let i = snakebody.length-2; i >=0; i--) {
        snakebody[i+1]={...snakebody[i]};
    }
    snakebody[0].x+=changeDirect.x;
    snakebody[0].y+=changeDirect.y;

}



// function implemantation: main logic

window.requestAnimationFrame(main);

window.addEventListener("keydown",(e)=>{
    moveSound.play();
    changeDirect={x:0,y:1}//initial position of snake

    console.log(e.key);
    //this is funcking good. I can know which key is pressed
    //I can use this for changing direction of my snake 

    switch (e.key) {
        case "ArrowUp":
            changeDirect.x=0;
            changeDirect.y=-1;
            break;

        case "ArrowDown":
            changeDirect.x=0;
            changeDirect.y=1;
            break;

        case "ArrowRight":
            changeDirect.x=1;
            changeDirect.y=0;
            break;

        case "ArrowLeft":
            changeDirect.x=-1;
            changeDirect.y=0;
            break;
                                
        default:
            break;
    }
})