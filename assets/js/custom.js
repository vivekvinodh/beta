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
        "what-I-like-state": {
            gradients: [
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
    window.onload = function () {

        // add loaded class to html
        var root = document.documentElement;
        root.className += ' loaded';
    }; // all loaded
}());

function getCurrentHeight(selector) {
 return $(selector).height();
}

var $contentMask = $('#desc-container');
var contentBoxId = '#desc-content';
var currentHeight = getCurrentHeight(contentBoxId);
$contentMask.css('height', currentHeight);

$(document).ready(function () {
    // jQuery methods go here...

    $('#title-text').on('click', function (event) {

        granimInstance.changeState('default-state');

        $('#title-text').animate({
            color: "black",
            opacity: 0.9
        }, 1250, function () {});

        $('#subtitle-text').animate({
            opacity: 0,
            color: "white"
        }, 600, function () {
            $(this).text('currently: exploring new opportunities');
        }).animate({
            opacity: 0.8
        }, 500);

        $('#who-I-am-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#link-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-do-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-like-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#portfolio-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#portfolio-text').animate({
            color: "black",
            opacity: 0.8
        }, 1250, function () {});

        $('#contactme-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#email-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#desc-content').animate({
            'opacity': 0
        }, 600, function () {
            $('#desc-content').empty();
            $('#desc-content').append('<div> <p>Hi, I\'m Vivek Vinodh. I\'m an engineer by trade, but I\'m also much more than that. Use the links to below to learn more. </p> </div>');
            currentHeight = getCurrentHeight(contentBoxId);
            $contentMask.css('height', currentHeight);
        }).animate({
            opacity: 1
        }, 500);

    });

    $('#who-I-am-btn').on('click', function (event) {

        granimInstance.changeState('who-I-am-state');

        $('#title-text').animate({
            color: "white",
            opacity: 0.9
        }, 1250, function () {});

        $('#subtitle-text').animate({
            opacity: 0,
            color: "black"
        }, 600, function () {
            $(this).text('a summary of my life to this point');
        }).animate({
            opacity: 0.8
        }, 500);

        $('#who-I-am-btn').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#link-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-do-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#what-I-like-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-text').animate({
            color: "black",
            opacity: 0.8
        }, 1250, function () {});

        $('#contactme-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#email-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#desc-content').animate({
            'opacity': 0
        }, 600, function () {
            $('#desc-content').empty();
            $('#desc-content').append('<div> <p> I spent many days agonizing over what to put here. Condensing one\'s life into a few concise paragraphs is no easy task. So I guess I\’ll just lay it out simply. I was born and raised in Los Angeles, the son of Indian immigrants. If I could summarize everything that they taught me, it would boil down to this. Nothing in life is ever handed to you. You have to earn it. </p> <p> I\'ve lived by that belief for the last 22 years. A few others too.</p> <ul> <li> Stand up for your principles </li> <li> Make a plan, and stick to it. (Improvise, adapt and overcome as <a class="link-2" href="https://www.google.com/search?q=improvise+adapt+overcome&oq=improvise+adapt+&aqs=chrome.2.0j69i57j35i39j0l3.5270j0j1&sourceid=chrome&ie=UTF-8" target="_blank">necessary</a>) </li> </ul> <p> I\’m fortunate to be surrounded by people who support me, as well as friends, educators, and mentors who push me to always strive and prosper. And that\’s good too because there\’s still a lot left I want to do. </p> </div>');
            currentHeight = getCurrentHeight(contentBoxId);
            $contentMask.css('height', currentHeight);
        }).animate({
            color: "white",
            opacity: 1
        }, 500);

    });

    $('#what-I-like-btn').on('click', function (event) {
        granimInstance.changeState('what-I-like-state');

        $('#title-text').animate({
            color: "black",
            opacity: 0.9
        }, 1250, function () {});

        $('#subtitle-text').animate({
            opacity: 0,
            color: "white"
        }, 600, function () {
            $(this).text('things I enjoy doing');
        }).animate({
            opacity: 0.8
        }, 500);

        $('#who-I-am-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#link-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-do-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#what-I-like-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#portfolio-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-text').animate({
            color: "white",
            opacity: 0.8
        }, 1250, function () {});

        $('#contactme-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#email-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#desc-content').animate({
            'opacity': 0
        }, 600, function () {
            $('#desc-content').empty();
            $('#desc-content').append('<div> <p> When I\'m not tackling a project, you can usually find me planted binge-watching the latest content on Netflix. If I\'m not there, I\'m probably out completing my list of the top 100 places to hit in LA. If I\'m not doing that, I\'m probably spending time with friends and family. Or sleeping. </p> <p> Also: bicycling, eating ramen, visiting museums.</p> <p> P.S. If you have any great recommendations for places in LA, please <a class="link-2" href="https://goo.gl/forms/atzzHPRDHDp8MKzQ2" target="_blank">let me know.</a> The list is always being updated.</p></div>');
            currentHeight = getCurrentHeight(contentBoxId);
            $contentMask.css('height', currentHeight);
        }).animate({
            color: "black",
            opacity: 1
        }, 500);
    });

    $('#what-I-do-btn').on('click', function (event) {
        granimInstance.changeState('what-I-do-state');

        $('#title-text').animate({
            color: "white",
            opacity: 0.9
        }, 1250, function () {});

        $('#subtitle-text').animate({
            opacity: 0,
            color: "black"
        }, 600, function () {
            $(this).text('what I work on');
        }).animate({
            opacity: 0.8
        }, 500);

        $('#who-I-am-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#link-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-do-btn').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-like-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-btn').animate({
            color: "white",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-text').animate({
            color: "black",
            opacity: 0.8
        }, 1250, function () {});

        $('#contactme-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#email-text').animate({
            color: "white",
            opacity: 1
        }, 1250, function () {});

        $('#desc-content').animate({
            'opacity': 0
        }, 600, function () {
            $('#desc-content').empty();
            $('#desc-content').append('<div> <p> While I\'m primarily focused on mobile application development at the moment, I have experience in other fields as well. I also have exposure to front-end web development, product and UI design, and machine learning with an emphasis on deep learning. </p> <p> I also thoroughly enjoy participating in hackathons. The atmosphere is conducive to rapidly learning new technologies and applying them to real world projects. Some of my most creative projects came out of hackathons. In fact, I love hackathons so much I helped found 2 of them. <a class="link-2" href="citrushack.com" target="_blank">Citrus Hack</a> and <a class="link-2" href="https://hackingedu.co" target="_blank">HackingEDU.</a></div>');
            currentHeight = getCurrentHeight(contentBoxId);
            $contentMask.css('height', currentHeight);
        }).animate({
            color: "white",
            opacity: 1
        }, 500);
    });

    $('#portfolio-btn').on('click', function (event) {
        granimInstance.changeState('portfolio-state');

        $('#title-text').animate({
            color: "black",
            opacity: 0.9
        }, 1250, function () {});

        $('#subtitle-text').animate({
            opacity: 0,
            color: "white"
        }, 600, function () {
            $(this).text('a sample of my work');
        }).animate({
            opacity: 0.8
        }, 500);

        $('#who-I-am-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#link-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#what-I-do-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#what-I-like-btn').animate({
            color: "black",
            opacity: 0.4
        }, 1250, function () {});

        $('#portfolio-btn').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#portfolio-text').animate({
            color: "white",
            opacity: 0.8
        }, 1250, function () {});

        $('#contactme-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#email-text').animate({
            color: "black",
            opacity: 1
        }, 1250, function () {});

        $('#desc-content').animate({
            'opacity': 0
        }, 600, function () {
            $('#desc-content').empty();
            $('#desc-content').append('<div> <p> Here I\'ve assembled a few links that display a few things I\'ve worked on and/or am proud of. I hope to improve this section of the website once I think of a thoughtful display method.</p> <ul> <li> <a class="link-2" href="https://devpost.com/software/teslapathic" target="_blank">Teslapathic</a> - A mind-controlled Tesla </li> <li> <a class="link-2" href="https://devpost.com/software/misfire" target="_blank">Misfire</a> - Fighting fire with fire on Tinder </li> <li> <a class="link-2" href="https://devpost.com/software/mobilize-democracy" target="_blank">Mobilize Democracy</a> - Easier access to democracy </li> <li> <a class="link-2" href="https://www.producthunt.com/tech/induction" target="_blank">Induction</a> - Enhanced interaction with your Tesla </li> <li> <a class="link-2" href="https://en.wikipedia.org/wiki/You_(Time_Person_of_the_Year)" target="_blank">2006 Time Person of the Year</a> - ????? </li> </ul> <p> For an exhaustive list of my work, please contact me. </p> </div>');
            currentHeight = getCurrentHeight(contentBoxId);
            $contentMask.css('height', currentHeight);
        }).animate({
            color: "black",
            opacity: 1
        }, 500);
    });

});
