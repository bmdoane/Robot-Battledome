'use strict'

const { player1Card, player2Card, buildDOM, endDOM } = require('./battle.js');
const { calcDamage } = require('./calcDamage.js');
const { coinFlip } = require('./coinFlip.js');

// Look at refactoring in case both die in same round
module.exports.battleRound = (player1, player2) => {
	let pl1Dmg = calcDamage(player1);
	let pl2Dmg = calcDamage(player2);
	console.log("pl1Dmg", pl1Dmg);
	console.log("pl2Dmg", pl2Dmg);
	if (coinFlip() === 0) {
		console.log("Player one attacks first")
		player2.health = player2.health - pl1Dmg;
		player1.health = player1.health - pl2Dmg;
		if (player2.health <= 0) {
			player2.health = 0
			player1Card(player1);
			player2Card(player2);
			endDOM(player1, player2)
		} else if (player1.health <= 0) {
			player1.health = 0
			player1Card(player1);
			player2Card(player2);				
			endDOM(player2, player1)
		} else {
			console.log("player2.health", player2.health);
			console.log("player1.health", player1.health);
			player1Card(player1);
			player2Card(player2);
			buildDOM(player1, player2, pl1Dmg, pl2Dmg);
		}	
	} else {
		console.log("Player 2 attacks first")
		player1.health = player1.health - pl2Dmg;			
		player2.health = player2.health - pl1Dmg;
		if (player1.health <= 0) {
			player1.health = 0
			player1Card(player1);
			player2Card(player2);
			endDOM(player2, player1)
		} else if (player2.health <= 0) {
			player2.health = 0
			player1Card(player1);
			player2Card(player2);				
			endDOM(player1, player2)
		} else {			
			console.log("player1.health", player1.health);
			console.log("player2.health", player2.health);
			player1Card(player1);
			player2Card(player2);
			buildDOM(player2, player1, pl2Dmg, pl1Dmg);
		}				
	}	
}