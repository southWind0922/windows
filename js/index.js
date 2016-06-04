$(function() {
	function baidu() {
		$("#baidu").click(function() {
			$(".baidu").css({
				'display': 'block'
			});
			$("#Imgbaidu").css({
				'display': 'block'
			});
		})
		$(".baidu").children("iframe").load(function() {
			$(".baidu").children('img').css({
				'display': 'none'
			});
		});
		$("#Imgbaidu").click(function() {
			$('.baidu').toggle();
		})
		$(".baidu .closeapp").click(function() {
			$('.baidu').css({
				'display': 'none'
			});
			$("#Imgbaidu").css({
				'display': 'none'
			});
		})
		$(".baidu .minapp").click(function() {
			$('.baidu').css({
				'display': 'none'
			});
		})
	}
	function qq() {
		$("#qq").click(function() {
			$(".qq").css({
				'display': 'block'
			});
			$("#Imgqq").css({
				'display': 'block'
			});		
		})
		$("#Imgqq").click(function() {
			$('.qq').toggle();
		})
		
	}
	function taobao() {
		$("#taobao").click(function() {
			$(".taobao").css({
				'display': 'block'
			});
			$("#Imgtaobao").css({
				'display': 'block'
			});
		})
		$(".taobao").children("iframe").load(function() {
			$(".taobao").children('img').css({
				'display': 'none'
			});
		});
		
		$("#Imgtaobao").click(function() {
			$('.taobao').toggle();
		})
		$(".taobao .closeapp").click(function() {
			$('.taobao').css({
				'display': 'none'
			});
			$("#Imgtaobao").css({
				'display': 'none'
			});
		})
		$(".taobao .minapp").click(function() {
			$('.taobao').css({
				'display': 'none'
			});
		})
	}
	function xiami() {
		$("#xiami").click(function() {
			$(".xiami").css({
				'display': 'block'
			});
			$("#Imgxiami").css({
				'display': 'block'
			});
		})
		
		$("#Imgxiami").click(function() {
			$('.xiami').toggle();
		})
		$(".xiami .closeapp").click(function() {
			$('.xiami').css({
				'display': 'none'
			});
			$("#Imgxiami").css({
				'display': 'none'
			});
			var oIframe = document.getElementById('xiamiIframe').contentWindow;  
            var oAudio = oIframe.document.getElementById('audio');  
            oAudio.pause();
		})
		$(".xiami .minapp").click(function() {
			$('.xiami').css({
				'display': 'none'
			});
		})
	}
	function calc() {
		$("#calc").click(function() {
			$(".calc").css({
				'display': 'block'
			});
			$("#Imgcalc").css({
				'display': 'block'
			});
		})
		
		$("#Imgcalc").click(function() {
			$('.calc').toggle();
		})
		$(".calc .closeapp").click(function() {
			$('.calc').css({
				'display': 'none'
			});
			$("#Imgcalc").css({
				'display': 'none'
			});
		})
		$(".calc .minapp").click(function() {
			$('.calc').css({
				'display': 'none'
			});
		})
	}
	function winmine() {
		$("#winmine").click(function() {
			$(".winmine").css({
				'display': 'block'
			});
			$("#Imgwinmine").css({
				'display': 'block'
			});
		})
		
		$("#Imgwinmine").click(function() {
			$('.winmine').toggle();
		})
		$(".winmine .closeapp").click(function() {
			$('.winmine').css({
				'display': 'none'
			});
			$("#Imgwinmine").css({
				'display': 'none'
			});
		})
		$(".winmine .minapp").click(function() {
			$('.winmine').css({
				'display': 'none'
			});
		})
	}
	baidu();
	qq();
	taobao();
	xiami() ;
	calc();
	winmine();
})