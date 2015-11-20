

var hooksObject = {
	
	after: {
    // Replace `formType` with the form `type` attribute to which this hook applies
	    insert: function(error, result) {
	    	debugger;
	    	console.log(result);
	    	debugger;	
	    	if (ServerSession.get('currentId') == undefined){
		    	ServerSession.set('currentId', result);
		    }else{
		    	 var oldReminder = Reminders.findOne({_id: ServerSession.get('currentId')});
		    	 var newReminder = Reminders.findOne({_id: result});
		    	 if(oldReminder.date > newReminder.date){
		    	 	ServerSession.set('currentId', result);
		    	 }else if (oldReminder.time > newReminder.time){
		    	 	ServerSession.set('currentId', result);
		    	 }
		    }
	    	
	    }
  	}
};

AutoForm.addHooks('insertRemindersForm', hooksObject);