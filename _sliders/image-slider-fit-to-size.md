---
layout: template
permalink: sliders/image-slider-fit-to-size.html
description: This takes the basic image slider and adds an option for adjusting the images in the slider to fit
title: Image Slider fit-to-size
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css, https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs:
showinnav: true
---

<style>
	.cdc-card-fit-slider .card-img-top {
		object-fit: cover;
		object-position: 100% 0;
		height: 300px;
		max-height: 300px;		
	}

	.cdc-card-fit-slider .card-body {
		background: rgba(0, 0, 0, 0.8);
		color: #fff;
	}

	.cdc-card-fit-slider .fa-stack {
		position: absolute;
    	right: 0;
	}
	.cdc-card-fit-slider .fa-stack .fa-square {
		color:rgba(0, 0, 0, 0.8);
	}

	.modal-body {
		padding: 0;	
		text-align: center;
	}


	.modal {
		animation-duration: .3s;
		animation-delay: 0s;
		padding-right: 0!important;
		
	}

	.modal-content {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal-body .modal-notice {
		background-color: rgba(0, 0, 0, 0.9);
		border-radius: 30px;
		padding: 20px;
		color: white;
		position: absolute;
		left: 45%;
		top: 100px;
		animation-duration: 2s;
		animation-delay: 2s;		
		box-shadow: 0px 0px 18px 0px rgba(255, 127, 0, 0.75);
	}	
</style>


{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Fit Image Slider</span>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-9">
			<div class="cdc-card-slider" id="slider_1">
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_1997.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 1997
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_1998.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 1998
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_1999.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 1999
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2000.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2000
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2001.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2001
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2002.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2002
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2003.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2003
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2004.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2004
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2005.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2005
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2006.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2006
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2007.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2007
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2008.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2008
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2009.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2009
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2010.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2010
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2011.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 10
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2012.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 10
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2013.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							Card Title 10
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2014.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2014
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2015.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2015
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2016.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2016
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2017.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2017
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2018.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2018
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2019.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left">
							CDC 2019
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
				<div class="card">
					<img alt="Card image cap" class="card-img-top img-fluid"
						data-lazy="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/over-the-years/www.cdc.gov_2020.jpg">
					<div class="card-body">
						<div class="card-title h4 text-left dark">
							CDC 2020
						</div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source" data-line="23">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#slider_1', {
			'sliderType': 'standard',
			'bodyClass': '',        
			'ariaLabel': '',
			'ariaLabelTarget': 'sliderLabel',
			'centerMode': false,
			'callback': function( t, d ) {
				t.addClass( 'cdc-card-fit-slider' );

				var w = t.width();

				// set each card height to 1/2 of the width of the slider
				t.find( '.card' ).each( function() {
					$( this )
						.height( w / 2 );
				} );

				// get the new slider height
				var h = t.height(),
					ch = ( h * 0.75 ) + 'px';

				console.log( h );

				$( '.cdc-card-fit-slider .card-img-top' ).each( function() { 
					$( this )
						.css({'max-height': ch, 'cursor': 'pointer'})
						.after( '<span class="fa-stack card-img-zoom" style="cursor:pointer"><i class="fas fa-square fa-stack-2x"></i><i class="fas fa-expand fa-stack-1x fa-inverse"></i></span>' );
				} );

				$( document ).on( 'click', '.card-img-top, .card-img-zoom', function() {
					var t = $( this );

					if( t.hasClass( 'fa-stack' ) ) {
						t = t.prev( '.card-img-top' );
					}

					$( '#modal_zoom' )
						.modal( 'show' )
						.find( '.modal-body' )
						.empty()
						.append( '<div class="modal-notice animated fadeOut">Press ESC to close</div><img src="'+t[0].src+'" class="img-fluid" />' );
				} );

				var dots = $('.slick-dots').find('li'),
					dl = dots.length,
					dw = 40; // roughly the width of a paging dot

				if( Math.floor( w / dw ) < dl ) {

					var dotwidth = Math.floor( w / ( dl + 15 ) ) + 'px';

					$( '.slick-dots' ).find( 'li' ).each( function() {
						$( this ).width( dotwidth );
					} );
				}

				var modal = '<div class="modal animated zoomIn" id="modal_zoom" role="dialog" tabindex="-1">' +
						'<div class="modal-dialog modal-fullscreen modal-dialog-centered" role="document"><div class="modal-content">' +
						'<div class="modal-body"></div>' +
						'</div></div></div>';
					
					$( 'body' ).append( modal );		

			},
			'slideCss': { },
			'sliderCss': { },
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
				<p>Based off the <a href="/code/sliders/image-slider.html">Image Slider</a>, with some adjustments.</p>
				<ol>
					<li>Card images are all different sizes. Instead of trying to scale them into place, they're positioned using <code>object-fit</code>. You'll only see part of the image, but they'll all fit correctly.</li>
					<li>Because of #1, the card height is derived from the slider</li>
					<li>Then each image is set to 3/4ths of the height of the card</li>
					<li>In addition, there are more slides in this demo than recommended. Because of that, the slider dots won't normally fit under the slider. I adjust the width of the slider dots according to the width of the slider and the number of slides.</li>
					<li>Finally, this demo uses the Slick lazy loading mechanism, so they're loaded on demand as they appear.</li>
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
		<img alt="Card image cap" class="card-img-top" data-lazy="https://picsum.photos/id/849/700/300">
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