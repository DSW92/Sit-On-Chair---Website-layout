document.addEventListener('DOMContentLoaded', function() {

  var hamburgerMenu = document.querySelector('.hamburger');
  var mainMenu = document.querySelector('.menu');
	var mobileViewport = window.matchMedia("screen and (max-width: 992px)");
	var desktopViewport = window.matchMedia("(min-width: 993px)");

  hamburgerMenu.addEventListener('mouseover', function() {
		if (mobileViewport.matches) {
			mainMenu.style.display = 'flex';
		}
  });
  hamburgerMenu.addEventListener('mouseout', function() {
		if (mobileViewport.matches) {
			mainMenu.style.display = 'none';
		}
  });
	
	var fotoLabel = document.querySelectorAll('.foto_label_with_line');
	var sectionFoto = document.querySelectorAll('.foto');
	
	for (var i = 0; i < sectionFoto.length; i++) {
	
		sectionFoto[0].addEventListener('mouseover', function() {
			for (var i = 0; i < fotoLabel.length; i++) {
				fotoLabel[0].style.visibility = 'hidden';
			}
		});

		sectionFoto[1].addEventListener('mouseover', function() {
			for (var i = 0; i < fotoLabel.length; i++) {
				fotoLabel[1].style.visibility = 'hidden';
			}
		});
	}
	
	for (var i = 0; i < sectionFoto.length; i++) {
		sectionFoto[0].addEventListener('mouseout', function() {
			for (var i = 0; i < fotoLabel.length; i++) {
				fotoLabel[0].style.visibility = 'visible';
			}
		});
		sectionFoto[1].addEventListener('mouseout', function() {
			for (var i = 0; i < fotoLabel.length; i++) {
				fotoLabel[1].style.visibility = 'visible';
			}
		});
	}
	
	var arrowRight = document.querySelector('.arrow_right a');
	var arrowLeft = document.querySelector('.arrow_left a');
	var photos = document.querySelectorAll('.main_foto img');
	var currIndex = 0;
	
	photos[currIndex].classList.add('visible');
	
	arrowLeft.addEventListener('click', function(change) {
		change.preventDefault();

		photos[currIndex].classList.remove('visible');
		currIndex += 1;
		
		if (photos.length === currIndex) {
			currIndex = 0;
		}
		photos[currIndex].classList.add('visible');
	});
	
	arrowRight.addEventListener('click', function(change) {
    change.preventDefault();

		photos[currIndex].classList.remove('visible');
		currIndex -= 1;
		
		if (currIndex < 0) {
			currIndex = photos.length -1;
		}
		photos[currIndex].classList.add('visible');
	});

});
