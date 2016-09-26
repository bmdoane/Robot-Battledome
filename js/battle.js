"use strict"

var $ = require('jquery');

let currentPlayer1 = {};
let currentPlayer2 = {};

let counter = 1;

module.exports.player1Card = (player) => {
	//console.log("ur mom");
	let player1String = '';
	player1String += `
	<div class="pc1">
		<div class="card-header">
			<p>${player.name}</p>
		</div>
		<p>Operating Model ${player.model.modelName}</p>
		<p>Weapon of choice:</p>
		<p>${player.weapon.name}</p>
		<p>Health: ${player.health}</p>
	</div>`;
	$('#player1-bat').html(player1String);
};

module.exports.player2Card = (player) => {
	//console.log("ur mom's mom");
	let player2String = '';
	player2String += `
	<div class="pc2">
		<div class="card-header">
			<p>${player.name}</p>
		</div>
		<p>Operating Model ${player.model.modelName}</p>
		<p>Weapon of choice:</p>
		<p>${player.weapon.name}</p>
		<p>Health: ${player.health}</p>		
	</div>`;
	$('#player2-bat').html(player2String);	
};

module.exports.buildDOM = (attacker, victim, attDmg, vicDmg) => {
	//console.log("attacker", attacker);
	let battleString = '';
	battleString += `
	<div class="battle-dom">
		<p>Round: ${counter}</p>
		<p>${attacker.name} strikes ${victim.name} for ${attDmg}<p>
		<p>${victim.name} retaliates for ${vicDmg}</p> 
	</div>`
	$('#bat-descrip').prepend(battleString);
	counter ++
};

module.exports.endDOM = (winner, loser) => {
	let endString = '';
	endString = `
	<div class="battle-dom">
		<p>${winner.name} has vanquished ${loser.name}</p>
	</div>`
	$('#bat-descrip').html(endString);
	$('#attack').hide()
	$('#restart').show()
}