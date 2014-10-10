
// Basic countdown timer
function CountDown() {
    this.start_time = PartsCtrl.activePart.timerDuration;
    this.target_id = "#timer";
    this.name = "timer";
}

CountDown.prototype.init = function() {
    this.reset();
    setInterval(this.name + '.tick()', 1000);
};

CountDown.prototype.reset = function() {
    time = this.start_time.split(":");
    this.minutes = parseInt(time[0]);
    this.seconds = parseInt(time[1]);
    this.update_target();
};

CountDown.prototype.tick = function() {
    if (this.seconds > 0 || this.minutes > 0) {
        if (this.seconds === 0) {
            this.minutes = this.minutes - 1;
            this.seconds = 59;
        }
        else {
            this.seconds = this.seconds - 1;
        }
    }
    this.update_target();
};

CountDown.prototype.update_target = function() {
    seconds = this.seconds;
    if (seconds < 10) seconds = "0" + seconds;
    $(this.target_id).val(this.minutes + ":" + seconds);
};
