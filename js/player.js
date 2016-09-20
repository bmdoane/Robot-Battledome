"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');
const AddModel = require('./addModel');
const AddWeapon = require('./addWeapon');
const AddMod = require('./addMod');


let Battledome = {};

Battledome.player = function() {
	this.name = null;
	this.model = null;
	this.weapon = null;
	this.modification = null;
};

let player1 = new Battledome.player();
let player2 = new Battledome.player();

module.exports = Battledome;