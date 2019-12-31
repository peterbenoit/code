---
layout: template
permalink: sliders/single-card-slider.html
description: Single card slider built using Slick Slider
title: Single card slider 
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
		<div class="col-md-4 mb-3">
			<div class="card">
				<div class="card-header h4">
					Single Card Slider
				</div>
				<div class="card-body p-0">
					<div class="cdc-card-slider">
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/849/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 1
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/820/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 2
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/821/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 3
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/822/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 4
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/813/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 5
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/849/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 6
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/820/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 7
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/821/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 8
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/822/700/300">
							<div class="card-body">
								<div class="card-title h4 text-left">
									Card Title 9
								</div>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
							</div>
						</div>
						<div class="card">
							<img alt="Card image cap" class="card-img-top r-none" src="https://picsum.photos/id/813/700/300">
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
		</div>
		<div class="col-md-4 mb-3">
			<div class="card">
				<div class="card-header h4">
					Single Card
				</div><img alt="" class="card-img-top" src="https://picsum.photos/id/513/700/300">
				<div class="card-body">
					<div class="card-title h4 text-left">
						Single Card
					</div>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4 mb-3">
			<div class="card">
				<div class="card-header h4">
					Single Card
				</div><img alt="" class="card-img-top" src="https://picsum.photos/id/313/700/300">
				<div class="card-body">
					<div class="card-title h4 text-left">
						Single Card
					</div>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<pre id="script-output"></pre>
		</div>
	</div>	
</div>

<script id="prism-source" data-line="10-13">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {
		
		slickInit( '.cdc-card-slider', {
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel',
			'centerMode': false,
			'dots': false,
			'showStatus': true,
			'slideCss': {
				'box-shadow': 'none',
				'margin': '0'
			},
			'sliderCss': { },
			'prevArrow': '<img role="button" class="slider-prev" src="https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/previous-128.png" style="background:rgba(255,255,255,.25);left: -30px!important" />',
			'nextArrow': '<img role="button" class="slider-next" src="https://cdn0.iconfinder.com/data/icons/arrows-android-l-lollipop-icon-pack/24/next-128.png" style="background:rgba(255,255,255,.25);right: -30px!important" />',
			'responsive': [ 
				{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 992, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } }
			]
		} );

	} )( jQuery );
} );
</script>