---
layout: template
permalink: sliders/image-slider.html
description: Image Slider using Slick Slider
title: Slick Slider - Image Slider 
type: demo
localcss: sliders.css
localjs: sliders.js
includePrismJs: true
externalcss:
externaljs:
---

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3" id="sliderLabel">Slick Slider - Image Slider</span>
			<p>The standard card slider used for displaying images with associated content, such as a title and a short description.</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-9">
			<div class="cdc-card-slider">
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 2
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/821/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 3
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/813/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 5
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 6
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 7
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/821/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 8
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 9
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/813/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 10
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="cdc-card-slider">
	<div class="card">
		<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300">
		<div class="card-body">
			<div class="card-title h4 text-left">
				Card Title 1
			</div>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
		</div>
	</div>
</div></script></code></pre>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<pre id="script-output"></pre>
		</div>
	</div>
</div>

<script id="prism-source">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {
		slickInit( '.cdc-card-slider', {
			'sliderType': '',
			'bodyClass': '',        
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel',
			'responsive': [ 
				{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },         
				{ 'breakpoint': 992, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },          
				{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
			]
		} );
	} )( jQuery );
} );
</script>