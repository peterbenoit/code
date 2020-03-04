---
layout: template
permalink: cards/card-image-scaling.html
description: Using animations to scale card images larger and smaller
title: Card Image Scaling
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss:
externaljs:
image: scaling.jpg
---

{%- include breadcrumbs.html -%}


<label for="factor">Scale Factor</label>
<select class="custom-select w-10" id="factor" name="factor">
	<option value="1.25">
		1.25
	</option>
	<option value="1.5" selected>
		1.5
	</option>
	<option value="2">
		2
	</option>
</select>
<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="cbox">
    <label class="custom-control-label" for="cbox">Use Overlay</label>
</div>

<div class="row">
	<div class="col-md-4">
		<div class="card card-img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/dhdsp/maps/images/hd_all.jpg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card card-img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/obesity/data/brfss_2018_ob_white.svg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-md-4">
		<div class="card card-img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/dhdsp/maps/images/sd_unemployment.jpg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
</div>

<script id="rendered-js">
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

            var factor = 2,     // the amount of zoom
                scale = 0;      // the zoom level

            $( '.card-img-zoom .img-fluid' ).on( 'mousedown', function( event ) {
                // if animating, don't allow more clicking
            	if ( $( ':animated' ).length ) {
            		return false;
                }

                // reset all of the images
                $( '.card-img-zoom .img-fluid' )
                    .css( 'z-index', '0' )
                    .not( this ).removeAttr( 'style' ).prev( '.reset' ).hide();

                // put this over most other things
                $( this ).css( 'z-index', '9998' );

                // handle which mouse button was clicked
            	switch ( event.which ) {
            		case 1:
                        // zooming in
            			$( this ).css( 'cursor', 'zoom-in' );
            			scale++;
            			$( this ).animate( {
            				width: $( this ).width() * $( '#factor' ).val()
            			}, function() {
            				if ( 0 === scale ) {
            					$( this ).attr( 'style', '' )
            				}
            			} );
            			break;
            		case 3:
            			$( this ).css( 'cursor', 'zoom-out' );
            			if ( 0 === scale ) {
            				return false;
            			}
            			scale--;
            			$( this ).animate( {
            				width: $( this ).width() / $( '#factor' ).val()
            			}, function() {
            				if ( 0 === scale ) {
            					$( this ).attr( 'style', '' )
            				}
            			} );
            			break;
            		default:
            	}
            	if ( 0 === scale ) {
            		$( this ).prev( '.reset' ).hide();
            		$( '#overlay' ).hide();
            	} else {
            		$( this ).prev( '.reset' ).show();
            		if ( $( '#cbox' ).is( ':checked' ) ) {
            			$( '#overlay' ).show();
            		}
            	}
            } ).on( 'contextmenu', function() {
            	return false;
            } );
            $( '.card-img-zoom .img-fluid' ).before( '<a class="btn reset" href="#">reset</a>' );
            $( 'body' ).append( '<div id="overlay"></div>' )
            $( '.reset' ).on( 'click', function() {
            	$( this ).next( '.card-img-zoom .img-fluid' ).attr( 'style', '' ).css( 'cursor', 'zoom-in' );
            	$( this ).hide();
            	$( '#overlay' ).hide();
            	scale = 0;
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
					<li>Zoom in/out on Boostrap 4 card images.</li>
                    <li>Change the scale amount to change how much the image zooms in and out.</li>
                    <li>Check Use Overlay in order to dim the screen while zooming.</li>
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
					<div class="col">
                        <pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card card-img-zoom">
    <img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/obesity/data/brfss_2018_ob_white.svg">
    <div class="card-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
    </div>
</div></script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-2" data-toggle="collapse" id="accordion-4-card-2" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-2">SCSS</a>
		</div>
		<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre><code class="language-css line-numbers"><script type="prism-html-markup">.card-img-zoom {
    position: relative;
    .img-fluid {
        display: block;
        cursor: zoom-in;
        float: left;
        max-width: initial;
    }
    a.reset {
        background: rgba(0,0,0,0.75);
        color: #fff;
        font-weight: bold;
        padding: 2px 10px;
        z-index: 9999;
        position: absolute;
        display: none;
        margin: 2px
    }
}

#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
    cursor: pointer;
}</script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
