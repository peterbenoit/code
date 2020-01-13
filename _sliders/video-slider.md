---
layout: template
permalink: sliders/video-slider.html
description: Video Slider using Slick Slider
title: Video Slider 
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
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Video Slider</span>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-9">
			<div class="cdc-card-slider">
				<div class="card">
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/7Tx4PXDW35g/mqdefault.jpg"
							data-video-id="7Tx4PXDW35g"
						data-transcript-url=""
						data-audio-url=""
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
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/K0wlPVPdywI/mqdefault.jpg"
							data-video-id="K0wlPVPdywI"
						data-transcript-url="#"
						data-audio-url="#"
						data-lowres-url="#">
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
					<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/RTf-KalZw6Y/mqdefault.jpg"
							data-video-id="RTf-KalZw6Y"
						data-transcript-url=""
						data-audio-url="#"
						data-lowres-url="">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 3
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

<script id="prism-source" data-line="5">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '.cdc-card-slider', {
			'sliderType': 'video',
			'bodyClass': '',        
			'ariaLabel': 'Video Slider',
			'ariaLabelTarget': '',
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

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<ol>
					<li>The standard card slider used for displaying videos with associated content, such as a title and a short description.</li>
					<li>The video slider contains markup to identify each slide with an associated video. This is done through data attributes placed on the card image. You can see this on lines <a href="#html-output">3&ndash;7</a>.</li>
					<li>As for the script, on <a href="#script-output">line 3</a> set the <code>sliderType</code> variable to <code>video</code></li>
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
		<img alt="Card image cap" class="card-img-top" src="http://i.ytimg.com/vi/7Tx4PXDW35g/mqdefault.jpg"
			data-video-id="7Tx4PXDW35g"
			data-transcript-url=""
			data-audio-url=""
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

