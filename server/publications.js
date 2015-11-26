Meteor.publish('Reminders', function() {
	return Reminders.find();
});
