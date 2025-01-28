/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center'
	});

	// Nav.
	

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Gallery.
	$('.gallery')
		.on('click', 'a', function (event) {

			var $a = $(this),
				$gallery = $a.parents('.gallery'),
				$modal = $gallery.children('.modal'),
				$modalImg = $modal.find('img'),
				href = $a.attr('href');

			// Not an image? Bail.
			if (!href.match(/\.(jpg|gif|png|mp4)$/))
				return;

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Lock.
			$modal[0]._locked = true;

			// Set src.
			$modalImg.attr('src', href);

			// Set visible.
			$modal.addClass('visible');

			// Focus.
			$modal.focus();

			// Delay.
			setTimeout(function () {

				// Unlock.
				$modal[0]._locked = false;

			}, 600);

		})
		.on('click', '.modal', function (event) {

			var $modal = $(this),
				$modalImg = $modal.find('img');

			// Locked? Bail.
			if ($modal[0]._locked)
				return;

			// Already hidden? Bail.
			if (!$modal.hasClass('visible'))
				return;

			// Stop propagation.
			event.stopPropagation();

			// Lock.
			$modal[0]._locked = true;

			// Clear visible, loaded.
			$modal
				.removeClass('loaded')

			// Delay.
			setTimeout(function () {

				$modal
					.removeClass('visible')

				
				setTimeout(function () {

					// Clear src.
					$modalImg.attr('src', '');

					// Unlock.
					$modal[0]._locked = false;

					// Focus.
					$body.focus();

				}, 475);

			}, 125);

		})
		.on('keypress', '.modal', function (event) {

			var $modal = $(this);

			// Escape? Hide modal.
			if (event.keyCode == 27)
				$modal.trigger('click');

		})
		.on('mouseup mousedown mousemove', '.modal', function (event) {

			// Stop propagation.
			event.stopPropagation();

		})
		.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
		.find('img')
		.on('load', function (event) {

			var $modalImg = $(this),
				$modal = $modalImg.parents('.modal');

			setTimeout(function () {

				// No longer visible? Bail.
				if (!$modal.hasClass('visible'))
					return;

				// Set loaded.
				$modal.addClass('loaded');

			}, 275);

		});
		
	// BACK TO TOP BUTTON
	// Get the button:
	let mybutton = document.getElementById("scrollToTopBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.style.display = "block";
		} else {
			mybutton.style.display = "none";
		}
	}


	// POP UP FOR PAPER-PLANE CLICK
	// Select elements
	const toggleFormIcon = document.getElementById('toggle-form');
	const contactModal = document.getElementById('contact-modal');
	const closeModalButton = document.querySelector('.close-button');

	// Show the modal
	toggleFormIcon.addEventListener('click', () => {
		toggleFormIcon.classList.add('flying');
		
		setTimeout(() => {
			contactModal.classList.add('show');
			document.body.style.overflow = 'hidden'; 
			mybutton.style.display = "none";
			toggleFormIcon.classList.remove('flying');
		}, 1000);
	});

	// Hide the modal
	closeModalButton.addEventListener('click', () => {
		contactModal.classList.remove('show');
		document.body.style.overflow = ''; 
		mybutton.style.display = "block";
	});

	// Close the modal when clicking outside the modal content
	window.addEventListener('click', (e) => {
		if (e.target === contactModal) {
			contactModal.classList.remove('show');
			document.body.style.overflow = ''; 
			mybutton.style.display = "block";
		}
	});

	// BANNER
	
		

})(jQuery);