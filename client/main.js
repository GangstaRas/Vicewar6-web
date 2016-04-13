Template.cubans.helpers({
	'player': function(){
		return Players.find({team: '0'}, {sort: {kills: -1}});
	}
});

Template.haitians.helpers({
	'player': function(){
		return Players.find({team: '1'});
	}
});

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY'
});

Template.showStats.events({
	'submit form': function(e) {
		e.preventDefault();
		
		var newPlayer = {
			playerName: event.target.playerName.value,
			playerTeam: event.target.playerTeam.value
		};
		check(newPlayer.playerName, NonEmptyString);
		check(newPlayer.playerTeam, NonEmptyString);
		console.log(newPlayer.playerName);
		Meteor.call('addPlayer', newPlayer, function(error, result) {
			if (error)
				return alert(error.reason);
		});
	}
});
