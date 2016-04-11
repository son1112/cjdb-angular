'use strict';

app.directive('productInfo', function() {
    return {
  	restrict: 'E',
  	scope: {
   	    info: '=' 
  	},
        templateUrl: 'js/directives/productInfo.html'  
    };
});
