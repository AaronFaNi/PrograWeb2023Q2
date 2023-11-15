function cambiarImagen() {
    var imagen = document.getElementById('poroComida');
    imagen.src = 'porocomiendo.jpg';
}

function poroYoNoTeElijo() {

    var numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    switch (numeroAleatorio) {
        case 1:
            window.location.href = 'poroGenerico.html';
            break;

        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;
        default:
            break;
    }
}