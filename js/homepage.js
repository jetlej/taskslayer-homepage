$(function(){

	anime.timeline({loop: false})
	.add({
		targets: '.hero h1',
		translateY: [-20,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1000,
		delay: 200
	})
	.add({
		targets: '.hero h2',
		translateY: [-20,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1000
	}, '-=200')
	.add({
		targets: '.app-window',
		width: [300, 800],
		height: [50, 500],
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 750
	}, '-=600')
	.add({
		targets: '.app-window .list',
		translateY: [-20,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 1000
	}, '-=400')
	.add({
		targets: '.header',
		translateY: [-20,0],
		translateZ: 0,
		opacity: [0,1],
		easing: "easeOutExpo",
		duration: 400
	}, '-=1000')

	function addTasks () {
		let tasks = [
			'Learn about Slash',
			'Answer emails for 30 minutes',
			'Buy flight to Portgual'
		]

		let timer = 3000
		let val = ''

		tasks.forEach(function(task){

			timer += 500

			var string = task.split('')

			string.forEach(function(letter) {
				let max = 120
				let min = 30
				let rand = Math.floor(Math.random() * (max - min + 1)) + min
				timer += rand
				val += letter
				var setValue = val
				setTimeout(function(){
					$('.app-window .list input').val(setValue) 
				}, timer)
			})

			val = ''
			timer += 150

			setTimeout(function(){
				$('.app-window .list input').val('') 
				$('.app-window .tasks').append('<div>' + task + '</div>')
			}, timer)

		})
	}

	addTasks()

	var controller = new ScrollMagic.Controller();

	var focusMode1 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', duration: 1000})
	.setTween(TweenMax.to(".app-window", 1, {width: 350, height: 50, bottom: '60px', borderRadius: '7px', ease: "power2.inOut"}))
	.addTo(controller)

	var focusMode2 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', duration: 375})
	.setTween(TweenMax.to(".app-window .list", 1, {opacity: 0,display: 'none', ease: "expo.out"}))
	.addTo(controller)

	var focusMode3 = new ScrollMagic.Scene({triggerElement: ".hero", triggerHook: 'onLeave', offset: 750, duration: 350})
	.setTween(TweenMax.from(".app-window .focus", 1, {opacity: 0, ease: "power1.inOut"}))
	.addTo(controller)

	var bgShow = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 500})
	.setTween(TweenMax.from(".sub-hero .bg", 1, {opacity: 0}))
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 3000})
	.setPin(".sub-hero", {pushFollowers: true})
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 500, offset: 500})
	.setTween(TweenMax.from(".sub-hero h2 p:first-child", 1, {opacity: 0}))
	.on('leave', startTimer)
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".sub-hero", triggerHook: 'onLeave', duration: 500, offset: 1500})
	.setTween(TweenMax.from(".sub-hero h2 p:last-child", 1, {opacity: 0}))
	.on('leave', startTimer)
	.addTo(controller)

	var subHeroPin = new ScrollMagic.Scene({triggerElement: ".flow", triggerHook: 'onEnter', duration: 500, offset: -500})
	.setTween(TweenMax.to(".sub-hero h2", 1, {opacity: 0}))
	.addTo(controller)

	var step1 = new ScrollMagic.Scene({triggerElement: ".flow", triggerHook: 'onEnter', duration: 500, offset: -500})
	.setTween(TweenMax.to(".sub-hero .bg", 1, {opacity: 0}))
	.addTo(controller)

	var step1 = new ScrollMagic.Scene({triggerElement: ".flow", triggerHook: 'onEnter', duration: 1000})
	.setTween(TweenMax.to(".app-window", 1, {width: 800, height: 500, bottom: '5%', borderRadius: '12px', ease: "power2.inOut"}))
	.addTo(controller)

	var step1a = new ScrollMagic.Scene({triggerElement: ".flow", triggerHook: 'onEnter', duration: 500})
	.setTween(TweenMax.to(".app-window .focus", 1, {opacity: 0}))
	.addTo(controller)

	var step1a = new ScrollMagic.Scene({triggerElement: ".flow", triggerHook: 'onEnter', duration: 500, offset: 500})
	.setTween(TweenMax.to(".app-window .step1", 1, {opacity: 1}))
	.addTo(controller)

	$('.flow > div').each(function(i){

		let step = this
		let name = $(this).data('step')

		var subHeroPin = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onLeave', duration: 2000})
		.setPin(step, {pushFollowers: true})
		.addTo(controller)

		var textFadeIn = new ScrollMagic.Scene({triggerElement: step , triggerHook: 'onLeave', duration: 500, offset: 0})
		.setTween(TweenMax.fromTo(step, 1, {y: 20, opacity: 0}, {y: 0, opacity: 1}))
		.addTo(controller)

		var textFadeOut = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onLeave',  duration: 500, offset: 1500})
		.setTween(TweenMax.to(step, 1, {y: -20, opacity: 0}))
		.addTo(controller)

		if (name === 'focus') {
			var focusMode1 = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onLeave', duration: 1000})
			.setTween(TweenMax.to(".app-window", 1, {width: 350, height: 50, bottom: '30px', borderRadius: '7px', ease: "power2.inOut"}))
			.addTo(controller)

			var focusMode2 = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onLeave', duration: 375})
			.setTween(TweenMax.to(".app-window .list", 1, {opacity: 0,display: 'none', ease: "expo.out"}))
			.addTo(controller)

			var focusMode3 = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onLeave', offset: 500, duration: 350})
			.setTween(TweenMax.from(".app-window .focus", 1, {opacity: 0, ease: "power1.inOut"}))
			.addTo(controller)
		}

		if (name === 'done') {
			var step1 = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onEnter', duration: 1000})
			.setTween(TweenMax.to(".app-window", 1, {width: 800, height: 500, bottom: '5%', borderRadius: '12px', ease: "power2.inOut"}))
			.addTo(controller)

			var step1a = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onEnter', duration: 500})
			.setTween(TweenMax.to(".app-window .focus", 1, {opacity: 0}))
			.addTo(controller)

			var step1a = new ScrollMagic.Scene({triggerElement: step, triggerHook: 'onEnter', duration: 500, offset: 500})
			.setTween(TweenMax.to(".app-window .step1", 1, {opacity: 1}))
			.addTo(controller)
		}

	})

	var hideAppWindow = new ScrollMagic.Scene({triggerElement: ".features", triggerHook: 'onEnter', duration: 750, offset: -500})
	.setTween(TweenMax.to(".app-window", 1, {opacity: 0, width: 350, height: 50, bottom: '20px', borderRadius: '7px', ease: "power2.inOut"}))
	.addTo(controller)

	function startTimer() {
		let time = 0
		$('.timer').text('0:00')
		clearInterval(interval)
		interval = setInterval(function(){
			time++
			let formattedTime = formatTimestamp(time)
			$('.timer').text(formattedTime)
		}, 1000)
	}

	var waypoint1 = $('.feature-focus').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.focus-window').addClass('active')
		}
	})

	var waypoint2 = $('.feature-flow').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.feature-flow').addClass('active')
		}
	})

	var waypoint3 = $('.feature-integrations').waypoint({
		offset: 200,
		handler: function(direction) {
			$('.feature-integrations').addClass('active')
		}
	})

	let interval, stepInterval, intervalSet = null

	let waypoint4 = $('.icons').waypoint({
		offset: 200,
		handler: function(direction) {
			if(!intervalSet){
				intervalSet = true
				let stepCount = 2
				setTimeout(()=>{
					changeStep(stepCount)
				}, 400)
				stepInterval = setInterval(function(){
					stepCount++
					if(stepCount === 5) stepCount = 1
					changeStep(stepCount)
				}, 3000)
			}
		}
	})

	$('.icons > div').on('click', (e) => {
		clearInterval(stepInterval)
		let stepNumber = $(event.currentTarget).data('step')
		changeStep(stepNumber)
	})

	$('.icons img').each(function(){
		var $img = $(this)
		var imgClass = $img.attr('class')
		var imgURL = $img.attr('src')
		$.get(imgURL, function(data) {
			var $svg = $(data).find('svg')
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg')
			}
			$svg = $svg.removeAttr('xmlns:a')
			$img.replaceWith($svg)
		}, 'xml')
	})
})