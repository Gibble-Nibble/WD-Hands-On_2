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

    // Hide all card containers except the first one initially
    $('.card-container').not('#card-page-1').hide();
});

function showPage(pageNumber) {
    // Hide all card containers
    $('.card-container').hide();

    // Show the selected card container
    var selectedHero = document.getElementById('card-page-' + pageNumber);
    if (selectedHero) {
        selectedHero.style.display = 'block';
    }
}
