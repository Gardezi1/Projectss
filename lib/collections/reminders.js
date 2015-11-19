Reminders = new Mongo.Collection('reminder');

Reminders.attachSchema(new SimpleSchema	({
		text: {
			type: String,
			label: "Text",
			max: 200,
			optional: false
		},
		date: {
  			type: Date
  		},
  		time: {
		    type: String,
		    optional: true,
		    autoform: {
		      afFieldInput: {
		        type: "time"
		      }
		    }
		 }})
);