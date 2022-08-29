let sections = document.querySelectorAll('.animate');
function activeDisplay() {
    sections.forEach(element => {
        element.classList.add('active');
    });
};
window.addEventListener('load', activeDisplay);