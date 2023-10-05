// const beneficio1 = document.getElementById('beneficio-1');
//         const benefico1Dialog = document.getElementById('benefico1');
//         beneficio1.addEventListener('click', () => {
//             benefico1Dialog.showModal();
//         });

//         const cancelModalButton = document.getElementById('cancel-modal');
//         cancelModalButton.addEventListener('click', () => {
//             benefico1Dialog.close();
//         });

const redimirPuntos = document.getElementById('redimir-puntos');
redimirPuntos.addEventListener('click', () => {
    document.getElementById('puntos').textContent = "0";
    benefico1Dialog.close();
});