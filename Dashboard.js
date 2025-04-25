window.onload = function() {
    var currentPage = window.location.pathname.split('/').pop();

    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(link) {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } 
    }); 
};