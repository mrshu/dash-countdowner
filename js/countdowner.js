function CountDowner(options) {
    this.element = options.element || "";
    this.time = options.time || 3600 * 1000;
    this.interval = options.interval || -50;
}
CountDowner.prototype.start = function() {
    $(this.element).stopwatch({startTime: this.time, updateInterval: this.interval})
                    .stopwatch('start');
}
