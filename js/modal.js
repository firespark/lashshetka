const showModalElems = document.querySelectorAll('.show-form');
const modalElem = document.querySelector('#modal-form');

const closeModal = event => {

    const target = event.target;

    if (target === modalElem ||
        ('.modal-close' && target.closest('.modal-close')) ||
        event.code === 'Escape'
    ) {

        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
            document.body.classList.remove('ohidden');
        }, 300);

        window.removeEventListener('keydown', closeModal);
    }
}

const openModal = (e) => {
    e.preventDefault();

    document.body.classList.add('ohidden');
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
};

if (showModalElems && modalElem) {
    modalElem.addEventListener('click', closeModal);

    showModalElems.forEach(element => {
        element.addEventListener('click', function (event) {

            event.preventDefault();

            let productElement = event.target.closest('.show-form');

            if (productElement && this.contains(productElement)) {

                openModal(event);
            }
        });
    });


}

