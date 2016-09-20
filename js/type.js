"use strict";
// Requirements should flow in a direction and not step on each other
const RobotFile = require('./robot');

// Need three type constructor functions
// Game balancing - Building damage less to more with types
let TypeOne = function() {
	this.typeName = "type one";
	this.typeHealth = Math.floor(Math.random() * 40 + 170);
	this.typeDamage = Math.floor(Math.random() * 10 + 5);
	this.typeProtection = 25;
  this.typeEvasion = Math.floor(Math.random() * 10 + 1); // Refactor?
};
// This is saying new RobotFile(file).Robot(object).Robot(constructor)
TypeOne.prototype = new RobotFile.Battledome.Robot();

let TypeTwo = function() {
	this.typeName = "type two";
	this.typeHealth = Math.floor(Math.random() * 40 + 160);
	this.typeDamage = Math.floor(Math.random() * 10 + 10);
  this.typeProtection = 25;
  this.typeEvasion = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
TypeTwo.prototype = new RobotFile.Battledome.Robot();

let TypeThree = function() {
	this.typeName = "type three";
	this.typeHealth = Math.floor(Math.random() * 40 + 150);
	this.typeDamage = Math.floor(Math.random() * 10 + 15);
  this.typeProtection = 25;
  this.typeEvasion = Math.floor(Math.random() * 10 + 1); // Refactor?	
};
TypeThree.prototype = new RobotFile.Battledome.Robot();

// This is exporting constructors
module.exports = {TypeOne, TypeTwo, TypeThree};
