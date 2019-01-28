$('body > button').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('btn-active');
	$('body > nav').toggleClass('nav-active');
});