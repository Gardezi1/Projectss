Template.addReminder.helpers({
	alertMessage: function(){
		console.log("Bye World ");
		
	}
});




var hooksObject = {
	
	after: {
    // Replace `formType` with the form `type` attribute to which this hook applies
	    insert: function(error, result) {
	    	//Meteor.ClientCall.setClientId(1);
		    Meteor.call("intiateReminder" , result , function(error , result){
		    	console.log("Hello World")
		    })
	    	
	    }
  	}
};	

Tracker.autorun( function(){
	debugger;
	var reminders = Reminders.find({"expired": "yes"}).fetch();
	for (i = 0 ; i < reminders.length ; i++){
		//alert("Reminder Found");
		alert(reminders[i].text);
		Reminders.update( {_id: reminders[i]._id} , {$set : {"expired" : "ok"}});
	}

});

AutoForm.addHooks('insertRemindersForm', hooksObject);

// Meteor.ClientCall.methods({

//   'ReminderAlert': function(id) {
//   	console.log("Client side");
//     console.log(id);
//   },

// });

