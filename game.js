var c = document.getElementById("piano");
var context = c.getContext("2d");
paintWindow();

function paintWindow(){
    var my_gradient = context.createLinearGradient(0,0,0,600);
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