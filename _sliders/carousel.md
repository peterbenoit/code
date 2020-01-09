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
showinnav: false
---
<div class="alert alert-danger" role="alert">
	This demo is broken due to work on the <a class="alert-link" href="carousel-clone.html">carousel (clone)</a> demo. Please use it instead.
</div>
{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-lg-9">
			<span class="h3" id="sliderLabel_1">Slick Carousel</span>
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
			</div><span class="h3 sr-only" id="sliderLabel_2">Thumbnail Nav</span>
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
	<!-- <div class="row">
		<div class="col">
			<pre id="script-output"></pre>
		</div>
	</div> -->
</div>

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<ol>
					<li>The current Carousel in the template clones the first slider into the thumbnail slider under it. This can eventually be done (it is a work in progress),  however it is two sliders right now - one standard and one thumbnail.</li>
					<li>The <code>.d-none</code> and <code>.d-lg-block</code> classes on the second slider are important for it to be hidden in mobile.</li>
				</ol>	
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
					<div class="col">
						<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><span class="h3" id="sliderLabel_1">Slick Carousel</span>
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
</div>
							
<span class="h3 sr-only" id="sliderLabel_2">Thumbnail Nav</span>
<div class="cdc-card-slider d-none d-lg-block" id="slider_2">
	<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300"></div>
	<div class="card"><img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300"></div>
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
						<pre id="script-output"></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source" data-line="5,7-10,21,23-31">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'carousel',
			'ariaLabelTarget': 'sliderLabel_1', 
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
			'ariaLabelTarget': 'sliderLabel_2',
			'asNavFor': '#slider_1',
			'focusOnSelect': false,
			'centerMode': false,
			'sliderClass': 'cdc-carousel-slider cdc-carousel-slider-nav',
			'callback': function( slider, defaults, slick ) {
				$( slick.$slides ).on( 'click', function( t ) {
					var idx = $( t.currentTarget ).data( 'slick-index' );
					$( defaults.asNavFor ).slick( 'slickGoTo', idx );
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