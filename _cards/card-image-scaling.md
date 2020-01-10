---
layout: template
permalink: cards/card-image-scaling.html
description: Using animations to scale card images larger and smaller
title: Card Image Scaling
type: demo
localcss: 
localjs:
includePrismJs: true
externalcss:
externaljs: 
---

<style>
.img-zoom {
    position: relative;
}
	
.img-zoom .img-fluid {
    display: block;
    cursor: zoom-in;
    float: left;
    max-width: initial;
}
.img-zoom a {
    background: rgba(0,0,0,0.75);
    color: #fff;
    font-weight: bold;
    padding: 2px 10px;
    z-index: 9999;
    position: absolute;
    display: none;
    margin: 2px
}


</style>

<h3>Zoom in/out on Boostrap 4 card images.</h3><label for="factor">Scale Factor</label> <select id="factor" name="factor">
	<option value="1.25">
		1.25
	</option>
	<option value="1.5">
		1.5
	</option>
	<option selected value="2">
		2
	</option>
</select>
<div class="row">
	<div class="col-4">
		<div class="card img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="card img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
			<div class="card-body">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nobis molestias. Quos sit iste cumque incidunt labore at facilis earum suscipit architecto, debitis aliquid ipsum laborum. Eaque cupiditate amet ab.</p>
			</div>
		</div>
	</div>
	<div class="col-4">
		<div class="card img-zoom">
			<img alt="Card image cap" class="img-fluid card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
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
                $('.img-fluid').css('z-index','0').not(this).removeAttr('style').prev('.reset').hide();
                $(this).css('z-index','9998');
                
                switch (event.which) {
                    case 1:
                        $(this).css('cursor', 'zoom-in');
                        $(this).animate({
                            width: $(this).width() * $('#factor').val()
                        });
                        scale++;
                        break;
                    case 2:
                        console.log('Middle Mouse button pressed.');
                        break;
                    case 3:
                        $(this).css('cursor', 'zoom-out');
                        $(this).animate({
                            width: $(this).width() / $('#factor').val()
                        });
                        scale--;
                        break;
                    default:
                }
                if( 0 === scale ) {
                    $( this ).prev('.reset').hide();
                } else {
                    $( this ).prev('.reset').show();
                }
            }).on('contextmenu', function() {
                return false;
            });
            $('.img-fluid').before('<a class="btn reset" href="#">reset</a>');

            $( '.reset' ).on('click', function() {
                $(this).next('.img-fluid').attr('style','').css('cursor', 'zoom-in');
                $( this ).hide();
                scale = 0;
            });
    } )( jQuery );
} );
</script>