var input;
var output;
var w1;
var b1;
var a1;
var w2;
var b2;
var a2;
var w3;
var b3;
var a3;
var epochs;
var learning_rate;
var display;

function initialize() {
    input = document.getElementById("feature").innerHTML;
    output = document.getElementById("label").innerHTML;
    w1 = document.getElementById("weight_1").innerHTML;
    b1 = document.getElementById("bias_1").innerHTML;
    a1 = document.getElementById("act_1").innerHTML;
    w2 = document.getElementById("weight_2").innerHTML;
    b2 = document.getElementById("bias_2").innerHTML;
    a2 = document.getElementById("act_2").innerHTML;
    w3 = document.getElementById("weight_3").innerHTML;
    b3 = document.getElementById("bias_3").innerHTML;
    a3 = document.getElementById("act_3").innerHTML;
    epochs = document.getElementById("epochs").innerHTML;
    learning_rate = document.getElementById("learning_rate").innerHTML;
    display = document.getElementById("display");
    document.getElementById("start_button").addEventListener("click", run_nn);
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



function run_nn() {
    let input = parseFloat(document.getElementById("feature").value);
    let output = parseFloat(document.getElementById("label").value);
    let w1 = parseFloat(document.getElementById("weight_1").value);
    let b1 = parseFloat(document.getElementById("bias_1").value);
    let a1 = document.getElementById("act_1").value;
    let d1;
    let w2 = parseFloat(document.getElementById("weight_2").value);
    let b2 = parseFloat(document.getElementById("bias_2").value);
    let a2 = document.getElementById("act_2").value;
    let d2;
    let w3 = parseFloat(document.getElementById("weight_3").value);
    let b3 = parseFloat(document.getElementById("bias_3").value);
    let a3 = document.getElementById("act_3").value;
    let d3;
    let epochs = parseInt(document.getElementById("epochs").value);
    let learning_rate = parseFloat(document.getElementById("learning_rate").value);
    let display = document.getElementById("display");

    //Swap activation function from string to function reference and get it's derivative reference
    let references_1 = get_activation_reference(a1);
    let references_2 = get_activation_reference(a2);
    let references_3 = get_activation_reference(a3);

    //JS can't do multiple assignment like Python so we gotta do this garbage. From 3 lines to 9, Python > JS
    a1 = references_1[0];
    d1 = references_1[1];
    a2 = references_2[0];
    d2 = references_2[1];
    a3 = references_3[0];
    d3 = references_3[1];

}

function get_activation_reference(input) {
    let activation;
    let derivative;

    if (input == "Sigmoid") {
        activation = sigmoid;
        derivative = sigmoid_der;
    } else if (input == "ReLU") {
        activation = relu;
        derivative = relu_der;
    } else {
        activation = tanh;
        derivative = tanh_der;
    }

    return [activation, derivative];
}