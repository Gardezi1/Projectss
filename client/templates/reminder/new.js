

var hooksObject = {
	
	after: {
    // Replace `formType` with the form `type` attribute to which this hook applies
	    insert: function(error, result) {
		    Meteor.call("intiateReminder" , result , function(error , result){
		    	console.log("Hello World")
		    })
	    	
	    }
  	}
};

AutoForm.addHooks('insertRemindersForm', hooksObject);