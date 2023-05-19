const divTxtInv = document.getElementById("text-inv");

function invertirTexto () {
    const texto = document.getElementById("text-input").value;

    var txtInvertitdo = "";

    for (var i = texto.length - 1; i >= 0; i--){
        txtInvertitdo += texto[i];
    }
        
    divTxtInv.innerHTML = txtInvertitdo;
}

function borrarTexto () {
    document.getElementById("text-input").value = "";
    
    divTxtInv.innerHTML = "";
}