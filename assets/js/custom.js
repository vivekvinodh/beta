var granimInstance = new Granim({
  element: '#canvas-basic',
  name: 'basic-gradient',
  direction: 'diagonal',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#93a5cf', '#e4efe9'],
        ['#f3e7e9', '#e3eeff']
      ],
      transitionSpeed: 5000
    },
    "who-I-am-state": {
      gradients: [
        ['#09203f', '#537895'],
        ['#1e3c72', '#2a5298']
      ],
      transitionSpeed: 5000
    },
    "what-I-like-state":{
      gradients:[
        ['#a8edea', '#fed6e3'],
        ['#e0c3fc', '#8ec5fc']
      ]
    },
    "what-I-do-state": {
      gradients: [
        ['#434343', '#000000'],
        ['#29323c', '#485563']
      ],
      transitionSpeed: 5000
    },
    "portfolio-state": {
      gradients: [
        ['#a7a6cb', '#8989ba'],
        ['#bdc2e8', '#e6dee9']
      ],
      transitionSpeed: 5000
    }
  }
});

(function () {
   'use strict';

	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {

		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';
	}; // all loaded
}());

$(document).ready(function() {
  // jQuery methods go here...

  $('#title-text').on('click', function(event){

    granimInstance.changeState('default-state');

    $('#title-text').animate({
      color: "black",
      opacity: 0.9
    }, 1250, function() {});

    $('#subtitle-text').animate({
      color: "white",
      opacity: 0.8
    }, 1250, function() {});

    $('#who-I-am-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#link-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-do-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-like-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#portfolio-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#portfolio-text').animate({
      color: "black",
      opacity: 0.8
    }, 1250, function() {});

    $('#contactme-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#email-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#description-text').animate({
      'opacity': 0
    }, 600, function() {
      $(this).text('Hi, I\'m Vivek Vinodh. I\'m an engineer by trade, but I\'m much more than that. Use the links to below to learn more.');
    }).animate({
      color: "black",
      opacity: 1
    }, 500);

  });

  $('#who-I-am-btn').on('click', function(event) {

    granimInstance.changeState('who-I-am-state');

    $('#title-text').animate({
      color: "white",
      opacity: 0.9
    }, 1250, function() {});

    $('#subtitle-text').animate({
      color: "black",
      opacity: 0.8
    }, 1250, function() {});

    $('#who-I-am-btn').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#link-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-do-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#what-I-like-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-text').animate({
      color: "black",
      opacity: 0.8
    }, 1250, function() {});

    $('#contactme-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#email-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#description-text').animate({
      'opacity': 0
    }, 600, function() {
      $(this).text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    }).animate({
      color: "white",
      opacity: 1
    }, 500);

  });

  $('#what-I-like-btn').on('click', function(event) {
    granimInstance.changeState('what-I-like-state');

    $('#title-text').animate({
      color: "black",
      opacity: 0.9
    }, 1250, function() {});

    $('#subtitle-text').animate({
      color: "white",
      opacity: 0.8
    }, 1250, function() {});

    $('#who-I-am-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#link-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-do-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#what-I-like-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#portfolio-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-text').animate({
      color: "white",
      opacity: 0.8
    }, 1250, function() {});

    $('#contactme-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#email-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#description-text').animate({
      'opacity': 0
    }, 600, function() {
      $(this).text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    }).animate({
      color: "black",
      opacity: 1
    }, 500);
  });

  $('#what-I-do-btn').on('click', function(event) {
    granimInstance.changeState('what-I-do-state');

    $('#title-text').animate({
      color: "white",
      opacity: 0.9
    }, 1250, function() {});

    $('#subtitle-text').animate({
      color: "black",
      opacity: 0.8
    }, 1250, function() {});

    $('#who-I-am-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#link-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-do-btn').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-like-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-btn').animate({
      color: "white",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-text').animate({
      color: "black",
      opacity: 0.8
    }, 1250, function() {});

    $('#contactme-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#email-text').animate({
      color: "white",
      opacity: 1
    }, 1250, function() {});

    $('#description-text').animate({
      'opacity': 0
    }, 600, function() {
      $(this).text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    }).animate({
      color: "white",
      opacity: 1
    }, 500);
  });

  $('#portfolio-btn').on('click', function(event) {
    granimInstance.changeState('portfolio-state');

    $('#title-text').animate({
      color: "black",
      opacity: 0.9
    }, 1250, function() {});

    $('#subtitle-text').animate({
      color: "white",
      opacity: 0.8
    }, 1250, function() {});

    $('#who-I-am-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#link-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#what-I-do-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#what-I-like-btn').animate({
      color: "black",
      opacity: 0.4
    }, 1250, function() {});

    $('#portfolio-btn').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#portfolio-text').animate({
      color: "white",
      opacity: 0.8
    }, 1250, function() {});

    $('#contactme-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#email-text').animate({
      color: "black",
      opacity: 1
    }, 1250, function() {});

    $('#description-text').animate({
      'opacity': 0
    }, 600, function() {
      $(this).text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
    }).animate({
      color: "black",
      opacity: 1
    }, 500);
  });

});
