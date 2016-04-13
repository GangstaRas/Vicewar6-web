Router.configure({
	layoutTemplate: 'structure',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('allPlayers'); }
});

Router.route('/', {name: 'matchView'});
