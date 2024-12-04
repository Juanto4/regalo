// Reproducir la música inicial cuando se presione el botón (en vez de automáticamente al cargar la página)
window.onload = function() {
    console.log('Página cargada');
    crearCorazones(); // Crear corazones cuando la página se carga
    mostrarAnimacionInicio(); // Mostrar la animación de los elementos
};

// Función para reproducir música al presionar el botón
function iniciarMusica() {
    var musicaInicial = document.getElementById('musicaInicial');
    musicaInicial.play(); // Reproducir la música inicial

    console.log('Música inicial reproducida');
}

// Función para mostrar el QR, mensaje, confeti y reproducir música
function mostrarSorpresa() {
    console.log('Botón presionado, ejecutando sorpresa');
    
    var qrCode = document.getElementById('qrCode');
    var mensaje = document.getElementById('mensaje');
    var boton = document.getElementById('sorpresaBtn');
    
    // Agregar el temblor al botón
    boton.classList.add('shake');  // Hacer que el botón tiemble al inicio
    
    // Reproducir música de tambores
    var musicaTambores = document.getElementById('musicaTambores');
    musicaTambores.play();  // Reproducir la música de tambores
    console.log('Música de tambores iniciada');

    // Esperar a que termine la música de tambores antes de mostrar el QR, mensaje y ocultar el botón
    setTimeout(function() {
        console.log('Mostrando QR y mensaje, ocultando botón');

        // Muestra el QR y el mensaje
        qrCode.style.display = 'block';
        mensaje.classList.remove('hidden');
        
        // Desaparece el botón
        boton.style.display = 'none';

        // Reproducir la música final
        var musicaFinal = document.getElementById('musicaFinal');
        musicaFinal.play();  // Comienza a sonar la música final

        // Crear confetis
        lanzarConfetis();

        // Detener el temblor una vez que aparece el QR y el mensaje
        boton.classList.remove('shake');
    }, musicaTambores.duration * 1000);  // Espera el tiempo total de la música de tambores (en milisegundos)
}

// Función para generar confetis utilizando canvas-confetti
function lanzarConfetis() {
    console.log('Lanzando confetis');
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
}

// Función para crear los corazones flotantes
function crearCorazones() {
    const cantidadCorazones = 30; // Número de corazones

    for (let i = 0; i < cantidadCorazones; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;  // Posición aleatoria en el eje X
        heart.style.animationDuration = `${Math.random() * 5 + 4}s`; // Duración aleatoria
        heart.style.animationDelay = `${Math.random() * 2}s`; // Retardo aleatorio
        document.body.appendChild(heart);
    }
}

// Función para mostrar la animación de aparición
function mostrarAnimacionInicio() {
    console.log('Animación de inicio mostrando el contenedor');
    var container = document.querySelector('.container');
    container.classList.remove('hidden');
}
