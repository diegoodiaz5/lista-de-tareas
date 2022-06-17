/* Me guardo en variables los elementos necesarios */
const listaDeTareasUL = document.getElementById("lista-tareas");
const botonAgregar = document.getElementById("agregar");
const barrita = document.getElementById("tarea");
const listaDeBoton = document.getElementById("prioridad");
const mensajeListaVacia = document.getElementById("mensaje-lista-vacia");

/* Crear un elemento y colocarlo en pantalla */
function crearNuevaTarea(descripcion, prioridad) {
  // Crear un nuevo elemento li y guardarlo en una variable
  const nuevaTarea = document.createElement("li");
  // Cambiar el texto interno del li
  nuevaTarea.textContent = descripcion;

  // Agregar una clase CSS al li
  nuevaTarea.classList.add(prioridad);

  // Agregar el li a la lista de tareas
  listaDeTareasUL.appendChild(nuevaTarea);
  actualizarMensaje();
}

function actualizarMensaje() {
  // Chequear si la lista está vacía
  // En caso de que lo este, mostrar el mensaje, sino ocultarlo
  if (listaDeTareasUL.childElementCount === 0) {
    mensajeListaVacia.style.display = "block";
  } else {
    mensajeListaVacia.style.display = "none";
  }
}

// Agrego listeners para las acciones agregar y borrar
botonAgregar.addEventListener("click", function () {
  crearNuevaTarea(barrita.value, listaDeBoton.value);
});

listaDeTareasUL.addEventListener("click", function (evento) {
  if (evento.target.tagName === "LI") {
    evento.target.remove();
    actualizarMensaje();
  }
});
