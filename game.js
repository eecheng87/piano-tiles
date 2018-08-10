var c = document.getElementById("piano");
var context = c.getContext("2d");
var b = document.getElementById("background");
var context_back = b.getContext("2d");

var numOfTiles = 2;
var myScore=0;
startGame();
window.setInterval(upDate,10);
function startGame(){
    paintWindow();
    myTiles = [];
    myTiles[0] = new Block(0);
    myTiles[1] = new Block(1);
}
function paintWindow(){
    my_gradient = context_back.createLinearGradient(0,0,0,600);
    my_gradient.addColorStop(0,"rgba(65,234,246,0.6)");
    my_gradient.addColorStop(1,"rgba(254,74,251,0.5)");

    context_back.fillStyle = my_gradient;
    context_back.fillRect(0,0,300,600);

    context_back.beginPath();
    context_back.moveTo(72,0);
    context_back.lineTo(72,600);
    context_back.strokeStyle = "white";
    context_back.stroke();

    context_back.beginPath();
    context_back.moveTo(148,0);
    context_back.lineTo(148,600);
    context_back.strokeStyle = "white";
    context_back.stroke();

    context_back.beginPath();
    context_back.moveTo(226,0);
    context_back.lineTo(226,600);
    context_back.strokeStyle = "white";
    context_back.stroke();

    context_back.beginPath();
    context_back.moveTo(0,470);
    context_back.lineTo(300,470);
    context_back.strokeStyle = "white";
    context_back.stroke();
}

function Block(index){
     
    this.index = index;
    this.appearPos = Math.floor(Math.random()*4);
   
    this.width = 70;
    this.height = 120;
    this.color = "black";
    switch(this.appearPos){
        case 0:
            this.x = 0;
            this.y = 0;
            break;
        case 1:
            this.x = 75;
            this.y = 0;
            break;
        case 2:
            this.x = 152;
            this.y = 0;
            break;
        case 3:
            this.x = 228;
            this.y = 0;
            break;
    }
    context.fillStyle = this.color;
    context.fillRect(this.x,this.y,this.width,this.height);
    this.interval = setInterval(move,10,this.index);
    this.live = true;

    window.addEventListener('keydown',function(e){
        myTiles[index].keyCode = e.keyCode;
    });
}
function move(index){
    if(myTiles[index].live){
        myTiles[index].y += 1;
        context.fillStyle = "black";
        context.fillRect(myTiles[index].x,myTiles[index].y,70,120);   
        context.clearRect(myTiles[index].x,myTiles[index].y-2,70,2);
    }
    //context.fillStyle = my_gradient;
    //context.fillRect(myTiles[index].x,myTiles[index].y-2,70,2);
}
function afterRight(index){
    context.clearRect(myTiles[index].x,myTiles[index].y,70,120);
    myTiles[index].live = false;
}
function upDate(){//check keyCode whether correct
    var i;
 
    for(i = 0; i < numOfTiles; ++i){
        if( myTiles[i].live ){
            if(myTiles[i].y < 470 && myTiles[i].y >350){
                switch(myTiles[i].keyCode){
                    case 65: //A
                        if(myTiles[i].x == 0)
                            afterRight(i);
                        break;
                    case 83: //S
                        if(myTiles[i].x == 75)
                            afterRight(i);
                        break;
                    case 68: //D
                    if(myTiles[i].x == 152)
                        afterRight(i);
                    break;
                    case 70: //F
                    if(myTiles[i].x == 228)
                        afterRight(i);
                    break;       

                }
            }
            if(myTiles[i].y > 470){
                context.clearRect(myTiles[i].x,myTiles[i].y,70,120);
                myTiles[i].live = false;
            }
        }
        else{//not alive

        }
    }

}
 