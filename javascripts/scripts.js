//If you like this and wish to use it please give credit where it is due! -Kaigth :)

//Variables
var $_window = $( window ),
    $scanbar = $( ".scanbar" ),

    //Navigation
    $navigationEach = $( ".navigation li a" ),

    _app = {};

//------//

_app.navIn = function () {
  var timeout,
      $count = $navigationEach.length + 1,
      rollIn = function () {

  if ( $count === 0 ) {

    return false;
  }

  $count--;

  $navigationEach.eq( $count ).removeClass( "out" );

  timeout = setTimeout(function () {
    clearTimeout();

    rollIn();

  }, 100 );

  };

  rollIn();

};

//enter effect
$_window.on( "load", function () {
  var timeout;

  $scanbar.addClass( "in" );

  timeout = setTimeout(function () {
    clearTimeout();

    $scanbar.addClass( "move" );

  }, 300 );

  timeout = setTimeout(function () {
    clearTimeout();

    _app.navIn();

  }, 500 );

  timeout = setTimeout(function () {
    clearTimeout();

    $scanbar.removeClass( "in" ).addClass( "out" );

  }, 1000 );

});
