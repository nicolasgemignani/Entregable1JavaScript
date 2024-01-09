function saludar(nombre, entregable) {
    alert(
        "Hola, mi nombre es " + nombre + " y este es mi Entregable n° " + entregable
    );
}

function aviso() {
    alert("Prueba mi calculadora 0.1");
}

function despedida() {
    alert("Gracias!. Todos los resultados estaran en la consola!");
}

function calcular() {
    while (true) {
        let numA = parseFloat(prompt("Ingrese el primer número."));

        let operacion = prompt("Elige la operacion deseada,  +,  -,  /, o  * .");

        let numB = parseFloat(prompt("Ingrese el segundo número"));

        let resultado = 0;

        if (!isNaN(numA) && !isNaN(numB))
            switch (operacion) {
                case "+":
                    resultado = numA + numB;
                    alert(numA + "+" + numB + "=" + resultado);
                    resultados.push(resultado);
                    break;
                case "-":
                    resultado = numA - numB;
                    alert(numA + "-" + numB + "=" + resultado);
                    resultados.push(resultado);
                    break;
                case "/":
                    resultado = numA / numB;
                    alert(numA + "/" + numB + "=" + resultado);
                    resultados.push(resultado);
                    break;
                case "*":
                    resultado = numA * numB;
                    alert(numA + "*" + numB + "=" + resultado);
                    resultados.push(resultado);
                    break;
                default:
                    alert("Se introdujo una operacion no valida");
                    break;
            }
        else {
            alert("Tu primer o segundo número es invalido, recuerda, solo números.");
        }

        let abandonar = confirm("Desea abandonar la calculadora?");

        if (abandonar) {
            break;
        }
    }
}

let resultados = [];

function mostrarResultado() {
    console.table(resultados);
}

saludar("Nicolas Gemignani", 1);
aviso();
calcular();
despedida();
mostrarResultado();
