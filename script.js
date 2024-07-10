function draw_neural_network() {
    canvas = document.getElementById("nn");
    ctx = canvas.getContext('2d');

    //Input
    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, 2*Math.PI);
    ctx.lineTo(200, 75);
    ctx.moveTo(240, 75);
    ctx.stroke();
    ctx.closePath();

    //Hidden Layer 1
    ctx.beginPath();
    ctx.arc(240, 75, 40, 0, 2*Math.PI);
    ctx.lineTo(365, 75);
    ctx.moveTo(405, 75);
    ctx.stroke();
    ctx.closePath();

    //Hidden Layer 2
    ctx.beginPath();
    ctx.arc(405, 75, 40, 0, 2*Math.PI);
    ctx.lineTo(530, 75);
    ctx.moveTo(570, 75)
    ctx.stroke();
    ctx.closePath();

    //Output Layer
    ctx.beginPath();
    ctx.arc(570, 75, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

}