//make the back-to-top vissible 

function scrollAppear() {
    var projects = document.querySelector('.blogs');
    var backToTop = document.querySelector('.back-to-top');
    var projectsPosition = projects.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (projectsPosition < screenPosition) {
        backToTop.classList.remove('back-appear');
    }
    if (projectsPosition > screenPosition) {
        backToTop.classList.add('back-appear');
    }
}

window.addEventListener('scroll', scrollAppear);
