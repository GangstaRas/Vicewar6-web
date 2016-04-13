Meteor.publish('allPlayers', function(){
	return Players.find();
});

Meteor.methods({
	'generateKey': function() {
		var text = "";
		var possible = "abcdefghijklmnopqrstuvwxyz";

		for( var i=0; i < 5; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
});

Meteor.methods({
	'addPlayer': function(newPlayer) {
		Meteor.call('generateKey', function(error, result) {			
			if (error)
				return alert(error.reason);
			
			newPlayer = _.extend(newPlayer, {
				playerKey: result
			});
			
			Players.insert({
				nickname	: newPlayer.playerName,
				team		: newPlayer.playerTeam,
				key			: newPlayer.playerKey,
				kills		: 0,
				deaths		: 0
			});
		});
		return true;
	}
});