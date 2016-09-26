"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');

module.exports.calcDamage = (attacker) => {
	let damage = 0;
	console.log("attacker.model.typeDamage", attacker.model.typeDamage);
	console.log("attacker.model.damageBonus", attacker.model.damage);
	console.log("attacker.weapon.damage", attacker.weapon.damage);
	console.log("attacker.modification.damageBonus", attacker.modification.damageBonus);

	damage = attacker.model.typeDamage + attacker.model.damage + attacker.weapon.damage + attacker.modification.damageBonus;

	//return damage;
	return Math.floor(Math.random() * (damage + 1));
}