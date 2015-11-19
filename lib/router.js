Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){ return Meteor.subscribe('Reminders'); }
});

Router.route('/', {name: 'addReminder'});