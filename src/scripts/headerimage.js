import ScrollMagic from '../../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js';

export default function header() {

	// INTRO TEXT MOET ERGENS ANDERS HEEN
	var introCredits = document.getElementsByClassName('intro__credits')[0];
	var introText = document.getElementsByClassName('intro__lead')[0];

	var tween = TweenMax.from(introCredits, 2, {
		opacity: 0,
		delay: 7
	})

	var tween = TweenMax.from(introText, 2, {
		opacity: 0,
		delay: 7
	})

	// CHAPTER IMAGE SCENE 1
	var app = new PIXI.Application(window.innerWidth-55, window.innerHeight, {backgroundColor : 0xffffff, antiAlias: true});

	var controller = new ScrollMagic.Controller({addIndicators: true});
	var imgContainer = document.getElementsByClassName('imagecontainer')[0];
	var scaleSize = .58;
	imgContainer.appendChild(app.view);

	var background = new PIXI.Sprite.fromImage('../images/background_anna.jpg');
	background.x = 0;
	background.y = 0;
	background.scale.x = scaleSize;
	background.scale.y = scaleSize;
	app.stage.addChild(background);

	var overlay = new PIXI.Sprite.fromImage('../images/weerspiegeling_anna.png');
	overlay.x = 0;
	overlay.y = 0;
	overlay.scale.x = scaleSize;
	overlay.scale.y = scaleSize;
	overlay.alpha = 1;
	app.stage.addChild(overlay);	

	var hand = new PIXI.Sprite.fromImage('../images/anna.png');
	hand.x = 0;
	hand.y = 0;
	hand.scale.x = scaleSize;
	hand.scale.y = scaleSize;
	app.stage.addChild(hand);

	var chapterImage = document.getElementsByClassName("imagecontainer")[0]; 
		new ScrollMagic.Scene({
		triggerElement: chapterImage, 
	  duration: 2,
	  offset: 0,
	  reverse: false
	})
	.on('start', function () {
		var number = TweenMax.from(document.getElementsByClassName("chapter__number")[0], 3, {
			y: 10,
			opacity: 0,
		 	ease: Power1.easeInOut,
			delay: 1
		});

		var chapterText = TweenMax.from(document.getElementsByClassName("chapter__text")[0], 3, {
			y: 10,
			opacity: 0,
		 	ease: Power1.easeInOut,
			delay: 1.5
		});


		var tweenHand = TweenMax.from(hand, 5, {
		 x: -13,
		 ease: Power1.easeInOut
		});

		var tweenOverlay = TweenMax.from(overlay, 5, {
			x: 7,
		 ease: Power1.easeInOut
		});

	})
	.addTo(controller);

	// CHAPTER IMAGE SCENE 2
	var scene_three = new PIXI.Application(window.innerWidth-55, window.innerHeight, {backgroundColor : 0xffffff, antiAlias: true});

	var scene_three_container = document.getElementsByClassName('scene_3')[0];
	scene_three_container.appendChild(scene_three.view);

	var scene_three_bg = new PIXI.Sprite.fromImage('../images/background_anna.jpg');
	scene_three_bg.x = 0;
	scene_three_bg.y = 0;
	scene_three_bg.scale.x = scaleSize;
	scene_three_bg.scale.y = scaleSize;
	scene_three.stage.addChild(scene_three_bg);

	// var overlay = new PIXI.Sprite.fromImage('../images/weerspiegeling_anna.png');
	// overlay.x = 0;
	// overlay.y = 0;
	// overlay.scale.x = scaleSize;
	// overlay.scale.y = scaleSize;
	// overlay.alpha = 1;
	// scene_three.stage.addChild(overlay);	

	// var hand = new PIXI.Sprite.fromImage('../images/anna.png');
	// hand.x = 0;
	// hand.y = 0;
	// hand.scale.x = scaleSize;
	// hand.scale.y = scaleSize;
	// scene_three.stage.addChild(hand);

	var scene_two_image = document.getElementsByClassName("imagecontainer")[1]; 
		new ScrollMagic.Scene({
		triggerElement: scene_two_image, 
	  duration: 2,
	  offset: 0,
	  reverse: false
	})
	.on('start', function () {
		// var number = TweenMax.from(document.getElementsByClassName("chapter__number")[0], 3, {
		// 	y: 10,
		// 	opacity: 0,
		//  	ease: Power1.easeInOut,
		// 	delay: 1
		// });

		// var chapterText = TweenMax.from(document.getElementsByClassName("chapter__text")[0], 3, {
		// 	y: 10,
		// 	opacity: 0,
		//  	ease: Power1.easeInOut,
		// 	delay: 1.5
		// });


		// var tweenHand = TweenMax.from(hand, 5, {
		//  x: -13,
		//  ease: Power1.easeInOut
		// });

		// var tweenOverlay = TweenMax.from(overlay, 5, {
		// 	x: 7,
		//  ease: Power1.easeInOut
		// });

	})
	.addTo(controller);


}
