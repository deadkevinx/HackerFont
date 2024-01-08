// Esta función muestra el texto letra por letra
function showText(target, message, interval, callback) {
    let index = 0;
    const timer = setInterval(function() {
        target.textContent = message.substring(0,index)+"|";
        index++;
        if (index === message.length) {
            clearInterval(timer);
            target.textContent = message;
            target.classList.remove('hidden'); // Remover la clase hidden después de mostrar todo el texto
            callback(); // Llamar a la función de callback una vez que se completa el texto
        }
    }, interval);
}

// Función para mostrar un párrafo después de otro
function showParagraphs(paragraphs, index) {
    if (index < paragraphs.length) {
        const speed = 50; // Velocidad de escritura (en milisegundos)
        const currentParagraph = paragraphs[index];

        // Mostrar el párrafo actual letra por letra
        showText(currentParagraph, currentParagraph.dataset.text, speed, function() {
            // Llamar a la función recursivamente para mostrar el siguiente párrafo después de que termine el actual
            showParagraphs(paragraphs, index + 1);
        });
    }
}

// Llamadas para mostrar los párrafos después de un retraso
document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('.paragraph-box p');

    paragraphs.forEach(function(paragraph) {
        paragraph.classList.add('hidden'); // Ocultar todos los párrafos inicialmente
    });

    // Iniciar la secuencia para mostrar los párrafos
    setTimeout(function() {
        showParagraphs(paragraphs, 0);
    }, 1000); // Retraso antes de mostrar el primer párrafo
});
