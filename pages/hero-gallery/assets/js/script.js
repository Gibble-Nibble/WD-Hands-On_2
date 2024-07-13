$(document).ready(function() {
    // Function to close all dropdowns except the one clicked
    $('.dropdown-submenu a.test').on("click", function(e) {
        e.preventDefault(); // Prevent default action
        e.stopPropagation(); // Stop the event from propagating up the DOM
        var $submenu = $(this).next('ul');
        // Close all other submenus
        $('.dropdown-submenu ul').not($submenu).hide();
        $submenu.toggle();
    });

    // Close dropdowns when clicking outside
    $(document).on("click", function(e) {
        if (!$(e.target).closest('.dropdown-submenu').length) {
            $('.dropdown-submenu ul').hide();
        }
    });

    // Initially hide all sections except the active one
    $('.section').not('.active').hide();

    // Handle click event for hero and card gallery links
    function showPage(sectionId) {
        $('.section').removeClass('active').hide();
        $('#' + sectionId).addClass('active').fadeIn();
    }

    window.showPage = showPage;
});


