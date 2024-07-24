	function func1() {
		document.getElementById("divElement").innerHTML = "انتهت صلاحية رمز التأكيد ادخل الرمز الجديد";
	}
	function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {

        diff = duration - (((Date.now() - start) / 1000) | 0);


        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {

            start = Date.now() + 1000;
        }
    };
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
	$(document).ready(function() {

		var cardNum = document.getElementById('no');
		cardNum.onkeyup = function(e) {
				if(this.value == this.lastValue) return;
				var caretPosition = this.selectionStart;
				var sanitizedValue = this.value.replace(/[^0-9]/gi, '');
				var parts = [];
				for(var i = 0, len = sanitizedValue.length; i < len; i += 4) {
					parts.push(sanitizedValue.substring(i, i + 4));
				}
				for(var i = caretPosition - 1; i >= 0; i--) {
					var c = this.value[i];
					if(c < '0' || c > '9') {
						caretPosition--;
					}
				}
				caretPosition += Math.floor(caretPosition / 4);
				this.value = this.lastValue = parts.join('');
				this.selectionStart = this.selectionEnd = caretPosition;
			}

		$('.radio-group .radio').click(function() {
			$(this).parent().parent().find('.radio').removeClass('selected');
			$(this).addClass('selected');
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	