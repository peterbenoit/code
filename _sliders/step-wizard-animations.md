---
layout: template
permalink: sliders/step-wizard-animations.html
description: Step Wizard with Animations using Slick Slider and Animate.css
title: Slick Slider - Step Wizard with Animation
type: demo
localcss: sliders.css
localjs: sliders.js
includePrismJs: false
externalcss: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs: 
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3" id="sliderLabel">Slick Slider - Step Wizard Slider with Animations</span>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<span class="h3" id="sliderLabel1">Slick Slider - Step Wizard</span>
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
			<span class="h3" id="sliderLabel2">Slick Slider - Step Wizard (Fade)</span>
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
			<span class="h3" id="sliderLabel3">Slick Slider - Step Wizard (Slide In Text)</span>
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

<script id="prism-source">
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
				console.log( slick.defaults )
				return text;
			},
			'callback': function( t, d ) {
				t.addClass( 'cdc-arrow-slider' );
			},
			'responsive': [ {
				'breakpoint': 1200,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 992,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 768,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 576,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 0,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1,
					'centerPadding': '20px'
				}
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
				console.log( slick.defaults )
				return text;
			},
			'callback': function( t, d ) {
				t.addClass( 'cdc-arrow-slider' );
			},
			'responsive': [ {
				'breakpoint': 1200,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 992,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 768,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 576,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1
				}
			}, {
				'breakpoint': 0,
				'settings': {
					'slidesToShow': 1,
					'slidesToScroll': 1,
					'centerPadding': '20px'
				}
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
					console.log( slick.defaults )
					return text;
				},
				'callback': function( t, d ) {
					t.addClass( 'cdc-arrow-slider' );
				},
				'responsive': [ {
					'breakpoint': 1200,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1
					}
				}, {
					'breakpoint': 992,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1
					}
				}, {
					'breakpoint': 768,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1
					}
				}, {
					'breakpoint': 576,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1
					}
				}, {
					'breakpoint': 0,
					'settings': {
						'slidesToShow': 1,
						'slidesToScroll': 1,
						'centerPadding': '20px'
					}
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