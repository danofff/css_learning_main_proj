var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan .button');
var modal = document.querySelector('.modal');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var modalCloseButton = document.querySelector('.modal__action.modal__action--negative');

for(var i = 0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', e=>{
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
}


if(modalCloseButton){
    modalCloseButton.addEventListener('click', e => {
        // backdrop.style.display = 'none';
        // modal.style.display = 'none';
        backdrop.classList.remove('open');
        modal.classList.remove('open');
    });
}

toggleButton.addEventListener('click', e => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

backdrop.addEventListener('click', e => {
    if(mobileNav.classList.contains('open')){
        backdrop.classList.remove('open');
    }
    mobileNav.classList.remove('open');
})