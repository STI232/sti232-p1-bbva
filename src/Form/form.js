const logroForm = document.getElementById('logroForm');

logroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const detail = document.getElementById('detail').value;
    const logros = document.querySelectorAll('input[name="logro"]:checked');
    const cantidad = document.getElementById('cantidad').value;
    const fecha = document.getElementById('fecha').value;

    console.log('Nombre del logro:', name);
    console.log('Descripción:', detail);
    console.log('Logros seleccionados:', Array.from(logros).map(logro => logro.value));
    console.log('Cantidad a lograr:', cantidad);
    console.log('Fecha:', fecha);

    const url = `../mejoresAmigosConLogro/mejoresAmigosConLogro.html?name=${encodeURIComponent(name)}&detail=${encodeURIComponent(detail)}&logros=${Array.from(logros).map(logro => logro.value).join(',')}&cantidad=${encodeURIComponent(cantidad)}&fecha=${encodeURIComponent(fecha)}`;
        window.location.href = url;
});