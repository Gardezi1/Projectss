var recurrence = new Cron(everyMinute , {});

var everyMinute = new Cron(function() {
    console.log("another minute has passed!");
    var _date = (new Date).toLocaleString().split(",");
    console.log(_date);
    var p = Reminders.findOne({_id: ServerSession.get('currentId')}).date.toLocaleString().split(",")[0];
    if (date == p){
    	p = Reminders.findOne({_id: ServerSession.get('currentId')}).time.toLocaleString();
    	tt = (new Date).getHours().toLocaleString();
    	s = (new Date).getMinutes();
    	if (s/10 == 0 ){
    		tt = tt + ":0" + s;
    	}else{
    		tt = tt+":"+s;
    	}

    	if (p ==  tt){
    		Router.go('alertPage')
    	}

    }
}, {});