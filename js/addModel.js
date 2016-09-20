"use strict";

const Model = require('./model');

let AddModel = {};

AddModel.addModel = function(element, player) {
	
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

// AddModel.addModel = function() {
// 	let robModel = $(this).children()[0].innerHTML;
// 	switch(robModel) {
// 		case "Robo-Model 1":
// 			player1.model = new Model.ModelOne();
// 			break;
// 		case "Robo-Model 2":
// 			player1.model = new Model.ModelTwo();
// 			break;
// 		case "Robo-Model 3":
// 			player1.model = new Model.ModelThree();
// 			break;
// 		case "Robo-Model 4":
// 			player1.model = new Model.ModelFour();
// 			break;
// 		case "Robo-Model 5":
// 			player1.model = new Model.ModelFive();
// 			break;
// 		case "Robo-Model 6":
// 			player1.model = new Model.ModelSix();
// 			break;
// 		default:
// 			console.log("This function is broken!");
// 	}
// 	return player.model;
// };
module.exports = AddModel;