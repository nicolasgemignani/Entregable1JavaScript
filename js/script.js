//Saluda al usuiario por medio de los 2 parametros asignados
function saludar(nombre, entregable) {
    alert(
        "Hola, mi nombre es " + nombre + " y este es mi Entregable n° " + entregable
    );
}
//Aviso de la version de la calculadora
function aviso() {
    alert("Prueba mi calculadora 0.1");
}
//Despide al Usuario
function despedida() {
    alert("Gracias!. Todos los resultados estaran en la consola!");
}

function calcular() {
    while (true) {
        let numA = parseFloat(prompt("Ingrese el primer número.")); //Parceamos 'numA' para que el usuario no ingrese datos String

        let operacion = prompt("Elige la operacion deseada,  +,  -,  /, o  * .");

        let numB = parseFloat(prompt("Ingrese el segundo número"));

        let resultado = 0;

        if (!isNaN(numA) && !isNaN(numB))//Si numA y numB son numeros se activa el switch
            switch (operacion) {
                case "+":
                    resultado = numA + numB;
                    alert(numA + "+" + numB + "=" + resultado);
                    resultados.push(resultado);//Se pushea el resultado al array resultados, para poder guardarlos
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
            break; //Si el usuario abandona se acaba el ciclo
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
