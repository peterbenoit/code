---
layout: template
permalink: sliders/form-step-wizard-animations.html
description: This is the same as the Step Wizard demo, using alternative slider transition animations, some by using the Animate.css CSS library.
title: Step Wizard with Animation
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs: 
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Step Wizard Slider with Animations</span>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel1">Slick Slider - Step Wizard</span>
			<div class="cdc-card-slider" id="example1">
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 2
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 3
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel2">Slick Slider - Step Wizard (Fade)</span>
			<div class="cdc-card-slider" id="example2">
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 2
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 3
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel3">Slick Slider - Step Wizard (Slide In Text)</span>
			<div class="cdc-card-slider" id="example3">
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 1
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 2
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 3
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Step 4
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source" data-line="37,38">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#example1', {
			'sliderType': '',
			'bodyClass': '',
			'ariaLabel': '',
			'centerMode': false,
			'arrows': false,
			'ariaLabelTarget': 'sliderLabel1',
			'customPaging': function( slick, index ) {
				var t = slick.$slides.eq( index ),
					img = t.find( 'img' ),
					src = img.attr( 'src' ),
					title = t.find( '.card-title' ),
					text = title.text();
				return text;
			},
			'callback': function( t, d ) {
				t.addClass( 'cdc-arrow-slider' );
			},
			'responsive': [ 
				{'breakpoint': 1200,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 992,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 768,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 576,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 0,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1,	'centerPadding': '20px'}
			} ]
		} );

		slickInit( '#example2', {
			'sliderType': '',
			'bodyClass': '',
			'ariaLabel': '',
			'centerMode': false,
			'arrows': false,
			'fade': true,
			'cssEase': 'linear',
			'ariaLabelTarget': 'sliderLabel2',
			'customPaging': function( slick, index ) {
				var t = slick.$slides.eq( index ),
					img = t.find( 'img' ),
					src = img.attr( 'src' ),
					title = t.find( '.card-title' ),
					text = title.text();
				return text;
			},
			'callback': function( t, d ) {
				t.addClass( 'cdc-arrow-slider' );
			},
			'responsive': [ 
				{'breakpoint': 1200,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 992,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 768,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 576,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
				{'breakpoint': 0,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1,	'centerPadding': '20px'}
			} ]
		} );

		slickInit( '#example3', {
				'sliderType': '',
				'bodyClass': '',
				'ariaLabel': '',
				'centerMode': false,
				'arrows': false,
				'speed': 0,
				'ariaLabelTarget': 'sliderLabel3',
				'customPaging': function( slick, index ) {
					var t = slick.$slides.eq( index ),
						img = t.find( 'img' ),
						src = img.attr( 'src' ),
						title = t.find( '.card-title' ),
						text = title.text();
					return text;
				},
				'callback': function( t, d ) {
					t.addClass( 'cdc-arrow-slider' );
				},
				'responsive': [ 
					{'breakpoint': 1200,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
					{'breakpoint': 992,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
					{'breakpoint': 768,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
					{'breakpoint': 576,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1} },
					{'breakpoint': 0,'settings': {	'slidesToShow': 1,	'slidesToScroll': 1,	'centerPadding': '20px'}
				} ]
			} );

		if ( $( '#example3 .slick-slide' ).hasClass( 'slick-active' ) ) {
			$( this ).find( '.card-title' ).addClass( 'animated fadeInLeft' );
		} else {
			$( this ).find( '.card-title' ).removeClass( 'animated fadeInLeft' );
		}

		$( '#example3' ).on( 'beforeChange', function() {
			$( this ).find( '.card-title' ).removeClass( 'animated fadeInLeft' );
			setTimeout( () => {
				$( this ).find( '.card-title' ).addClass( 'animated fadeInLeft' );
			}, 100 );
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
					<li>Using the slider as a form step wizard.</li>
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
					<div class="col"><pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card">
	<div class="card-body">
		<div class="card-title d-none">
			Step 3
		</div>
		<p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse unde iusto minus illum amet aliquam dolorum rem, ea aspernatur earum adipisci culpa. Dolore non eligendi velit iure distinctio illum.</span><span>Eligendi beatae repellendus, animi tempore quibusdam impedit illo doloremque asperiores, veniam esse, perferendis quod recusandae adipisci! Facilis dolorem, voluptatibus, ea voluptate sapiente molestias, enim architecto ipsam ut dolores vel recusandae!</span></p>
		<p><span>Labore dolor enim impedit modi culpa corrupti, aliquam, quisquam cumque reiciendis quam eum iusto nam aliquid tenetur amet eius, voluptatibus illum recusandae distinctio deserunt vero quos adipisci id velit! Magnam.</span><span>Sed provident saepe ut libero omnis assumenda quasi obcaecati quod optio, repellat ipsum quisquam dolore accusamus fugiat veritatis, fugit aut itaque. Reiciendis, animi. Nulla laudantium unde ad libero est veritatis?</span></p>
		<div class="form-check">
			<input class="form-check-input" id="defaultCheck1" required="" type="checkbox" value=""> <label class="form-check-label" for="defaultCheck1">Yes, this seems reasonable.</label>
		</div>
	</div>
	<div class="card-footer">
		<div class="row">
			<div class="col">
				<button class="btn btn-secondary btn-prev">Previous</button>
			</div>
			<div class="col">
				<button class="float-right btn btn-success btn-next" disabled="disabled">Next</button>
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