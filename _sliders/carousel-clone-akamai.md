---
layout: template
permalink: sliders/carousel-clone-akamai.html
description: This is the same as the Carousel, except I'm using deelay.me to render the images with a delay; this mimics the Akamai Image Manager delay.
title: Carousel using Deelay.me
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
order: 3
slidertype: carousel
image: carousel.jpg
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-md-9">
			<span class="h3 d-block" id="sliderLabel_1">Slick Carousel using Deelay.me - Using Deelay.me</span>
			<div class="cdc-card-slider" id="slider_1">
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/819/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/820/700/300">
					<div class="card-body bg-gray-d2">
						<div class="card-title h4 text-left">
							Card Title 2
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/821/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 3
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/822/700/300">
					<div class="card-body bg-gray-d2">
						<div class="card-title h4 text-left">
							Card Title 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/823/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 5
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/824/700/300">
					<div class="card-body bg-gray-d2">
						<div class="card-title h4 text-left">
							Card Title 6
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/825/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 7
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/826/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 8
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/827/700/300">
					<div class="card-body bg-gray-d2">
						<div class="card-title h4 text-left">
							Card Title 9
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-9">
			<p class="text-center small">Thanks to <a href="http://deelay.me/">http://deelay.me/</a></p>
		</div>
	</div>
</div>

<script id="prism-source" data-line="5,9-11">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'carousel',
			'bodyClass': '',
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel_1',
			'centerMode': false,
			'dots': false,
			'sliderClass': 'cdc-carousel-slider',
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

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<p>This demo is the same as the <a href="/code/sliders/carousel-clone.html">carousel</a> except for the delay purposefully added to simulate latency.</p>
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-1" data-toggle="collapse" id="accordion-4-card-1" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-1">HTML</a>
		</div>
		<div aria-labelledby="accordion-4-card-1" class="collapse" id="accordion-4-collapse-1" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col"><pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="cdc-card-slider">
	<div class="card">
		<img alt="Card image cap" class="card-img-top" src="http://deelay.me/1000/https://picsum.photos/id/849/700/300">
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
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-2" data-toggle="collapse" id="accordion-4-card-2" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-2">Javascript</a>
		</div>
		<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<div class="col" id="script-source">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<pre id="script-output" style="position:absolute;left:-9999px"></pre>