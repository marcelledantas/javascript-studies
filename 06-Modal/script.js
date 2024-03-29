'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModel = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openModel);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    console.log(e.key);
    // check if a element alrealdy has a certain class
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});