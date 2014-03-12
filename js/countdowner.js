function CountDowner(options) {
    this.element = options.element || "";
    this.time = options.time || 3600;
}
CountDowner.prototype.start = function() {
    $(this.element).stopwatch({updateInterval: 50}).stopwatch('start');
}
