const openButton = document.querySelector('#mas-button');
const modal = document.querySelector('#plus-botones');
const closeModal = document.querySelector('#close-modal');

openButton.addEventListener('click', () =>{
    modal.showModal();
});

closeModal.addEventListener('click', () =>{
    modal.close();
});

