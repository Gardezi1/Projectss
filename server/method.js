
Meteor.methods({
    intiateReminder:function(data){
        console.log(data);
        var d = new Date(Reminders.findOne({_id: data}).date.getFullYear(), Reminders.findOne({_id: data}).date.getMonth() + 1, Reminders.findOne({_id: data}).date.getDate(), parseInt(Reminders.findOne({_id: data}).time.split(":")[0]), parseInt(Reminders.findOne({_id: data}).time.split(":")[1]), 0, 0);
        console.log("Hello World");
        console.log(d);
        //  var newReminder = Reminders.findOne({_id: data});
         var recurrence = new Cron(everyMinute , {hour: d.getHours() , minute: d.getMinutes()});

         var everyMinute = new Cron(function() {
            console.log("Outputting Data");
            console.log(data);
            var expired = {"expired": "yes"}
            Reminders.update( {_id: data} , {$set : {"expired" : "yes"}});
            //ServerSession.set("reminderID"  , data);
            
            //Meteor.ClientCall.apply(1, "ReminderAlert", data , function(error , result){
            //   console.log(result);
            //})
        }, {
            minute: d.getMinutes(),
            hour: d.getHours(),
          day: d.getDate(),
            month: d.getMonth()+1
        });

    }
});