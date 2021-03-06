---
layout: template
permalink: sliders/other/gallery-modal-slider.html
description: Using a Card image to indicate more images are available, then opening the slider in a Bootstrap 4 modal when clicking on it. I also included an option for a dark background, since most of these types of components use dark backgrounds.
title: Gallery Modal Slider
type: demo
localcss: sliders.css, modals.css
localjs: slickinit.js
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs:
showinnav: true
slidertype: other
image: gallery_modal.jpg
---

<style>
body.modal-open .cdc-card-slider .slider-next,body.modal-open .cdc-card-slider .slider-prev {
    display: block!important;
}

.modal, .modal-body {
	padding: 0;
	padding-right: 0!important;
}
.cdc-card-slider.slick-initialized {
	margin: 1rem;
}
</style>

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Gallery Modal Slider</span>
		</div>
	</div>
	<div class="row">
		<div class="col-md-4 mb-3">
			<div class="card">
				<div class="card-header h4">
					Single Card
				</div><a data-target="#galleryModal" data-toggle="modal" href="#"><img alt="" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/top-700x300.png"></a>
				<div class="card-body">
					<div class="card-title h4 text-left">
						Single Gallery Card
					</div>
					<p>Click this card image to see the slider gallery</p>
				</div>
				<div class="card-footer">
					<div class="custom-control custom-checkbox">
						<input type="checkbox" class="custom-control-input" id="useDark">
						<label class="custom-control-label" for="useDark">Use Dark Background</label>
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
<div aria-hidden="true" aria-labelledby="galleryModalLabel" class="modal fade modal-fullscreen modal-dark animated zoomIn" id="galleryModal" role="dialog" tabindex="-1">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header" style="height: 66px">
				<button aria-label="Close" class="close rounded-circle" data-dismiss="modal" type="button"><span class="sr-only">Close</span><svg style="width:24px;height:24px" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path class="fill-w" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg></button>
			</div>
			<div class="modal-body">
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
					<div class="card">
						<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300">
						<div class="card-body">
							<div class="card-title h4 text-left">
								Card Title 9
							</div>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
						</div>
					</div>
					<div class="card">
						<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/813/700/300">
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
</div>

<script id="prism-source" data-line="4-5,22-28">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		$( '#galleryModal' )
			.on( 'shown.bs.modal', function ( e ) {
				slickInit( '.cdc-card-slider', {
					'sliderType': '',
					'bodyClass': '',
					'ariaLabel': '',
					'ariaLabelTarget': 'sliderLabel',
					'centerMode': false,
					'dots': false,
					'responsive': [
						{ 'breakpoint': 1200, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
						{ 'breakpoint': 992, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
						{ 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
						{ 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
						{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
					]
				} );
			} )
			.on( 'show.bs.modal', function( e ) {
				if( $( '#useDark' ).is( ':checked' ) ) {
					$( this ).addClass( 'modal-dark' );
				} else {
					$( this ).removeClass( 'modal-dark' );
				}
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
				<ol>
					<li>This opens the standard implementation of the Slick slider in a modal as a "gallery".</li>
					<li>The modal uses a custom <code>.modal-fullscreen</code> class to display it in fullscreen.</li>
					<li>This demo also uses the <a href="https://daneden.github.io/animate.css/">animate.css</a> CSS library to change how the modal appears.</li>
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