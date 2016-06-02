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
			document.getElementById("audio").paused();
		})
		$(".xiami .minapp").click(function() {
			$('.xiami').css({
				'display': 'none'
			});
		})
	}
	baidu();
	qq();
	taobao();
	xiami() ;
})