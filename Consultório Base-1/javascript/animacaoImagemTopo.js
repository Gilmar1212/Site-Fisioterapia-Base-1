$("nav a").click(function(e){
	e.PreventDefault;
	var id =$(this).attr('href');
	targetOffset=$(id).offset().top;
	$('html,body').animate({
		scrollTop:targetOffset-220
	},500);
});