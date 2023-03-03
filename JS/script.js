console.log("ruunnin");

// game constants


const speed=2;
const paintTime=0;

let snakebody=[
    {x:13, y:16},
    {x:13, y:17},
    {x:13, y:18},

];
let food={x:10,y:0};



//game functions

const main=(ctime)=>{
    window.requestAnimationFrame(main);
    // console.log(ctime);

    if((ctime-paintTime)/1000<1/speed){
        return;
    }
    lastpainTime=ctime
    gameEngine();
}

// writing the logic of how game runs
const gameEngine=()=>{
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

}

// function implemantation

window.requestAnimationFrame(main)