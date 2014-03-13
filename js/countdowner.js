function CountDowner(options) {
    this.element = options.element || "";
    this.time = options.time || 3600 * 1000;
    this.interval = options.interval || -50;
    this.callback = options.callback || function(){};
}
CountDowner.prototype.start = function() {
    var $this = this;

    $(this.element).stopwatch({startTime: this.time, updateInterval: this.interval})
                    .stopwatch('start');
    $(this.element).stopwatch().bind('tick.stopwatch', function(event, millis){
        if (millis == 0) {
            $($this.element).stopwatch('stop');
            $this.callback();
        }
    });
}
