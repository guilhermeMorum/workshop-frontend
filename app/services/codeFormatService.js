'use strict';

angular.module('workshop').service('codeFormater', function(){
	
	this.format = function format(){
		var codeable = document.getElementsByClassName('codeable');
		for(var i = 0; i < codeable.length; i++){
			codeable[i].innerHTML = insertStyles(codeable[i].innerHTML);
		}
	}

	function insertStyles(code){
		var result = code;
		result = result.replace(/(\"\w+(\W?\w)+\")/g, "<span class=\"blue\">$1</span>");
		result = result.replace(/\&gt;((\w+\W?)+)\&lt;/g, "&gt;<span class=\"dark\">$1</span>&lt;");
		result = result.replace(/\&lt;((\w+\W?)+ |\w+)/g, "&lt;<span class=\"purple\">$1</span>");
		result = result.replace(/\&lt;(\/(\w+\W?)+)\&gt;/g, "&lt;<span class=\"purple\">$1</span>\&gt;");
		return result;
	}

});