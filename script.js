//Lógica da cálculadora

//função que insere um número na tela da calculadora
function insertNumber(item) {
    let expression = window.document.getElementById("output");
    if (expression.innerHTML.length >= 12) {
        expression.innerHTML += ""
    } else {
        expression.innerHTML += item;
    }
}

//função que insere um operador ou função secundária na tela da calculadora
function insertOp(item) {
    let expression = window.document.getElementById("output");
    let lastCaracter = expression.innerHTML[expression.innerHTML.length - 1];
    if (expression.innerHTML.length == 0 || expression.innerHTML.length >= 12 || lastCaracter == "%" || lastCaracter == ":" ||
    lastCaracter == "x" || lastCaracter == "-" || lastCaracter == "+" || lastCaracter == ".") {
        expression.innerHTML += "";
    } else {
        expression.innerHTML += item;
    }
}

//função que remove um caracter da tela, seja ele um número ou um operador
function remove() {
    let expression = window.document.getElementById("output").innerHTML;
    window.document.getElementById("output").innerHTML = expression.substring(0, expression.length - 1);
}

//função que limpa a tela, removendo teda expressão apresentada na tela
function cleaR() {
    let expression = window.document.getElementById("output");
    expression.innerHTML = "";
}

//função que mostra o resultado na tela ao pressionar a tecla (=)
function res() {
    let expression = window.document.getElementById("output").innerHTML;
    let indexMult = expression.indexOf("x");
    let indexDiv = expression.indexOf(":");
    let indexPorcent = expression.indexOf("%");

    if (expression.length == 0) {
        expression.innerHTML += "";
    } else {
        if (indexPorcent != -1) {
            expression = expression.replace("%", "* 1 / 100 *");
        } 
        if (indexMult != -1) {
            let mult = "x"
            for (mult in expression) {
                expression = expression.replace("x", "*");
            }
        }
        if (indexDiv != -1) {
            let divis = ":";
            for (divis in expression) {
                expression = expression.replace(":", "/");
            }
        }
    if (Number.isInteger(eval(expression))) {
        window.document.getElementById("output").innerHTML = eval(expression);
    } else {
        window.document.getElementById("output").innerHTML = Number(eval(expression)).toFixed(3);
    }
    }
}