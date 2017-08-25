(function () {
    window.addEventListener('scroll', function (e) {

        var aboutDiv = document.querySelector('#about');
        var experienceDiv = document.querySelector('#experience');
        var techDiv = document.querySelector('#technologies');
        var projectsDiv = document.querySelector('#projects');
        var formDiv = document.querySelector('#form');
        var navbar = document.querySelector('#nav');
        var landing = document.querySelector('#landing');

        if (isScrolledIntoView(aboutDiv)) {
            aboutDiv.className = 'section slide-in';
        }
        if (isScrolledIntoView(experienceDiv)) {
            experienceDiv.className = 'section slide-in';
        }
        if (isScrolledIntoView(techDiv)) {
            techDiv.className = 'section slide-in';
        }
        if (isScrolledIntoView(projectsDiv)) {
            projectsDiv.className = 'section slide-in';
        }
        if (isScrolledIntoView(formDiv)) {
            formDiv.className = 'section slide-in';
        }
        if (!isScrolledIntoView(landing)) {
            navbar.className = 'navbar navbar-expand-lg navbar-light bg-light fixed-top';
        } else {
            navbar.className = 'navbar navbar-expand-lg navbar-dark bg-transparent fixed-top';
        }
    })

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return (((elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)))
    }
})();
