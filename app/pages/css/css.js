'use strict';

angular.module('workshop')
.controller('CssCtrl', ['$scope', 'codeFormater', function($scope, codeFormater) {

	var vm = $scope;

	vm.caixa = '#333333';

	vm.caixas = '#0099FF';

	vm.p = {
		color: '#FF9900',
		size: '20px'
	};

	vm.box = {
		hover: '#662041',
		active: '#FF0266'
	}

	vm.combining = {
		first: '#0099FF',
		second: {
			color1: '#FF0266',
			color2: '#0099FF'
		},
		third: {
			color1: '#FF0266',
			color2: '#0099FF'
		},
		fourth: {
			color1: '#FF0266',
			color2: '#0099FF',
			color3: '#FF9900',
			color4: '#0099FF',
			color5: '#FF0266',
			color6: '#0099FF'
		}
	};

	vm.pseudo = {
		first: {
			color1: '#333333'
		}
	}

	vm.functions = {
		calc: 'calc(100% - 300px)'
	};

	vm.flex = {
		first: {
			display: 'flex'
		},
		second: {
			direction: 'row',
			item: [
				{
					order: 1,
					border: '#FF9900'
				},
				{
					order: 2,
					border: 'rgba(0,0,0,0.5)'
				},
				{
					order: 3,
					border: '#0099FF'
				}
			]
		},
		third: {
			wrap: 'nowrap',
			item: [
				{
					grow: '0'
				},
				{
					grow: '0'
				},
				{
					grow: '0'
				},
				{
					grow: '0'
				},
				{
					grow: '0'
				}
			]
		},
		fourth: {
			wrap: 'nowrap',
			justifyContent: 'flex-start',
			alignSelf: 'center',
			shrink: '1',
			item: [
				{
					basis: '200px'
				},
				{
					basis: '200px'
				},
				{
					basis: '200px'
				},
				{
					basis: '200px'
				},
				{
					basis: '200px'
				}
			]
		}
	};

	function init(){
		codeFormater.format();
	}

	init();

}]);