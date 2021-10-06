$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let nav = $("#nav");
	let navToggle = $("#navToggle");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		let introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});


	function checkScroll(scrollPos, introH){
		if ( scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	
	$("[data-scroll]").on("click", function(event) {
			event.preventDefault();

			let elementID = $(this).data("scroll");
			let elementOffset = $(elementID).offset().top;

			nav.removeClass("show");

			$("html, body").animate({
				scrollTop: elementOffset - 55
			}, 700);
		});


	/*Nav Toggle*/

	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		nav.toggleClass("show");
		$("#header").toggleClass("colored");
	});


	// scrollbar
	$(".reviews").niceScroll({
		cursorcolor: "#e84545",
		cursoropacitymin: 1,
		cursorwidth: "6px"
	});


});
