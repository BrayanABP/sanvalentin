// Mostrar el mensaje sorpresa
function revealSurprise() {
    const surpriseMessage = document.getElementById('surprise-message');
    surpriseMessage.textContent = "Te amo más de lo que las palabras pueden expresar. ¡Eres la luz que ilumina mi vida, Te amo mi niña hermosa!";
    surpriseMessage.style.color = "#ff3366";
    surpriseMessage.style.fontFamily= "Cursive', sans-serif";
}

// Cambiar la frase de amor
const quotes = [
    "\"Te amo no solo por lo que eres, sino por lo que soy cuando estoy contigo.\" \"Roy Croft\" ",
    "\"Te amo más de lo que las palabras pueden decir, más allá de lo que mi corazón puede expresar.\"",
    "\"Eres mi hoy y todos mis mañanas.\" \"Leo Christopher\" ",
    "\"De todos los lugares del mundo, el mejor lugar siempre será a tu lado.\""
];

function changeQuote() {
    const quoteElement = document.getElementById('love-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

// Función para mostrar la historia y la imagen o video en el modal
function showStory(title, story, isVideo = false) {
    const modal = document.getElementById('storyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalStory = document.getElementById('modalStory');
    const clickedElement = event.target; // El elemento que fue clickeado (imagen o video)

    // Limpiar el contenido del modal
    modalImage.innerHTML = ''; // Limpiamos cualquier contenido previo en el modal

    if (isVideo) {
        // Si es un video, crear un nuevo elemento <video>
        const video = document.createElement('video');
        video.src = clickedElement.querySelector('source').src; // Obtenemos la URL del video
        video.controls = true; // control 
        video.autoplay = true; // Reproducir automáticamente
        video.muted = true; // Mutear video
        modalImage.appendChild(video); // Agregamos el video al modal
    } else {
        // Si es una imagen, crear un nuevo elemento <img>
        const image = document.createElement('img');
        image.src = clickedElement.src; // Obtenemos la URL de la imagen
        image.alt = title; // Asignamos el título como alt de la imagen
        modalImage.appendChild(image); // Agregamos la imagen al modal
    }

    // Actualizamos el título y la historia en el modal
    modalTitle.textContent = title;
    modalStory.textContent = story;

    // Mostramos el modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('storyModal');
    modal.style.display = 'none';
}

// Carrusel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

// Inicializamos el carrusel mostrando las primeras 3 imágenes
updateCarousel();

// Función para mover el carrusel en una dirección (izquierda o derecha)
function moveCarousel(direction = 1) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    updateCarousel();
}

// Actualizar el carrusel
function updateCarousel() {
    images.forEach((image, index) => {
        image.classList.remove('center');
        image.style.transform = 'scale(1)';
        image.style.opacity = '0.6';
        image.style.display = 'none'; // Ocultamos todas las imágenes por defecto
    });

    // Calculamos los índices de las imágenes previas y siguientes
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;

    // Mostramos las imágenes previas, actual y siguientes
    images[prevIndex].style.display = 'block';
    images[currentIndex].style.display = 'block';
    images[nextIndex].style.display = 'block';

    // Ajustamos la imagen centr al
    images[currentIndex].classList.add('center');
    images[currentIndex].style.transform = 'scale(1.2)';
    images[currentIndex].style.opacity = '1';

    // Ocultamos las imágenes que no están visibles
    images.forEach((image, index) => {
        if (index !== currentIndex && index !== prevIndex && index !== nextIndex) {
            image.style.display = 'none';
        }
    });
}

// Cambiamos la imagen automáticamente cada 4 segundos
setInterval(() => {
    moveCarousel(1); // Mueve el carrusel a la siguiente imagen
}, 4000);
