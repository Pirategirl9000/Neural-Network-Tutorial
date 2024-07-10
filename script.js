var notified_dead_neuron = false;

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

function sigmoid(x) {
    return 1/(1+Math.exp(-x));
}

function sigmoid_der(x) {
    return sigmoid(x)*(1-sigmoid(x));
}

function tanh(x) {
    return Math.tanh(x);
}

function tanh_der(x) {
    return 1 - (tanh(x) * tanh(x));
}

function relu(x) {
    return Math.max(0, x);
}

function relu_der(x) {
    if (x > 0) {
        return 1;
    } else {
        if (!notified_dead_neuron) {
            alert("The ReLU derivative is equal to 0 meaning the error gradient is 0. This means the neuron is dead and will be unable to update weights and biases");
            notified_dead_neuron = true;
        }
        return 0;
    }
}

function run_test_nn() {
    let input = document.getElementById("feature");
    let output = document.getElementById("label");
    let w1 = document.getElementById("weight_1");
    let b1 = document.getElementById("bias_1");
    let a1 = document.getElementById("act_1");
    let w2 = document.getElementById("weight_2");
    let b2 = document.getElementById("bias_2");
    let a2 = document.getElementById("act_2");
    let w3 = document.getElementById("weight_3");
    let b3 = document.getElementById("bias_3");
    let a3 = document.getElementById("act_3");
    let epochs = document.getElementById("epochs");

    
}