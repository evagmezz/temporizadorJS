document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let timer = 5;
    let timerInterval;

    // Función para actualizar el valor del contador
    function actualizarCount() {
        document.getElementById('countId').textContent = count + ' clics';
    }

    // Función para actualizar el temporizador
    function actualizarTimer() {
        document.getElementById('timerId').textContent = timer + 's';

        if (timer <= 0) {
            clearInterval(timerInterval); // Detener el temporizador cuando llega a 0
            alert('El valor del contador es: ' + count);
        } else {
            timer--; // Decrementar el temporizador
        }
    }

    // Iniciar el temporizador con intervalos de 1 segundo
    timerInterval = setInterval(actualizarTimer, 1000);

    // Evento para el botón "Pinchame"
    document.getElementById('clickMe').addEventListener('click', function () {
        count++; // Incrementar el contador
        actualizarCount(); // Actualizar el valor del contador

        // Cambiar el texto de los botones
        document.getElementById('clickMe').textContent = '¡Me pinchaste!';
        document.getElementById('dontClickMe').textContent = '¡No lo hagas!';
    });

    // Evento para el botón "No me pinches"
    document.getElementById('dontClickMe').addEventListener('click', function () {
        count--; // Decrementar el contador
        actualizarCount(); // Actualizar el valor del contador

        // Cambiar el texto de los botones
        document.getElementById('clickMe').textContent = '¡No me pinches!';
        document.getElementById('dontClickMe').textContent = '¡Me pinchaste!';
    });
});
