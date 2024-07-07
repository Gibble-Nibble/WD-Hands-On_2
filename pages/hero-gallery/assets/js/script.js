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

    $(document).ready(function() {
        // Initially hide all hero sections except the active one
        $('.hero-section').not('.active').hide();

        // Handle click event for hero gallery links
        $('.hero-link').click(function(e) {
            e.preventDefault();
            var index = $(this).data('index');
            $('.hero-section').removeClass('active').hide();
            $('.hero-section:nth-child(' + index + ')').addClass('active').fadeIn();
        });
    });
});