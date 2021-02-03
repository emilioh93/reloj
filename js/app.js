function actualizarHora() {
    let fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds();

    let pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pNumDia = document.getElementById("numDia"),
        pMes = document.getElementById("mes"),
        pAnio = document.getElementById("anio");

    let semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    pDiaSemana.innerHTML = semana[fecha.getDay()];

    pNumDia.innerHTML = fecha.getDate();

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    pMes.innerHTML = meses[fecha.getMonth()];

    pAnio.innerHTML = fecha.getFullYear();

    // Asignar las horas, minutos y segundos
    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    pHoras.innerHTML = horas;
    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;
}


// Creamos función cambiar color
function cambiarColor(color) {
    let section = document.getElementsByTagName("section");

    if (color == verde) {
        section[0].className = "w-75 verdeN";
    }
    if (color == azul) {
        section[0].className = "w-75 azulN";
    }
    if (color == rosa) {
        section[0].className = "w-75 rosaN";
    }
}

window.setInterval(actualizarHora, 1000);