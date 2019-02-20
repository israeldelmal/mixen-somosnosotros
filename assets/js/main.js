$('body > button').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('btn-active');
	$('body > nav').toggleClass('nav-active');
});

$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');

	$('body > nav').removeClass('nav-active');
	$('body > button').removeClass('btn-active');
	$('body, html').stop(true, true).animate({
		scrollTop: $(Item).offset().top
	}, 700);
});