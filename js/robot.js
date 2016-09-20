"use strict";
// Defining base object for robot
let Battledome = {};

// Defining a base robot
Battledome.Robot = function(name) {
	this.playerName = name || "unknown robot";
	this.type = null;
  this.health = 0;
  this.damage = 0;
  this.protection = 0;
  this.evasion = 0;
};

// Whats exported is available to other files
// Look in to always exporting objects.  This did not work without {}.
module.exports = {Battledome};