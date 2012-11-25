$(document).ready( function() {

	$(".avatar").click(function(){
		$(this).css('z-index', 0);
		$(this).fadeTo('400', 1);
		$(this).next(".bio").fadeTo('fast', 1);
		$(this).next(".bio").css('z-index', 1);
	});

	$(".bio").click(function(){
		$(this).fadeTo('400', 0, function(){
			$(this).css('z-index', 0);
			$(this).prev(".avatar").css('z-index', 1);
		});
	});


});