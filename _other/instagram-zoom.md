---
layout: template
permalink: other/instagram-zoom.html
description: I stumbled across the ability to zoom in on images in Instagram the other day ("Hey, would you look at that!"), and thought it'd be fun to recreate it. 
title: Instagram Zoom
type: demo
localcss: 
localjs:
includePrismJs: false
externalcss: https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.css, https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css
externaljs: https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.js
---

{%- include breadcrumbs.html -%}

<style>
.modal-body {
	padding: 0;	
}

.modal-footer {
	padding: .4rem;
}

.modal {
	-webkit-animation-duration: .3s;
			animation-duration: .3s;
	-webkit-animation-delay: 0s;
			animation-delay: 0s;
}
</style>

<div class="container">
	<span class="h3 d-block">Instagram Style Press-n-Hold to Zoom</span>
	<div class="row mb-3">
		<div class="col-md-4">
			<div class="card">
				<a href="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(34).jpg" target="_blank"><img alt="animal1" class="card-img-top w-100" data-large="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(34).jpg" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg"></a>
				<div class="card-body">
					<div class="card-title h4">
						Animal 1
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe nihil, atque mollitia ullam itaque voluptatibus autem quos, nam asperiores nostrum aliquam nobis repudiandae quibusdam earum cum vero, eaque officiis.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card">
				<a href="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(35).jpg" target="_blank"><img alt="animal2" class="card-img-top w-100" data-large="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(35).jpg" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg"></a>
				<div class="card-body">
					<div class="card-title h4">
						Animal 2
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe nihil, atque mollitia ullam itaque voluptatibus autem quos, nam asperiores nostrum aliquam nobis repudiandae quibusdam earum cum vero, eaque officiis.</p>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="card">
				<a href="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(36).jpg" target="_blank"><img alt="animal3" class="card-img-top w-100" data-large="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-12/img%20(36).jpg" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg"></a>
				<div class="card-body">
					<div class="card-title h4">
						Animal 3
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe nihil, atque mollitia ullam itaque voluptatibus autem quos, nam asperiores nostrum aliquam nobis repudiandae quibusdam earum cum vero, eaque officiis.</p>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

			$( '.card-img-top' ).each( function( i ) {
				var id = ''
					large = $( this ).data( 'large' );
				
				if( !this.id ) {
					$( this ).attr( 'id', 'cit_' + i );
				}
				
				if( 'undefined' !== typeof large ) {
					var modal = '<div class="modal animated zoomIn" id="modal_'+i+'" role="dialog" tabindex="-1">' +
						'<div class="modal-dialog modal-fullscreen modal-dialog-centered" role="document"><div class="modal-content">' +
						'<div class="modal-body"><img src="'+large+'" alt="animal'+i+'" class="w-100" /></div>' +
						'<div class="modal-footer bg-gray-d2"><div data-icon="ei-comment"></div><div data-icon="ei-heart"></div>' + 
						'<div data-icon="ei-share-google"></div></div></div></div></div>';
					
					$( 'body' ).append( modal );					
				}
			} );
			
			var clickStart = ( ( document.ontouchstart !== null ) ? 'mousedown' : 'touchstart' ),
				clickEnd = ( ( document.ontouchstart !== null ) ? 'mouseup' : 'touchend' );

			var dt;
			$( '.card-img-top, .modal' ).on( clickEnd, function( e ) {
				clearTimeout( dt );
				if( 'icon' === e.target.classList[0] ) {
					if( 'icon--ei-comment' === e.target.classList[1] ) { 
						alert( 'comment' );
					} else if( 'icon--ei-heart' === e.target.classList[1] ) { 
						alert( 'like' );
					} else if( 'icon--ei-share-google' === e.target.classList[1] ) { 
						alert( 'share' );
					}
				}
				$( '.modal' ).modal( 'hide' );
				return false;
			} ).on( clickStart, function( e ) {
				e.preventDefault();
				e.stopPropagation(); 
				var t = $( this ),
					id = '#modal_' + t[0].id.split( '_' )[1];
				
				dt = window.setTimeout( function() {
					$( id ).modal( 'show' );
				}, 500 );
				return false;
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
				<p>{{- page.description -}}</p>
				<ol>
					<li>Click on a Card image to open it in a new tab</li>
					<li>Click and hold (long press) on the image to zoom in</li>
				</ol>
			</div>
		</div>
	</div>
</div>
