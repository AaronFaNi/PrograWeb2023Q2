function cambiarImagen() {
    var imagen = document.getElementById('poroComida');
    imagen.src = 'porocomiendo.jpg';
}

function poroYoNoTeElijo() {

    var numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    switch (numeroAleatorio) {
        case 1:
            window.location.href = 'poro1.html';
            break;
        case 2:
            window.location.href = 'poro2.html';
            break;
        case 3:
            window.location.href = 'poro3.html';
            break;
        case 4:
            window.location.href = 'poro4.html';
            break;
        case 5:
            window.location.href = 'poro5.html';
            break;
        case 6:
            window.location.href = 'poro6.html';
            break;
        case 7:
            window.location.href = 'poro7.html';
            break;
        case 8:
            window.location.href = 'poro8.html';
            break;
        case 9:
            window.location.href = 'poro9.html';
            break;
        default:
            break;
    }
}