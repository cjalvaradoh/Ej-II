
const campoTexto = document.getElementById('caracterUno');
const boton = document.getElementById('botonAgregar');
const lista = document.getElementById('lista');

function agregarElemento() {
    const valor = campoTexto.value.trim();

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = valor;
    nuevoElemento.className = 'list-group-item'; 

    nuevoElemento.addEventListener('dblclick', function() {
        this.remove();
    });


    lista.appendChild(nuevoElemento);

  
    campoTexto.value = '';
}


boton.addEventListener('click', agregarElemento);
