---
layout: template
permalink: sliders/carousel-mobile.html
description: A version of the carousel which retains the carousel style in mobile
title: Carousel
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
order: 11
slidertype: carousel
image: carousel.jpg
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-md-9">
			<span class="h3 d-block" id="sliderLabel_1">Slick Carousel</span>
			<div class="cdc-card-slider" id="slider_1">
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/819/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card dark">
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
				<div class="card dark">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/823/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 5
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card dark">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/824/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 6
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/825/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 7
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/826/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 8
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card dark">
					<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/827/700/300">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 9
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source" data-line="7,13">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'carousel',
			'thumbnailsToShow': 4,
			'showThumbnailsInMobile': true,
			'bodyClass': '',
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel_1',
			'centerMode': false,
			'dots': false,
			'sliderClass': 'cdc-carousel-slider cdc-carousel-mobile',
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
				<p>This is basically the <a href="/code/sliders/carousel-clone.html">standard carousel</a>, except we retain the thumbnails under the slider in mobile.</p>
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