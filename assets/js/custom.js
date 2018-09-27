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

var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

$(document).ready(function() {
  // jQuery methods go here...

  $('#title').one(animationEnd, function(){
    $('#title').removeClass("animated fadeInDown");
    $('#title').delay(100);
    $('#title').animate({
      opacity: 0.8
    }, 1750, function(){});
  });

  $('#description').one(animationEnd, function(){
    $('#description').removeClass("animated fadeIn delay-2");
    $('#description').delay(100);
    $('#description').animate({
      opacity: 0.8
    }, 1500, function(){});
  });

  $('#who-am-I-cta').on('click', function(event) {

    $('#title').animate({
      color: "white",
      opacity: 0.5
    }, 2000, function() {});

    $('#description').animate({
      'opacity': 0
    }, 1000, function() {
      $(this).text('who I am.');
    }).animate({
      'opacity': 0.9
    }, 1000);

    granimInstance.changeState('midnight-state');
  });
});
