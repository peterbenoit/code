---
layout: template
permalink: sliders/single-card-slider.html
description: Replacing a card image/body with a slider. This slider slides within a single card.
title: Single card image slider
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
slidertype: other
image: single_card.jpg
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Single card image slider </span>
		</div>
	</div>
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
</div>

<script id="prism-source" data-line="10-15">
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

<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<p>An image card slider, using the  <a href="https://kenwheeler.github.io/slick/">Slick Carousel library</a>.</p>
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
					<div class="col"><pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card">
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