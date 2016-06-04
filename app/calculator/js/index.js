$(function() {
	var oView = '',
		oEquation = '';
	$('#num1').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '1';
			$('.view span').html(oView);
			oEquation += '1';
		}
	})
	$('#num2').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '2';
			$('.view span').html(oView);
			oEquation += '2';
		}
	})
	$('#num3').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '3';
			$('.view span').html(oView);
			oEquation += '3';
		}
	})
	$('#num4').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '4';
			$('.view span').html(oView);
			oEquation += '4';
		}
	})
	$('#num5').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '5';
			$('.view span').html(oView);
			oEquation += '5';
		}
	})
	$('#num6').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '6';
			$('.view span').html(oView);
			oEquation += '6';
		}
	})
	$('#num7').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '7';
			$('.view span').html(oView);
			oEquation += '7';
		}
	})
	$('#num8').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '8';
			$('.view span').html(oView);
			oEquation += '8';
		}
	})
	$('#num9').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '9';
			$('.view span').html(oView);
			oEquation += '9';
		}
	})
	$('#num0').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '0';
			$('.view span').html(oView);
			oEquation += '0';
		}
	})
	$('#dot').click(function() {
		if (oView.length == 10) {
			return false
		} else {
			oView += '.';
			$('.view span').html(oView);
			oEquation += '.';
		}
	})
	$('#plus').click(function() {
		oView = '';
		$('.view span').html('+');
		oEquation += '+';
	})
	$('#minus').click(function() {
		oView = '';
		$('.view span').html('-');
		oEquation += '-';
	})
	$('#multiplication').click(function() {
		oView = '';
		$('.view span').html('×');
		oEquation += '*';
	})
	$('#division').click(function() {
		oView = '';
		$('.view span').html('÷');
		oEquation += '/';
	})
	$('#equal').click(function() {
		oView = eval(oEquation);
		if (oView.toString().length > 10) {
			$('.view span').html('ERROR');
			oEquation = '';
			oView = '';
		} else {
			$('.view span').html(oView);
			oEquation = '';
			oView = '';
		}
	})
	$('#clear').click(function() {
		$('.view span').html('0');
		oView = '';
		oEquation = '';
	})
})