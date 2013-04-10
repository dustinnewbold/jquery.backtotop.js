;(function($) {
	$('#backtotop').on('click', function(e) {
		e.preventDefault();

		$('html,body').animate({
			scrollTop: 0
		},{
			duration: 700,
			specialEasing: {
				width: 'linear',
				height: 'easeOutBounce'
			}
		});
	});
})(jQuery);