"use strict";

const Model = require('./model');

module.exports.addModel = function(element, player) {
	
	switch(element.id) {
		case "one":
			player.model = new Model.ModelOne();
			break;
		case "two":
			player.model = new Model.ModelTwo();
			break;
		case "three":
			player.model = new Model.ModelThree();
			break;
		case "four":
			player.model = new Model.ModelFour();
			break;
		case "five":
			player.model = new Model.ModelFive();
			break;
		case "six":
			player.model = new Model.ModelSix();
			break;
		default:
			console.log("This function is broken!");
	}
	return player.model;
};