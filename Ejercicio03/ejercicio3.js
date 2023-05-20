function contador() {
    const dateHoy = new Date();
    
    // El día de arequipa es el 15 de agosto
    const diaAqp = new Date(dateHoy.getFullYear(), 7, 15);

    const tiempoRestante = diaAqp.getTime() - dateHoy.getTime();

    // Calculamos la diferente completa restante
    const diasRest = Math.floor(tiempoRestante/(1000 * 3600 * 24));
    const horasRest = Math.floor((tiempoRestante % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutosRest = Math.floor((tiempoRestante % (1000 * 3600)) / (1000 * 60));
    const segundosRest = Math.floor(tiempoRestante % (1000 * 60) / 1000);

    // Mostramos el resultado en la página
    const contador = document.getElementById('d-restantes');
    contador.textContent = diasRest + ' días, ' + horasRest + ' horas, ' + minutosRest + ' minutos, ' + segundosRest + ' segundos';
}

// Actualizamos la página cada 1 segundo
setInterval(contador, 1000);