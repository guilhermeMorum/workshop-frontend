'use strict';

angular.module('workshop')
.controller('MaterialCtrl', ['codeFormater', function(codeFormater) {

	function init(){
		codeFormater.format();
	}

	init();

}]);