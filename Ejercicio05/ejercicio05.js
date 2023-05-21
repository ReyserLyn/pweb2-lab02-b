document.getElementById("tabla-form").addEventListener("submit", function(event) {
    event.preventDefault();
    crearTabla();
});

const numValoresInput = document.getElementById("num-valores");
const tablaContainer = document.getElementById("tabla-container");
const resultado = document.getElementById("resultado-container");

function crearTabla() {
    const numValores = numValoresInput.value;

    var tablaHTML = "<table>";
    tablaHTML += "<tr><th>Valor</th></tr>";

    for (var i = 1; i <= numValores; i++) {
        tablaHTML += "<tr><td><input type='number' id='valor-" + i + "'></td></tr>";
    }

    tablaHTML += "</table>";
    tablaHTML += "<div class='btns'><button id='btn-calcular-suma' onclick='calcularSuma()'>Calcular suma</button>";
    tablaHTML += "<button id='btn-borrar-tabla' onclick='borrarTabla()'>Borrar tabla</button></div>";
    tablaContainer.innerHTML = tablaHTML;
}

function calcularSuma() {
    const tablaRows = document.querySelectorAll("#tabla-container table tr");
    var suma = 0;
    var hayEspaciosVacios = false;

    for (var i = 1; i < tablaRows.length; i++) {
        var inputValor = tablaRows[i].querySelector("input");
        var valor = parseInt(inputValor.value);

        if (isNaN(valor) || valor === "") {
            hayEspaciosVacios = true;
            break;
        }

        suma += valor;
    }

    if (hayEspaciosVacios) {
        alert("Hay espacios vacíos. Por favor, llene todos los espacios.");
    } else {
        resultado.innerHTML = "La suma de los valores es: " + suma;
    }
}

function borrarTabla() {
    numValoresInput.value = "";
    tablaContainer.innerHTML = "";
    resultado.innerHTML = "";
}
