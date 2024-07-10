function draw_neural_network() {
    canvas = document.getElementById("nn");
    ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, 2*Math.PI);
    ctx.lineTo(700, 75)
    ctx.stroke();
    ctx.closePath();
}