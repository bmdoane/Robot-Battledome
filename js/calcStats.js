"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');

let Stats = {};

// Do I need damage here and in calcDmg
Stats.calcStats = function(player) {
	player.health = player.model.health + player.model.typeHealth;
	player.damage = player.model.damage + player.model.typeDamage + player.modification.damageBonus + player.weapon.damage;
	player.protection = player.model.protection + player.model.typeProtection;
	player.evasion = player.model.evasion + player.model.typeEvasion;

	return player; 
};

module.exports = Stats;