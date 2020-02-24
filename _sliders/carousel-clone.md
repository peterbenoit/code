---
layout: template
permalink: sliders/carousel-clone.html
description: The original (non-clone) carousel slider required initializing two sliders and then asking them politely to work together. This is <i>mostly</i> fine, however the sync method between the two sliders was problematic. To get around this, and the fact that I had to initialize two sliders, I now clone the original slider and capture events on the clone to handle slide navigation.
title: Carousel (clone)
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
order: 5
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-md-9">
			<span class="h3 d-block" id="sliderLabel_1">Slick Carousel (clone)</span>
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

<script id="prism-source" data-line="5,6,10-12">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'carousel',
			'thumbnailsToShow': 4,
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
				<p>The <a href="/code/sliders/carousel.html">original carousel version</a> of the Slick slider uses two sliders to implement the carousel. This version uses a single slider which is cloned and massaged to display it as a thumbnail track under the original slider.</p>
				<p>There are benefits and disadvantages to this...</p>
				<ol>
					<li><span style="color: green">Pro:</span>You only need one slider in the markup and one initialization call!</li>
					<li><span style="color: red">Con:</span>We have to process the markup via javascript which then calls init again in order to display the second slider.</li>
					<li><span style="color: green">Pro:</span>The sliders are related but do not force navigation on each - meaning if you slide the thumbnail slide, the top slide doesn't auto-advance.</li>
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