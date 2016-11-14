"use strict";

var $ = require('jquery');
const Robot = require('./robot');
const Type = require('./type');
const Model = require('./model');
const Weapon = require('./weapons');
const Modification = require('./mod');
const { addModel } = require('./addModel');
const { addWeapon } = require('./addWeapon');
const { addMod } = require('./addMod');
const { calcStats } = require('./calcStats.js');
const { player1Card, player2Card } = require('./battle.js');
const { newBattle } = require('./reset.js');
const { battleRound } = require('./battleSequence.js')


$(document).ready(function() {
	$('#pageLoad').show();
	$('#inputOne').focus();
	$('#attack').show()
	$('#restart').hide()
	$('#battle-go').hide() // Btn

	let player = function() {
		this.name = null;
		this.model = null;
		this.weapon = null;
		this.modification = null;
	};

	let player1 = new player();
	let player2 = new player();
	let selectedPlayer = {};

	$('#enter1').on('click', function() {
		selectedPlayer.name = $('#inputOne').val();
		$('#pageLoad').addClass('hidden');
		$('#robotsLoad').removeClass('hidden');
	});

	$('#enter2').on('click', function() {
		selectedPlayer.name = $('#inputTwo').val();
		// $('.robots-load').removeClass('hide');
		$('#robotsLoad').removeClass('hidden');
	});

	$('.robots').on('click', function(event) {
		addModel(event.target.closest('.robots'), selectedPlayer);
		//console.log("selectedPlayerrob", selectedPlayer);
		$('#robotsLoad').addClass('hidden');
		$('#weaponsLoad').removeClass('hidden');
	});

	$('.weapons').on('click', function(event) {
		addWeapon(event.target.closest('.weapons'), selectedPlayer);
		//console.log("selectedPlayerweap", selectedPlayer);
		$('#weaponsLoad').addClass('hidden');
		$('#modsLoad').removeClass('hidden');				
	});

	$('.mods').on('click', function(event) {
		addMod(event.target.closest('.mods'), selectedPlayer);
		//console.log("selectedPlayermod", selectedPlayer);
	$('#create-2').focus();				
	});	

	// Assign compiled stats to player1	
	$('#create-2').on('click', function() {
		calcStats(selectedPlayer);
		player1 = selectedPlayer;
		console.log("player1", player1);
		$('#modsLoad').addClass('hidden');	
		// Clear selected player object to build pl2
		selectedPlayer = {};
		$('#inputTwo').focus();
		$('#create-2').hide()
		$('#battle-go').show()
	});

	// Assign compiled stats to player2	
	$('#battle-go').on('click', function() {
		calcStats(selectedPlayer);
		player2 = selectedPlayer;
		console.log("player2", player2);

		// Initiating DOM PlayerCards
		player1Card(player1);
		player2Card(player2);

		$('#battle').removeClass('hidden');
	});

	$('#attack').on('click', function() {
		battleRound(player1, player2)
	});

	$('#restart').click(newBattle)

});