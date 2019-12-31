---
layout: template
permalink: sliders/video-slider-three-wide.html
description: Three wide video slider built using Slick Slider
title: Slick Slider - Three wide video slider 
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: false
externalcss:
externaljs:
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-lg-12">
			<span class="h3" id="sliderLabel">Video</span>
			<div class="cdc-card-slider">
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/KyI8i1-cN8s/mqdefault.jpg"								 
							data-video-id="KyI8i1-cN8s"
							data-transcript-url="#"
							data-audio-url="#"
							data-lowres-url="#">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 1
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>
				</div>					
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/1ntfXLb5eFk/mqdefault.jpg"								 
							data-video-id="1ntfXLb5eFk"
							data-transcript-url=""
							data-audio-url="#"
							data-lowres-url="">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 2
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>
				</div>					
				<div class="card">
					<img alt="Card image cap" class="card-img-top" 
							src="http://i.ytimg.com/vi/7Tx4PXDW35g/mqdefault.jpg" 
							data-video-id="7Tx4PXDW35g"
							data-transcript-url=""
							data-audio-url="#"
							data-lowres-url="#">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 3
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/K0wlPVPdywI/mqdefault.jpg"
							data-video-id="K0wlPVPdywI"
							data-transcript-url="#"
							data-audio-url="#"
							data-lowres-url="">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 4
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>							
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/RTf-KalZw6Y/mqdefault.jpg"
							data-video-id="RTf-KalZw6Y"
							data-transcript-url="#"
							data-audio-url=""
							data-lowres-url="#">								 
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 5
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>						
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/eM1XfAsGnHI/mqdefault.jpg"
							data-video-id="eM1XfAsGnHI"
							data-transcript-url="#"
							data-audio-url=""
							data-lowres-url="#">								 
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 6
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.
						</p>
					</div>						
				</div>						
			</div>
		</div>
	</div>
</div>

<script id="prism-source">
	window.addEventListener( 'DOMContentLoaded', function() {
		( function( $ ) {

			slickInit( '.cdc-card-slider', {
				'sliderType': 'modal',
				'bodyClass': '',        
				'ariaLabel': '',
				'ariaLabelTarget': 'sliderLabel',
				'responsive': [ 
					{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 1 } },         
					{ 'breakpoint': 992, 'settings': { 'slidesToShow': 3, 'slidesToScroll': 1 } },
					{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },          
					{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
					{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
				]
			} );

		} )( jQuery );
	} );
</script>