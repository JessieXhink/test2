/**
 * Main content module
 */
define(['ojs/ojcore' ,'knockout'
   ], function(oj, ko) {
   /**
    * The view model for the main content view template
    */
            function mainContentViewModel() {
                var self = this;
                
                self.something = ko.observable("This paragraph uses content from it's own mainContent ViewModel, \n\
                instead of the static HTML that you see above, which is coming from the view template. The mainContent.js module is found in the /js/module folder");
            }

   return mainContentViewModel;
});
