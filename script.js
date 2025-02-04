function initialize() {
    document.getElementById("redirect_nn_widget").addEventListener("click", redirect_nn_widget);
    document.getElementById("redirect_dino_game_ai").addEventListener("click", redirect_dino_game_ai);
}

function draw_neural_network(id) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');

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

    //Draw Text
    ctx.fillText("Input Layer", 50, 20);
    ctx.fillText("Hidden Layer 1", 210, 20);
    ctx.fillText("Hidden Layer n", 370, 20);
    ctx.fillText("Output Layer", 535, 20);
}

function redirect_nn_widget() {
    window.location = "/neural-network-interactable";
}

function redirect_dino_game_ai() {
    window.location = "/dino-game-ai";
}