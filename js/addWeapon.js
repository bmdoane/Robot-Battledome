"use strict";

const Weapon = require('./weapons');

module.exports.addWeapon = function(element, player) {
	switch(element.id) {
		case "weapon-one":
			player.weapon = new Weapon.weaponOne();
			break;
		case "weapon-two":
			player.weapon = new Weapon.weaponTwo();
			break;
		case "weapon-three":
			player.weapon = new Weapon.weaponThree();
			break;
		case "weapon-four":
			player.weapon = new Weapon.weaponFour();
			break;
		case "weapon-five":
			player.weapon = new Weapon.weaponFive();
			break;
		case "weapon-six":
			player.weapon = new Weapon.weaponSix();
			break;
		default:
			console.log("This function is broken!");															
	}
	return player.weapon;
};