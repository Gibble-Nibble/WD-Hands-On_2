
// For dropdowns
$(document).ready(function(){
    // Function to close all dropdowns except the one clicked
    $('.dropdown-submenu a.test').on("click", function(e){
        var $submenu = $(this).next('ul');
        // Close all other submenus
        $('.dropdown-submenu ul').not($submenu).hide();
        $submenu.toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    // Close dropdowns when clicking outside
    $(document).on("click", function(e) {
        if (!$(e.target).closest('.dropdown-submenu').length) {
            $('.dropdown-submenu ul').hide();
        }
    });
});

// For switching pages
function showPage(heroNumber) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sections[heroNumber - 1].style.display = 'block';
}

// Initialize the first hero section as visible
document.addEventListener("DOMContentLoaded", function () {
    showPage(1);
});