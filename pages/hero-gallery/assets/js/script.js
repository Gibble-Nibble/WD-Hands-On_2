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

function showPage(pageNumber) {
    // Hide all hero containers
    var heroContainers = document.querySelectorAll('.hero-container');
    heroContainers.forEach(function(container) {
        container.style.display = 'none';
    });

    // Show the selected hero container
    var selectedHero = document.getElementById('hero-page-' + pageNumber);
    if (selectedHero) {
        selectedHero.style.display = 'block';
    }
}