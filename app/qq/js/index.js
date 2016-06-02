$(function() {
function CloseAndMin(){
	$("#headbuttonclose").click(function() {
		$('.qq', window.parent.document).css({'display':'none'})
		$('#Imgqq', window.parent.document).css({'display': 'none'});
	})

	$("#headbuttonmin").click(function() {
		$('.qq', window.parent.document).css({'display':'none'})
	})
}	
function maincontent(){
	$(".navicon").hover(
		function() {
			var colorvalue = $(this).css('background-color');
			var isgrey = colorvalue=='rgb(194, 207, 214)';
		    if(isgrey){
		    	 $(this).css({'background-color':'#81BDE6'})
		    	 $(".navicon").click(function() {
		    	 	var iconindex = $(this).index();
		    	 	var move = -iconindex * 280 + 'px'
		            $(this).css({'background-color':'#3A92D8'});
		            $('.navicon').not(this).css({'background-color':'#C2CFD6'});
		            $('.contentmaincontainer').stop().animate({'left':move},100);
	             })
		    }
		   
	    },
		function() {
		    var colorvalue = $(this).css('background-color');
			var isblue = colorvalue=='rgb(58, 146, 216)';
		    if(!isblue){
		    	 $(this).css({'background-color':'#C2CFD6'})
		    }
	    }
	)
}
CloseAndMin();
maincontent();
})
