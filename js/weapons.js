"use strict";

// Weapon constructor
let Weapon = function() {
	this.name = "";
	this.damage = 5;
};

Weapon.weaponOne = function() {
	this.name = "The Punisher";
	this.damage = this.damage + 5;
};
Weapon.weaponOne.prototype = new Weapon();

Weapon.weaponTwo = function() {
	this.name = "The Laugher";
	this.damage = this.damage + 7;
};
Weapon.weaponTwo.prototype = new Weapon();

Weapon.weaponThree = function() {
	this.name = "Lucille";
	this.damage = this.damage + 8;
};
Weapon.weaponThree.prototype = new Weapon();

Weapon.weaponFour = function() {
	this.name = "Betsy";
	this.damage = this.damage + 9;
};
Weapon.weaponFour.prototype = new Weapon();

Weapon.weaponFive = function() {
	this.name = "The De-limb-er-ator";
	this.damage = this.damage + 10;
	this.chanceToLop = 0;
};
Weapon.weaponFive.prototype = new Weapon();

Weapon.weaponSix = function() {
	this.name = "Norman";
	this.damage = this.damage + 11;
};
Weapon.weaponSix.prototype = new Weapon();

module.exports = Weapon;
