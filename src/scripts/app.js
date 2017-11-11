/* Hooray */
require('../styles/style.scss')

import TimelineMax from '../../node_modules/gsap/TimelineMax.js';
import TweenMax from '../../node_modules/gsap/TweenMax.js';
import Typed from '../../node_modules/typed.js/lib/typed.js';
import PIXI from '../../node_modules/pixi.js/dist/pixi.js';
import ScrollMagic from '../../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js';
import ScrollMagicdebug from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';
// import ScrollMagicGSAP from '../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

import header from './headerimage';

header();



var options = {
  strings: ["De zoektocht naar het witte goud"],
  typeSpeed: 40,
  showCursor: true
}

setTimeout(function() { 
	var typed = new Typed(".intro__heading", options);

}, 5500);




var firstBlock = document.getElementsByClassName("block__fbmsg--right")[0];

// init controller
// var controller = new ScrollMagic.Controller({addIndicators: true});


import trigger from './animation';
trigger();

// create a scene
// new ScrollMagic.Scene({
// 			triggerElement: firstBlock, 
//       duration: 100,    // the scene should last for a scroll distance of 100px
//       offset: -300        // start this scene after scrolling for 50px
//     })
//     .on('start', function () {
//     		trigger();
//     })
//     .addTo(controller); // assign the scene to the controller


