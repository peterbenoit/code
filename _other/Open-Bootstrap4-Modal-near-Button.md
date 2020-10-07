---
layout: template
permalink: other/Open-Bootstrap4-Modal-near-Button.html
description: Bootstrap 4 modals open in the middle of the screen by default. This is normally fine, but in this instance I wanted them to open near the button that called it.
title: Open Bootstrap 4 Modal near Button
type: demo
localcss:
localjs:
includePrismJs: false
externalcss:
externaljs:
---

{%- include breadcrumbs.html -%}

<style>

</style>

<div class="container">
	<div class="row">
		<div class="col">
			<button class="btn btn-primary" data-target=".example-modal" data-toggle="modal">Button 1</button>
		</div>
		<div class="col text-center">
			<button class="btn btn-success" data-target=".example-modal" data-toggle="modal">Button 2</button>
		</div>
		<div class="col text-right">
			<button class="btn btn-danger" data-target=".example-modal" data-toggle="modal">Button 3</button>
		</div>
	</div>
	<p class="mt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima officia ut veritatis in harum repudiandae! Animi, vero maiores accusantium consequuntur ducimus nesciunt ipsa quis cupiditate odio eaque tempora ipsam molestiae.</p>
	<p>Totam minima deserunt harum <button class="btn btn-info" data-target=".example-modal" data-toggle="modal">Button 4</button> expedita impedit obcaecati officia nam libero fuga non! Reprehenderit adipisci eum iure ipsa ex, fugit aliquid facilis accusantium illum enim voluptatibus sit velit recusandae eligendi tempore.</p>
	<p>Itaque aperiam commodi id debitis omnis harum architecto cumque eos natus dolores officiis temporibus explicabo earum, quos illum facere velit <button class="btn btn-light" data-target=".example-modal" data-toggle="modal">Button 5</button> inventore minima! Expedita quasi obcaecati repudiandae earum error explicabo voluptatum!</p>
	<div class="row">
		<div class="col-4">
			<div class="card">
				<div class="card-body">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus laudantium, at in repudiandae totam quia magni sequi nisi assumenda voluptatem, voluptate consequuntur harum reprehenderit error provident id iusto.</p>
				</div>
				<div class="card-footer text-right">
					<button class="btn btn-dark" data-target=".example-modal" data-toggle="modal">Button 6</button>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card">
				<div class="card-body">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus laudantium, at in repudiandae totam quia magni sequi nisi assumenda voluptatem, voluptate consequuntur harum reprehenderit error provident id iusto.</p>
				</div>
				<div class="card-footer text-center">
					<button class="btn btn-dark" data-target=".example-modal" data-toggle="modal">Button 7</button>
				</div>
			</div>
		</div>
	</div>
	<div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal example-modal" role="dialog" tabindex="-1">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="myLargeModalLabel">Large modal</h4><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">×</span></button>
				</div>
				<div class="modal-body">
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla qui blanditiis similique iure iste dicta ratione aperiam laborum temporibus suscipit, delectus aut doloremque, soluta aliquid cupiditate deserunt nesciunt nam! Magni!</p>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

			var cwidth = 0;
			$( '.btn[data-toggle="modal"]' ).on( 'click', function() {
				var t = $( this ),
					offs = t.offset(),
					offl = Math.round( offs.left ),
					offt = Math.round( offs.top ),
					target = t.data( 'target' ),
					ww = $( window ).width(),
					perc = ( offl / ww ) * 100,
					bw = t.outerWidth();

				$( target ).on( 'shown.bs.modal', function() {
					if ( 0 === cwidth ) {
						cwidth = $( '.modal-dialog' ).width();
					}
					console.log( 'width', cwidth, 'left', offl );
					var left = offl + 'px',
						top = offt + 10 + 'px';
					if ( 60 < perc ) {
						left = ( offl - cwidth ) + bw + 'px';
					}
					$( this ).find( '.modal-dialog' ).css( { top: top, left: left, position: 'absolute' } );
				} );
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
				<p>{{- page.description -}}</p>
			</div>
		</div>
	</div>
</div>
