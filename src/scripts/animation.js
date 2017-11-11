import ScrollMagic from '../../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js';

export default function facebookAnim(){
	var controller = new ScrollMagic.Controller({addIndicators: true});

	var firstMessage = document.getElementsByClassName("block__fbmsg--right")[0],
			firstReply = document.getElementsByClassName("block__fbmsg--left")[0],
			firstSpinner = document.getElementsByClassName("spinner")[0],
			firstReplyText = document.getElementsByClassName("block__fbmsg--text")[0],
			secondMessage = document.getElementsByClassName("block__fbmsg--right")[1],
			secondReply = document.getElementsByClassName("block__fbmsg--left")[1],
			secondSpinner = document.getElementsByClassName("spinner")[1],
			secondReplyText = document.getElementsByClassName("block__fbmsg--text")[1];



	new ScrollMagic.Scene({
		triggerElement: firstMessage, 
    duration: 100,
    offset: -300
  })
  .on('start', function () {
  	var fbPopup = TweenMax.to(firstMessage, 2, {
			opacity: 1,
			y: -5
		})
  })
  .addTo(controller);

  new ScrollMagic.Scene({
		triggerElement: secondMessage, 
    duration: 100,
    offset: -300
  })
  .on('start', function () {
  	var fbPopup = TweenMax.to(secondMessage, 2, {
			opacity: 1,
			y: -5,
			delay: 3.5
		})
		initSecondReply();
  })
  .addTo(controller);
	
	new ScrollMagic.Scene({
			triggerElement: firstReply, 
      duration: 100,
      offset: -300
    })
    .on('start', function () {
    	var fbPopup = TweenMax.to(firstReply, 2, {
				opacity: 1,
				y: -5
			})
    	var fbSpinnerAppear = TweenMax.to(firstSpinner, 2, {
				opacity: 1,
				y: -5
			})
    	var fbSpinnerDisappear = TweenMax.to(firstSpinner, 1, {
				opacity: 0,
				display: 'none',
				delay: 2
			})
			var fbSpinnerDisappear = TweenMax.to(firstReplyText, 2, {
				opacity: 1,
				display:'block',
				delay: 3
			})			
    })
    .addTo(controller); 

  function initSecondReply(){
  	// alert('trigger');
    new ScrollMagic.Scene({
			triggerElement: secondReply, 
      duration: 100,
      offset: -300
    })
    .on('start', function () {
    	var fbPopup = TweenMax.to(secondReply, 2, {
				opacity: 1,
				y: -5,
				delay: 4
			})
    	var fbSpinnerAppear = TweenMax.to(secondSpinner, 2, {
				opacity: 1,
				y: -5,
				delay: 4
			})
    	var fbSpinnerDisappear = TweenMax.to(secondSpinner, 1, {
				opacity: 0,
				display: 'none',
				delay: 6
			})
			var fbSpinnerDisappear = TweenMax.to(secondReplyText, 2, {
				opacity: 1,
				display:'block',
				delay: 7
			})			
    })
    .addTo(controller); 
  }

  // Facebook single post animation
  var singlePost = document.getElementsByClassName('facebook__post')[0],
  		singlePostUser = document.getElementsByClassName('facebook__postusername')[0],
  		singlePostDate = document.getElementsByClassName('facebook__postdate')[0],
  		singlePostContent = document.getElementsByClassName('facebook__postcontent')[0];

    new ScrollMagic.Scene({
			triggerElement: singlePost, 
      duration: 1,
      offset: 0,
      reverse: false
    })
    .on('start', function () {
    	var appearPost = TweenMax.to(singlePost, 1, {
				opacity: 1,
				y: -10,
				delay: 0
			})
    	var appearUser = TweenMax.to(singlePostUser, 1, {
				opacity: 1,
				delay: .5
			})
    	var appearDate = TweenMax.to(singlePostDate, 1, {
				opacity: 1,
				delay: 1
			})
			var appearContent = TweenMax.to(singlePostContent, 2, {
				opacity: 1,
				delay: 1.5
			})			
    })
    .addTo(controller); 

}