var recurrence = new Cron(everyMinute , {});

var everyMinute = new Cron(function() {
    console.log("another minute has passed!");
    console.log("Let's Check");
        var _date = (new Date)
        _date = _date.toISOString().substring(0, 10);
            console.log(_date);
            var p = Reminders.findOne({_id: ServerSession.get('currentId')}).date;
            p = p.toISOString().substring(0, 10);
        console.log(p);
        if (_date == p){
        	p = Reminders.findOne({_id: ServerSession.get('currentId')}).time.toLocaleString();
        	tt = (new Date).getHours().toLocaleString();
        	s = (new Date).getMinutes();
        	if (s/10 == 0 ){
        		tt = tt + ":0" + s;
        	}else{
        		tt = tt+":"+s;
        	}
            console.log('p = ' + p);
            console.log('tt = ' + tt);
        	//if (p ==  tt){
        		//Router.go('alertPage')
        	//}

         }
        console.log("Checking Done");
}, {});