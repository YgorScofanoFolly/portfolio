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
    let menuHidded = document.querySelector('.menu_hamb');
    let menu = document.querySelector('.menu_open');
    function showHide() {
        this.show = function() {
            menu.classList.toggle('showH');
        };
    };
    let myFunction = new showHide();
    menuHidded.addEventListener('click', function() {
        myFunction.show();
    });
    let imgCode = document.querySelector('.code');
    let imgDesktop = "img_src/vs_code/code_desk.png";
    let imgTablet = "img_src/vs_code/code_tablet.png";
    let imgMobile = "img_src/vs_code/code_mobile.png";
    function ShowPictureScreenSize() {
        if (window.innerWidth > 975) {
            imgCode.setAttribute('src', imgDesktop);
        } else if ((window.innerWidth < 975) && (window.innerWidth > 464)) {
            imgCode.setAttribute('src', imgTablet);
        } else {
            imgCode.setAttribute('src', imgMobile);
        }
    };
    ShowPictureScreenSize();
    window.addEventListener('resize', function() {
        if (window.innerWidth > 975) {
            imgCode.setAttribute('src', imgDesktop);
        } else if ((window.innerWidth < 975) && (window.innerWidth > 464)) {
            imgCode.setAttribute('src', imgTablet);
        } else {
            imgCode.setAttribute('src', imgMobile);
        }
    });
};