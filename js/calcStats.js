"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');

module.exports.calcStats = (player) => {
	player.health = player.model.health + player.model.typeHealth;
	// This is repetative and should be removed?
	player.damage = player.model.damage + player.model.typeDamage + player.modification.damageBonus + player.weapon.damage;
	player.protection = player.model.protection + player.model.typeProtection;
	player.evasion = player.model.evasion + player.model.typeEvasion;

	return player; 
};
