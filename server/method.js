var recurrence = new Cron(everyMinute , {});

var everyMinute = new Cron(function() {
    console.log("another minute has passed!");
    var _time = (new Date).toTimeString();
    console.log(_time);
}, {});