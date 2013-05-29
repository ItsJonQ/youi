$(document).ready(function(){
	var wh = $(window).height();
	var scrb = $('#scrollbar1');
	scrb.css('height',wh-60);
	scrb.tinyscrollbar();

	scrb.mouseenter(function(){
		$(this).find($('.scrollbar')).fadeIn('fast');
	});
	scrb.mouseleave(function(){
		$(this).find($('.scrollbar')).fadeOut('fast');
	});

	$(window).load(function() {
		var ot = scrb.offset().top;
		$(window).scroll(function(){
			if(ot < $(window).scrollTop()) {
				scrb.css({position: 'fixed', top: '0px'});
			} else {
				scrb.css({position: 'static', top: '0px'});
			}
		});
	});
});