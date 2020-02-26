---
layout: template
permalink: other/form-input-obfuscation.html
description: Some forms provide some basic security through obfuscation, essentially preventing prying eyes from seeing your input. This is most commonly used on social security number inputs, but it can be used for anything. This demo provides four methods for obfuscation, by changing the input values to asterisk's, though it could be any character you choose. 
title: Form Input Obfuscation
type: demo
localcss: 
localjs:
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css
externaljs:  
showinnav: true
order: 
---

{%- include breadcrumbs.html -%}

<style>

</style>

<div class="container">
	<h1 class="display-5">Obfuscating Form Input</h1>

	<div class="form-inline">
		<div class="form-group w-50">
			<input type="text" class="form-control mr-2 form-secret" placeholder="Super Secret Data" id="data1" name="data1">
			 <small class="form-text w-100 text-muted">Simple substitution of the value with the replacement character</small>
		</div>
	</div>

	<div class="form-inline mt-3">
		<div class="form-group w-50">
			<input type="text" class="form-control mr-2 form-secret form-secret-random" placeholder="Random Secret Data" id="data2" name="data2">
			<small class="form-text w-100 text-muted">Random number (5-15) of replacement characters</small>
		</div>
	</div>

	<div class="form-inline mt-3">
		<div class="form-group w-50">
			<input type="text" class="form-control mr-2 form-secret form-secret-fixed" placeholder="Fixed Secret Data" id="data3" name="data3">
			<small class="form-text w-100 text-muted">Fixed number (10) of replacement characters</small>
		</div>
	</div>
	
	<div class="form-inline mt-3">
		<div class="form-group w-50">
			<input type="text" class="form-control mr-2 form-secret form-secret-demand" placeholder="On-demand Secret Data" id="data4" name="data4">
			<small class="form-text w-100 text-muted">Hides characters as you type</small>
		</div>
	</div>	
</div>

<script id="prism-source">
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

		
			$( '.form-secret' ).on( { 
				keydown: function( e ) {
					// if we're not allowing spaces
					if ( e.which === 32 ) return false;					
				},
				input: function( e ) {
					var $t = $( this ),
						demand = $t.hasClass( 'form-secret-demand' ),
						$n = $t.next( 'input:hidden' ),
						$indicator = $t.siblings( '.far' ),
						str = '',
						val = '',
						oe = e.originalEvent;

					if( $t.val().length ) {
						if( demand ) {
							val = $n.val();
							
							if( 'insertText' === oe.inputType ) { 
								// typing
								val += oe.data;
								$n.val( val );
								for( var i = 0; i < $t.val().length; i++ ) {
									str += '*';
								}
								$t.val( str );
							} else if( 'deleteContentBackward' === oe.inputType ) {
								// deleting
								val = val.substring( 0, val.length - 1 );
								$n.val( val );
							} else if( 'insertFromPaste' === oe.inputType ) {
								// pasting
								return false;
							}
							
							$indicator.removeClass( 'fa-eye' ).addClass( 'fa-eye-slash' );
						} else {
							$n.val( $t.val() );
						}
					} else {
						$n.val( '' );
						$indicator.removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );
					}					
				},
				paste: function( e ) {},
				blur: function() {
					var $t = $( this ),
						random = $t.hasClass( 'form-secret-random' ),
						fixed = $t.hasClass( 'form-secret-fixed' ),
						demand = $t.hasClass( 'form-secret-demand' ),
						$n = $t.next( 'input:hidden' ),
						$indicator = $t.siblings( '.far' ),
						str = '';
				
					if( $t.val().length ) {
						
						if( random ) {
							var random = Math.floor( Math.random() * ( 15 - 5 + 1 ) + 5 );
							for( var i = 0; i < random; i++ ) {
								str += '*';
							}	
						} else if ( fixed ) {
							for( var i = 0; i < 10; i++ ) {
								str += '*';
							}		
						} else {
							for( var i = 0; i < $t.val().length; i++ ) {
								str += '*';
							}
						}
						$t.val( str );
						$indicator.removeClass( 'fa-eye' ).addClass( 'fa-eye-slash' );
					}					
				},
				focus: function() {
					var $t = $( this ),
						$indicator = $t.siblings( '.far' ),
						demand = $t.hasClass( 'form-secret-demand' ),
						$n = $t.next( 'input:hidden' );
				
					if( !demand ) {
						$t.val( $n.val() );
						$indicator.removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );			
					}					
				},
				paste: function() {
					var text = e.originalEvent.clipboardData.getData( 'text' ).trim(),
						$t = $( this ),
						$n = $t.next( 'input:hidden' );

					if( text.length ) {
						setTimeout( function() { 
							$n.val( $t.val() );
						}, 100 );
					} else {
						// don't allow pasting of empty spaces
						return false;
					}
				}
			} )
			.each( function() {
				var $t = $( this );
				$t.after( '<input type="hidden" /><i class="far fa-eye btn-status cur-pointer"></i>' );
			} );

			$( '.btn-status' ).on( {
				mousedown: function( e ) {
					var $t = $( this ),
						$input = $t.siblings(' .form-secret' ),
						$n = $t.prev( 'input:hidden' );

					if( $input.val().trim().length ) {
						$input.val( $n.val() );
					}

					$t.removeClass( 'fa-eye-slash' ).addClass( 'fa-eye' );	
				},
				mouseup: function() {
					var $t = $( this ),
						$input = $t.siblings(' .form-secret' ),
						$n = $t.prev( 'input:hidden' ),
						str = '',
						random = $input.hasClass( 'form-secret-random' ),
						fixed = $input.hasClass( 'form-secret-fixed' ),
						demand = $input.hasClass( 'form-secret-demand' );

					if( random ) {
						var random = Math.floor( Math.random() * ( 15 - 5 + 1 ) + 5 );
						for( var i = 0; i < random; i++ ) {
							str += '*';
						}	
					} else if ( fixed ) {
						for( var i = 0; i < 10; i++ ) {
							str += '*';
						}		
					} else {
						for( var i = 0; i < $n.val().length; i++ ) {
							str += '*';
						}
					}
					$input.val( str );
					$t.removeClass( 'fa-eye' ).addClass( 'fa-eye-slash' );
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
				<p>{{- page.description -}}</p>
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
						<pre id="script-output"></pre>
					</div>
				</div>
			</div>
		</div>
	</div>	
</div>
