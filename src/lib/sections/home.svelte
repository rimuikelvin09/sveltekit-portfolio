<script lang="ts">

	import anime from "animejs";
	import { onMount } from "svelte";
	import { homeAnchor, loadPagePromise, slickScrollInstance } from "$lib/store";
	import { loadImage } from "$lib/utils";

	// DOM Node Binds for animations
	let homeContainerElement: HTMLElement; // Container
	let backgroundContainerElement: HTMLElement, backgroundImageElement: HTMLElement; // Offsets
	let titleWord1Element: HTMLElement, titleWord2Element: HTMLElement, shortDetailsElement: HTMLElement, callToActionElement: HTMLElement; // Elements for animations
	let signaturePath1: SVGPathElement, signaturePath2: SVGPathElement, signaturePath3: SVGPathElement, signaturePath4: SVGPathElement; // SVG Paths

	onMount(async () => {
		await loadPagePromise;
		// Set navbar home link's y location to top of homeContainer
		$homeAnchor = homeContainerElement;

		// Add parallax scrolling offsets to slickScroll
		$slickScrollInstance!.addOffset({
			element: backgroundContainerElement,
			speedY: 0.8
		});

		introAnimations();
	})


	// Page load animations
	function introAnimations() {

		const animation = [{ strokeDashoffset: '0' }];

		// Signature animation using svg stroke DashOffset
		signaturePath1.animate(animation, {
			duration: 1000,
			delay: 500,
			easing: 'cubic-bezier(.72,.3,.25,1)',
			fill: 'forwards' 
		});
		signaturePath2.animate(animation, {
			duration: 300,
			delay: 1500,
			easing: 'cubic-bezier(.47,.41,.26,1)',
			fill: 'forwards' 
		});
		signaturePath3.animate(animation, {
			duration: 200,
			delay: 1800,
			easing: 'cubic-bezier(.47,.41,.26,1)',
			fill: 'forwards' 
		});
		signaturePath4.animate(animation, {
			duration: 1000,
			delay: 2000,
			easing: 'cubic-bezier(.47,.41,.26,1)',
			fill: 'forwards' 
		});


		// Animate background image
		Object.assign(backgroundContainerElement.style, {
			height: "0",
			transform: "scale(1.3)",
		});
		backgroundImageElement.style.transform = "translateY(80%) scale(1.4)";

		anime({
			targets: backgroundContainerElement,
			height: "100%",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500,
			complete: () => {
				backgroundContainerElement.style.boxShadow = "3px 9px 18px rgba(0, 0, 0, 0.2)";
			}
		});
		anime({
			targets: backgroundImageElement,
			translateY: "0",
			scale: 1,
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 1500,
			delay: 500
		});


		// Animate title elements
		const titleElements = [titleWord1Element, titleWord2Element, shortDetailsElement, callToActionElement];
		titleElements.forEach(e => {
			e.style.transform = "translateY(130%) rotate(10deg)";
		})
		anime({
			targets: titleElements,
			rotate: "0",
			translateY: "0%",
			easing: "cubicBezier(0.165, 0.84, 0.44, 1)",
			duration: 900,
			delay: anime.stagger(80, {start: 500})
		});
	}

</script>

<div id="content-container" style="padding-top: 23vh" bind:this={homeContainerElement}>
	<div class="content-wrapper">
		<div class="flex">
			<div class="flex-wrapper first">

				<svg id="signature" class="h-signature" x="0px" y="0px" viewBox="0 0 56 56" style="stroke: rgb(178, 186, 187);">
					<g>
						<path
						  bind:this={signaturePath1}
						  class="path-1"
						  style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
						  d="M 1.1883 43.4869 L 13.6935 43.4869 C 13.4483 44.4300 13.3162 45.3542 13.3162 46.2030 C 13.3162 49.2397 15.0138 51.4088 18.5786 51.4088 C 22.9168 51.4088 26.4250 48.3532 28.6884 43.4869 L 54.8118 43.4869 C 55.4719 43.4869 56 42.9777 56 42.3175 C 56 41.6574 55.4719 41.1670 54.8118 41.1670 L 29.6315 41.1670 C 30.6877 38.0737 31.3290 34.4523 31.4611 30.5290 C 32.6494 30.2650 33.8941 30.1329 35.1769 30.1329 C 35.8371 30.1329 36.2141 30.4159 36.2141 30.9063 C 36.2141 32.5472 35.3276 33.8298 35.3276 35.4708 C 35.3276 36.9043 36.3841 37.7719 37.7608 37.7719 C 41.5896 37.7719 46.2108 31.2269 47.7385 31.2269 C 49.1342 31.2269 47.3990 37.1117 52.1522 37.1117 C 52.9256 37.1117 53.9253 36.9043 54.6986 36.4139 C 55.1513 36.0932 55.4719 35.6405 55.4719 35.0558 C 55.4719 34.3391 55.0192 33.7544 54.2648 33.7544 C 53.6046 33.7544 53.0577 34.3013 52.4164 34.3013 C 50.3792 34.3013 52.3218 28.0393 48.5687 28.0393 C 45.2868 28.0393 40.1561 34.4145 38.8548 34.4145 C 38.6852 34.4145 38.5531 34.3202 38.5531 34.0939 C 38.5531 33.4149 39.4017 31.8871 39.4017 30.3593 C 39.4017 28.4732 37.8361 27.2660 35.3844 27.2660 C 34.0451 27.2660 32.7248 27.3980 31.4611 27.6432 C 31.0461 17.7032 26.3307 9.8756 19.1256 9.8756 C 14.2782 9.8756 10.5436 14.0063 10.5436 19.2687 C 10.5436 25.4176 14.5423 30.6799 19.5217 34.1693 C 17.3149 36.3384 15.5985 38.8093 14.5423 41.1670 L 1.1883 41.1670 C .5281 41.1670 0 41.6574 0 42.3175 C 0 42.9777 .5281 43.4869 1.1883 43.4869 Z"
						/>
						<path
						  bind:this={signaturePath2}
						  class="path-2"
						  style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
						  d="M 13.4106 19.2687 C 13.4106 15.5907 15.9003 12.7426 19.1256 12.7426 C 24.7841 12.7426 28.4432 19.7780 28.6130 28.4166 C 26.0101 29.3219 23.6335 30.6988 21.5776 32.3397 C 17.6544 29.6237 13.4106 25.1347 13.4106 19.2687 Z"
						/>
						<path
						  bind:this={signaturePath3}
						  class="path-3"
						  style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
						  d="M .6413 37.1495 C 1.1317 37.6399 1.8673 37.6210 2.3765 37.1495 L 4.7342 34.7918 L 7.0919 37.1495 C 7.5823 37.6399 8.3368 37.6399 8.8272 37.1495 C 9.3176 36.6591 9.3176 35.9046 8.8272 35.4142 L 6.4695 33.0754 L 8.8272 30.7177 C 9.3176 30.2273 9.3176 29.4917 8.8272 29.0012 C 8.3368 28.4920 7.5823 28.5109 7.0919 29.0012 L 4.7342 31.3401 L 2.3765 29.0012 C 1.8673 28.4920 1.1317 28.4920 .6413 29.0012 C .1509 29.4917 .1509 30.2461 .6413 30.7177 L 2.9990 33.0754 L .6413 35.4142 C .1509 35.9235 .1509 36.6591 .6413 37.1495 Z"
						/>
						<path
						  bind:this={signaturePath4}
						  class="path-4"
						  style="fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;"
						  d="M 23.6335 36.5459 C 23.8787 36.6591 24.1051 36.7156 24.3314 36.7156 C 25.1047 36.7156 25.6517 36.1121 25.6517 35.4708 C 25.6517 34.9992 25.4254 34.5466 24.8784 34.2825 C 24.6143 34.1505 24.3503 34.0184 24.0674 33.8675 C 25.4254 32.9056 26.9343 32.0568 28.5564 31.4155 C 28.3300 35.0558 27.6322 38.4132 26.5571 41.1670 L 17.5790 41.1670 C 18.5597 39.3185 20.0309 37.3758 21.8982 35.6594 C 22.4641 35.9800 23.0488 36.2630 23.6335 36.5459 Z"
						/>
					  </g>
				  </svg>
				  

			</div>
			
			<div class="flex-wrapper second">
				<h1 class = "title">
					<div class="title-mask">
						<div class="word" bind:this={titleWord1Element}>Kelvin</div>
					</div><br> 
					<div class="title-mask">
						<div class="word" bind:this={titleWord2Element}>Rimui</div>
					</div>
				</h1>
				<div class="occupation mask">
					<p class = "paragraph" bind:this={shortDetailsElement}>
						ICT consultant from Nairobi, Kenya
					</p>
				</div>
				<div class="wrapper action-mask">
					<div class="action" bind:this={callToActionElement}>
						<div class="mask">
							{#await loadImage("assets/imgs/scroll_arrow.png") then src}
								<img src="{src}" alt="">
							{/await}
						</div>
						<div>
							scroll
						</div>
					</div>
				</div>
			</div>

			<div class="parallax-wrapper home-back" bind:this={backgroundContainerElement}>
				{#await loadImage("assets/imgs/banner.jpg") then src}
					<img src="{src}" bind:this={backgroundImageElement} draggable="false" alt="Home Background" style="width:100%; height: 100%; object-fit: cover;">
				{/await}
			</div>
		</div>
	</div>
</div>



<style  lang="sass">

@import "../consts"
@include textStyles()

#content-container
	height: 100vh
	width: 100vw
	padding: 12vh 7vw
	box-sizing: border-box
	position: relative

	.content-wrapper
		position: relative
		height: 100%
		box-sizing: border-box
		z-index: 2

	.flex
		z-index: 2
		width: 95%
		height: 100%
		display: flex
		flex-direction: row
		justify-content: space-between
		position: relative
		box-sizing: border-box

		.flex-wrapper
			position: relative
			height: 100%
			display: flex
			flex-direction: column
			justify-content: center

			&.second
				margin-right: 5vw 
				justify-content: flex-end

			h1
				font-weight: 500
				text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3)

			.title-mask
				overflow: hidden
				display: inline-flex

			.mask
				overflow: hidden

			.h-signature
				width: 35vh
				margin-left: -6vh

			.occupation
				position: relative
				margin-top: 8vh

				.paragraph
					color: white

			.action-mask
				margin-top: 10vh
				margin-right: 7vw
				display: inline-flex
				overflow: hidden

				.action
					font-size: 2vh
					letter-spacing: 0.5vh
					font-family: $font
					text-transform: uppercase
					color: white
					position: relative
					display: inline-flex
					flex-direction: row
					align-items: center

					.mask
						overflow: hidden
						height: 2vh

						img
							height: 2.3vh
							margin-right: 1.5vh
							animation: scrollArrowLoop 3s ease infinite

	.parallax-wrapper
		position: absolute
		left: 0
		z-index: -1
		width: 80%
		height: 100%
		margin-left: 5%
		border-radius: 1.5vh
		overflow: hidden
		box-sizing: border-box
		-webkit-touch-callout: none
		-webkit-user-select: none
		-moz-user-select: none
		-ms-user-select: none
		user-select: none
		transition: box-shadow 0.6s ease
		-webkit-transition: box-shadow 0.6s ease

		@media only screen and (max-width: 1250px)
			&
				opacity: 0.7

		@media only screen and (max-width: 750px)
			&
				opacity: 0.3

		img
			height: 100%
			width: 100%
			object-fit: cover
			border-radius: 1.5vh

@media only screen and (min-width: 1250px)
	.h-signature
		display: block

	.occupation
		width: 100%

	#content-container .flex *
		text-align: left

@media only screen and (max-width: 1250px)
	#content-container .flex *
		text-align: left

	.flex
		justify-content: center !important
		width: 100% !important

		.flex-wrapper 
			&.first
				display: none !important

			&.second
				justify-content: center !important
				margin: 0

	#content-container .flex .bottom
		text-align: left
		left: 5vw

	.parallax-wrapper
		width: 100% !important
		margin-left: 0 !important

@media only screen and (max-width: 750px)
	.occupation
		width: 70%


#signature
	.path-1
		stroke-dasharray: 365
		stroke-dashoffset: 365
	
	.path-2
		stroke-dasharray: 85
		stroke-dashoffset: 85

	.path-3
		stroke-dasharray: 45
		stroke-dashoffset: 45

	.path-4
		stroke-dasharray: 180
		stroke-dashoffset: 180


@keyframes scrollArrowLoop
	0%
		transform: translateY(-120%)
	
	30%
		transform: translateY(0%)
	
	70%
		transform: translateY(0%)
	
	100%
		transform: translateY(120%)

</style>