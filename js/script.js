let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

function saludar() {
    mensaje.textContent = "¡Lo lograste! Mi página funciona 🎉";
}

boton.addEventListener("click", saludar);