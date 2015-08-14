/**
 * Created by alani on 2015-08-13.
 */
    $(document).ready(function($) {
        $('#accordion').find('.accordion-toggle').click(function(){

            //Expand or collapse this panel
            $(this).next().slideToggle('fast');
            $(this).find('i').toggleClass('fa-minus-circle fa-plus-circle');

            //Hide the other panels
          /*  $(".accordion-content").not($(this).next()).slideUp('fast'); */

        });
    });
