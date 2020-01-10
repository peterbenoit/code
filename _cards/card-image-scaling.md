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
---

<h3>Zoom in/out on Boostrap 4 card images.</h3>
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
	<div class="col-4">
		<div class="card card-img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/dhdsp/maps/images/hd_all.jpg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="card card-img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://www.cdc.gov/obesity/data/brfss_2018_ob_white.svg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-4">
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

            var factor = 2,
                scale = 0;

            $('.img-fluid').on('mousedown',function(event) {
                if ($(':animated').length) {
                    return false;
                }
                $('.img-fluid').css('z-index','0').not(this).removeAttr('style').prev('.reset').hide();
                $(this).css('z-index','9998');
                
                switch (event.which) {
                    case 1:
                        $(this).css('cursor', 'zoom-in');
                        scale++;
                        $(this).animate({
                            width: $(this).width() * $('#factor').val()
                        }, function() {
                            if( 0 === scale ) {
                                $(this).attr('style','')
                            }
                        });
                        
                        break;
                    case 3:
                        $(this).css('cursor', 'zoom-out');
                        if( 0 === scale ) { return false; }
                        scale--;
                        $(this).animate({
                            width: $(this).width() / $('#factor').val()
                        }, function() {
                            if( 0 === scale ) {
                                $(this).attr('style','')
                            }
                        });
                        break;
                    default:
                }
                if( 0 === scale ) {
                    $( this ).prev('.reset').hide();
                    $( '#overlay' ).hide();
                } else {
                    $( this ).prev('.reset').show();
                    if(  $('#cbox' ).is(':checked')){
                        $( '#overlay' ).show();
                    }
                    
                }
            }).on('contextmenu', function() {
                return false;
            });
            
            $('.img-fluid').before('<a class="btn reset" href="#">reset</a>');

            $( 'body' ).append( '<div id="overlay"></div>' )

            $( '.reset' ).on('click', function() {
                $(this).next('.img-fluid').attr('style','').css('cursor', 'zoom-in');
                $( this ).hide();
                $( '#overlay' ).hide();
                scale = 0;
            });
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
					<li>See <a href="card-step-style.html">Card Step Style</a> for details on this demo.</li>
					<li>The numbers are created using Font Awesome, detailed in <a href="/code/2020/01/06/using-numbers-in-font-awesome-5.html">this post</a>.</li>
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
						<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card card-step bt-3 bt-primary">
	<div class="row no-gutters">
		<div class="col-lg-3">
			<div class="card">
				<div class="card-header bg-tertiary h3 r-none"><i class="fas fa-air-freshener c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">01</span></div>
				<div class="card-body text-center d-none d-lg-block">
					<i class="fas fa-air-freshener c-primary"></i>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card">
				<div class="card-header">Header 1</div>
				<div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
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
			<a class="card-title" data-controls="accordion-4-collapse-2">SCSS</a>
		</div>
		<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre><code class="language-css line-numbers"><script type="prism-html-markup">.card-step {
	.card-body {
		i, span {
			&.fas, &.far, &.fa-stack {
				font-size:10vw;
				+.fa-stack-1x {
					font-size: 7vw;
				}
			} 
		}
		
		.fa-stack {
			height: 1em;
			width: 1em;
			line-height: 1em;
		}
	}
}</script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>