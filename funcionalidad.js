
const agregarBtn = document.getElementById('agregar-btn');

agregarBtn.addEventListener('click', agregar);

function agregar(){
    const pantalla = document.getElementById('nueva-tarea');
    const lista = document.getElementById('lista-tareas')
    const nuevaTarea = document.createElement('li')

    nuevaTarea.addEventListener('click', () => nuevaTarea.remove())
    nuevaTarea.textContent = pantalla.value

    lista.appendChild(nuevaTarea)
}