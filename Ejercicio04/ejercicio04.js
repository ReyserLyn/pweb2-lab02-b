function obtenerCodigo() {
    const url = document.getElementById("input-url").value;
    const codigo = url.substring(url.lastIndexOf('/') + 1);

    const codigoSesion = codigo.replace(/-/g, "");
    document.getElementById("codigo-sesion").innerHTML = codigoSesion;
}

function borrarTexto() {
    document.getElementById("input-url").value = "";
    document.getElementById("codigo-sesion").innerHTML = "";
}
