window.onload = function() {
    let animateElements = document.querySelectorAll('.js-animate');
    function ActiveDisplay() {
        this.show = function() {
            animateElements.forEach(e => {
                e.classList.add('activeAnimate');
            });
        };
    };
    let showElements = new ActiveDisplay();
    showElements.show();
    let clickEvent = document.querySelectorAll('.clickEvent');
    let arrows = document.querySelectorAll('.arrow');
    function ShowInfoText() {
        this.show = function(i) {
            clickEvent[i].nextElementSibling.classList.toggle('showInfo');
            arrows[i].classList.toggle('rotate');
        };
    };
    let arrowEvent = new ShowInfoText();
    clickEvent.forEach((e, i) => {
        e.addEventListener('click', function() {
            arrowEvent.show(i);
        });
    });
};