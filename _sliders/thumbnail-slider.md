---
layout: template
permalink: sliders/thumbnail-slider.html
description: Thumbnail slider built using Slick Slider
title: Thumbnail slider 
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-lg-9">
			<span class="h3 d-block" id="sliderLabel">Thumbnail Slider</span>
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
			</div>
		</div>
	</div>	
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
					<li>Thumbnail version of the slick slider.</li>
				</ol>	
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

<script id="prism-source" data-line="9,10-12">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {
		slickInit( '.cdc-card-slider', {
			'sliderType': 'thumbnail',
			'bodyClass': '',        
			'ariaLabel': '',
			'centerMode': false,
			'ariaLabelTarget': 'sliderLabel',
			'slideCss': {'box-shadow': 'none', 'margin': '10px 3px'},
			'callback': function( slider ) {
				slider.addClass( 'cdc-thumbnail-slider' );
			},
			'responsive': [ 
				{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4 } },         
				{ 'breakpoint': 992, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4 } },
				{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },          
				{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
			]
		} );
	} )( jQuery );
} );
</script>
