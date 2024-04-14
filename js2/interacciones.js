/********Hacer negrito Letra de acerca de*********/
function hacerTextoNegrita() {
    var parrafo = document.getElementById('acerca');   
    parrafo.style.fontWeight = 'bold';
}


window.addEventListener('load', hacerTextoNegrita);

/********* Cambiar color cuando se pone mouse encima*************/

function cambiarColorTexto() {
    var seccionIntro = document.getElementById('intro');
    var elementosTexto = seccionIntro.querySelectorAll('*'); // Seleccionar todos los elementos dentro de la sección

    // Cambiar el color de fondo de cada elemento cuando se pasa el ratón sobre la sección
    seccionIntro.addEventListener('mouseenter', function() {
        elementosTexto.forEach(function(elemento) {
            elemento.style.color = '#970033';
        });
    });

    // Restablecer el color de fondo de cada elemento cuando el ratón sale de la sección
    seccionIntro.addEventListener('mouseleave', function() {
        elementosTexto.forEach(function(elemento) {
            elemento.style.color = '';
        });
    });
}

// Llamar a la función cuando se carga la página
window.addEventListener('load', cambiarColorTexto);


/********* Cambiar color cuando se pone tactil encima*************/
function cambiarColorTextoTactil() {
    var seccionIntro = document.getElementById('intro');
    var elementosTexto = seccionIntro.querySelectorAll('*'); // Seleccionar todos los elementos dentro de la sección

    // Cambiar el color de fondo de cada elemento cuando se toca la sección en dispositivos móviles
    seccionIntro.addEventListener('touchstart', function() {
        elementosTexto.forEach(function(elemento) {
            elemento.style.color = '#970033';
        });
    });

    // Restablecer el color de fondo de cada elemento cuando se toca fuera de la sección en dispositivos móviles
    document.addEventListener('touchstart', function(event) {
        if (!seccionIntro.contains(event.target)) {
            elementosTexto.forEach(function(elemento) {
                elemento.style.color = '';
            });
        }
    });
}

// Calcular edad para formulario
window.addEventListener('load', cambiarColorTextoTactil);

//**************Correo****************** */

// Llamar a la función cuando se carga la página
function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('fecha_nacimiento').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById('edad').value = edad;
}

document.getElementById('fecha_nacimiento').addEventListener('change', calcularEdad);

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
    // Por ejemplo, usando Fetch API o XMLHttpRequest
    // Aquí solo se muestra un mensaje de alerta con los datos del formulario
    var formData = new FormData(this);
    var formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);

    // Limpieza del formulario
    this.reset();
});

// mostrar edad en la etiqueta
function calcularEdad() {
    var fechaNacimiento = new Date(document.getElementById('fecha_nacimiento').value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById('edad').value = edad;
}

function enviarCorreo() {
    var destinatario = "destinatario@example.com"; // Reemplaza con la dirección de correo electrónico del destinatario
    var asunto = "Registro de usuario"; // Asunto del correo electrónico
    var cuerpo = ""; // Cuerpo del correo electrónico
    cuerpo += "Email: " + document.getElementById('email').value + "\n";
    cuerpo += "Nombre: " + document.getElementById('nombre').value + "\n";
    cuerpo += "Fecha de Nacimiento: " + document.getElementById('fecha_nacimiento').value + "\n";
    cuerpo += "Edad: " + document.getElementById('edad').value + "\n";
    cuerpo += "Género: " + document.getElementById('genero').value + "\n";
    cuerpo += "Grado Académico: " + Array.from(document.getElementById('grado_academico').selectedOptions).map(option => option.value).join(', ') + "\n";

    var mailtoLink = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
    window.location.href = mailtoLink;
}