$(document).ready(function($) {

	// load controller

	var controller = new ScrollMagic.Controller();

	// onload timeline

	var pageLoad = new TimelineLite();
	pageLoad.from(".background-wrapper", .7, {opacity: 0})
	pageLoad.from(".left-side-intro", 0.5, {opacity: 0, x: -150})
	pageLoad.from(".promo", 0.5, {opacity: 0, x: 150},'-=.5')
	pageLoad.from(".logo p", 0.5, {opacity: 0, x: 350},'-=.3')
	pageLoad.from('.navbar', 0.3, {y: -200},'-=.7')

	// combined word sizing scene timeline

	var tl = new TimelineLite();
	tl.to('.word', 1, {scale: 8, x: 430, color: "#c9865c", opacity: .8})
	tl.to(".left-side-intro p", 0.5, {opacity: 0, textShadow:"5px 5px 10px #fff"}, '-=.7')
	tl.to(".promo", 0.3, {scale: 0, opacity: 0}, '-=1')
	tl.to(".logo p", 0.3, {color: "#c9865c"},'-=1')
	tl.to(".background-wrapper", 0.5, {opacity: 0},'-=1')

	// navbar scroll

	new ScrollMagic.Scene({
	  triggerElement: '.hero',
	  triggerHook: 0,
	  offset: 50
	})
	.setClassToggle('.navbar', 'active')
	.addTo(controller);

	// word sizing animation

	new ScrollMagic.Scene({
	  triggerElement: '.hero',
	  duration: "100%",
	  triggerHook: 0
	})
	.setPin(".left-side-intro")
	.setClassToggle('.background-wrapper', 'active')
	.setTween(tl)
	.on('end',function(e){
	  TweenLite.to(".word", .5 , {opacity: e.scrollDirection == "FORWARD" ? 0 : 1});
	})
	// .addIndicators()
	.addTo(controller);

	// section 2 reveal

	new ScrollMagic.Scene({
	  triggerElement: '.info',
	  duration: "20%",
	  triggerHook: .5,
	  offset: 100
	})
	.setTween(".info", {opacity: 1})
	.addTo(controller);

});
