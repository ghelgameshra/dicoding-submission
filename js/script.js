// navbar sosmed menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// accordion button
document.querySelectorAll('.accordion__button').forEach( button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        // tambah class accordion__button--active
        button.classList.toggle('accordion__button--active');

        // setelah tombol diklik atau saat ada class accordion__button--active
        if( button.classList.contains('accordion__button--active') ){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

    });
} );
