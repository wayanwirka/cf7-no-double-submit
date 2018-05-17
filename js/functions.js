(function($){

  'use strict';
  
  var CF7_no_double_submit = {
  
    preventDoubleSubmit : function(){
      /**
       * Ensure run scripts only when contact form 7 is available and their AJAX enable
       */
      if ( typeof wpcf7 !== 'undefined' && wpcf7 !== null && wpcf7 ) {
        
        window.oldFormData = window.FormData;
        /**
         * If event comes here that means CF7 doesn't submit form via ajax so we need to prevent form being submitted
         */
        $('.wpcf7-form').bind('submit', function( e ){
          if ( typeof window.FormData === 'function' || typeof window.FormData === 'boolean' ) {
            e.preventDefault();
          }
        });

        /**
         * Set flag before submit form
         */
        $('.wpcf7').bind('wpcf7beforesubmit', function( e ){
          window.FormData = true;
        });

        /**
         * Revert flag after form submitted
         */
        $('.wpcf7').bind('wpcf7submit', function( e ){
          window.FormData = window.oldFormData;
        });
        
      }
    }
    
  };
  
  $(document).ready( function(){
  
    CF7_no_double_submit.preventDoubleSubmit();
    
  } );

})(jQuery);
