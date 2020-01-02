---
layout: template
permalink: sliders/thumbnail-gallery.html
description: Thumbnail gallery slider built using Slick Slider
title: Thumbnail Gallery slider 
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
---

{%- include breadcrumbs.html -%}


<style>
	.slick-grid .card-body {
		display: none;
	}

	.cdc-gallery-slider .card {
		margin: 0;
	}

	.cdc-gallery-slider {
		margin-bottom: 1rem;
	}
	#list a {
		text-decoration: none!important;
	}
</style>

<div class="container">
	<div class="row">
		<div class="col-8">
			<div class="cdc-card-slider" id="example1">
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
			</div>
		</div>
		<div class="col-4">
			<ul id="list">
				
			</ul>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div id="gallery"></div>

		</div>
	</div>
</div>


<script id="rendered-js">

window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#example1', {
			'sliderType': 'gallery',
			'bodyClass': '',
			'ariaLabel': '',
			'centerMode': false,
			'arrows': false,
			'ariaLabelTarget': 'sliderLabel1',
			'galleryTarget': '#gallery',
			'dots': false,
			'callback': function( slider, defaults, slick ) {
					var grid = $( '<div class="slick-grid row" />' ),
					list = '';
				
				slider.addClass( 'cdc-gallery-slider' );
					
				slick.$slides.each( function( i, t ) {
					var $t = $( t );
						img = $t.find( 'img' );
						
						if( 0 ===  i ) {
							grid.append( '<div class="col-4 mb-3"><a href="#" data-slide="' + i + '" class="card bb-5 bb-primary">' + t.innerHTML + '</a></div>' );
							list += '<li><a href="#" data-slide="'+i+'" class=" bb-5 bb-primary">' + $( t ).find('.card-title').text() + '</a></li>';
						} else {
							grid.append( '<div class="col-4 mb-3"><a href="#" data-slide="' + i + '" class="card">' + t.innerHTML + '</a></div>' );
							list += '<li><a href="#" data-slide="'+i+'">' + $( t ).find('.card-title').text() + '</a></li>';
						}

				} );
				if ( 'gallery' === defaults.sliderType ) {
					if ( 'undefined' === typeof defaults.galleryTarget ) {
						slider.after( grid );
					} else {
							$( defaults.galleryTarget ).append( grid );
							$( '#list' ).append( list )
					}
				}
				$( 'a[data-slide]' ).click( function( e ) {
					e.preventDefault();
						var idx = $( this ).data( 'slide' );
						$( 'a[data-slide]' ).removeClass('bb-5 bb-primary' )
					$( 'a[data-slide="'+$( this ).data( 'slide' )+'"]' ).addClass('bb-5 bb-primary')
					slider.slick( 'slickGoTo', idx );
				} );
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

	} )( jQuery );
} );

</script>