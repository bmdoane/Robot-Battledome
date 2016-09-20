"use strict";

// Need this for it to work.  Why does it with no module export?
const Weapon = require('./weapons');

let AddWeapon = {};

AddWeapon.addWeapon = function(element, player) {
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

module.exports = AddWeapon;