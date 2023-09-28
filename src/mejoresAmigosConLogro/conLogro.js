const openButton = document.querySelector('#mas-button');
const modal = document.querySelector('#plus-botones');
//const closeModal = document.querySelector('#close-modal');
const nombre = obtenerParametro('name');
const descripcion = obtenerParametro('detail');
const logros = obtenerParametro('logros').split(',');
const cantidad = obtenerParametro('cantidad');
const fecha = obtenerParametro('fecha');

document.getElementById('nombreLogro').textContent = nombre;
document.getElementById('cantidadLograr').textContent = cantidad;

/*openButton.addEventListener('click', () =>{
    modal.showModal();
});

closeModal.addEventListener('click', () =>{
    modal.close();
});*/

function obtenerParametro(nombre) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombre);
}