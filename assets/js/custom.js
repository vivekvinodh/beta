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
    "midnight-state": {
      gradients: [
        ['#09203f', '#537895'],
        ['1e3c72', '#2a5298']
      ],
      transitionSpeed: 5000
    }
  }
});

$(document).ready(function() {

  // jQuery methods go here...
  $('#who-am-I-cta').on('click', function(event) {

    $('#title').animate({
      color: "white",
      opacity: 0.9
    }, 2000, function() {

    });

    $('#description').animate({
      'opacity': 0
    }, 5000, function() {
      $(this).text('world');
    }).animate({
      'opacity': 1
    }, 5000);

    $('#what-I-like-cta').removeClass("animated fadeInUp delay-5").addClass("animated fadeOut");
    $('#what-I-do-cta').removeClass("animated fadeInUp delay-4").addClass("animated fadeOut");
    $('#portfolio-cta').removeClass("animated fadeInUp delay-6").addClass("animated fadeOut");
    $('#contact-me-cta').removeClass("animated fadeInUp delay-7").addClass("animated fadeOut");

    granimInstance.changeState('midnight-state');
  });
});
