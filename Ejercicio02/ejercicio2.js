function invertirTexto () {
    const texto = document.getElementById("text-input").value;
    const divTxtInv = document.getElementById("text-inv");
    var txtInvertitdo = "";

    for (var i = texto.length - 1; i >= 0; i--){
        txtInvertitdo += texto[i];
    }
        
    divTxtInv.innerHTML = txtInvertitdo;
}