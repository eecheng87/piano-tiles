var c = document.getElementById("piano");
var context = c.getContext("2d");

startGame();
function startGame(){
    paintWindow();
    myTiles = [];
    myTiles[0] = new Block(0);
    myTiles[1] = new Block(1);
}
function paintWindow(){
    my_gradient = context.createLinearGradient(0,0,0,600);
    my_gradient.addColorStop(0,"rgba(65,234,246,0.6)");
    my_gradient.addColorStop(1,"rgba(254,74,251,0.5)");

    context.fillStyle = my_gradient;
    context.fillRect(0,0,300,600);

    context.beginPath();
    context.moveTo(72,0);
    context.lineTo(72,600);
    context.strokeStyle = "white";
    context.stroke();

    context.beginPath();
    context.moveTo(148,0);
    context.lineTo(148,600);
    context.strokeStyle = "white";
    context.stroke();

    context.beginPath();
    context.moveTo(226,0);
    context.lineTo(226,600);
    context.strokeStyle = "white";
    context.stroke();

    context.beginPath();
    context.moveTo(0,470);
    context.lineTo(300,470);
    context.strokeStyle = "white";
    context.stroke();
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
}
function move(index){
    //context.clearRect(0,0,300,600);
    //paintWindow();
    myTiles[index].y += 1;
    context.fillStyle = "black";
    context.fillRect(myTiles[index].x,myTiles[index].y,70,120);
    
    context.clearRect(myTiles[index].x,myTiles[index].y-2,70,2);
    context.fillStyle = my_gradient;
    context.fillRect(myTiles[index].x,myTiles[index].y-2,70,2);

 
}
 