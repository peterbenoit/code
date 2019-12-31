---
layout: template
permalink: sliders/carousel.html
description: Carousel built using Slick Slider
title: Carousel 
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-lg-9">
			<span class="h3" id="sliderLabel_1">Slick Carousel #1</span>
			<div class="cdc-card-slider" id="slider_1">
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
					<div class="card-body bg-gray-d2">
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
					<div class="card-body bg-gray-d2">
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
					<div class="card-body bg-gray-d2">
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
					<div class="card-body bg-gray-d2">
						<div class="card-title h4 text-left">
							Card Title 9
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div><span class="h3 sr-only" id="sliderLabel_2">Thumbnail</span>
			<div class="cdc-card-slider d-none d-lg-block" id="slider_2">
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/821/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/813/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/821/700/300"></div>
				<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300"></div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<pre id="script-output"></pre>
		</div>
	</div>
</div>

<script id="prism-source" data-line="5,9-13,23,27-31">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'carousel',
			'bodyClass': '',        
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel_1', 
			'asNavFor': '#slider_2',
			'centerMode': false,
			'arrows': false,
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

		slickInit( '#slider_2', {
			'sliderType': 'carousel',
			'bodyClass': '',        
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel_2',
			'asNavFor': '#slider_1',
			'focusOnSelect': false,
			'centerMode': false,
			'sliderClass': 'cdc-carousel-slider',
			'callback': function( slider, defaults, slick ) {
				$( slick.$slides ).on( 'click', function( t ) {
					
					var idx = $( t.currentTarget ).data( 'slick-index' );
					slider.slick( 'slickGoTo', idx );
					
				} );
			},
			'responsive': [             
				{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 3 } },         
				{ 'breakpoint': 992, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 3 } },
				{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }            
			]   
		} );
		
	} )( jQuery );
} );
</script>