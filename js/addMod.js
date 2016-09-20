"use strict";

// Need this for it to work.  Why does it with no module export?
const Modification = require('./mod');

let AddMod = {};

AddMod.addMod = function(element, player) {
	switch(element.id) {
		case "mod-one":
			player.modification = new Modification.modOne();
			break;
		case "mod-two":
			player.modification = new Modification.modTwo();
			break;
		case "mod-three":
			player.modification = new Modification.modThree();
			break;
		case "mod-four":
			player.modification = new Modification.modFour();
			break;
		case "mod-five":
			player.modification = new Modification.modFive();
			break;
		case "mod-six":
			player.modification = new Modification.modSix();
			break;
		default:
			console.log("This function is broken!");															
	}
	return player.modification;
};

module.exports = AddMod;