---
layout: template
permalink: other/focus-indicator.html
description: The ability to highlight an element or component with a focus indicator is a major contributing factor to making a page Section 508 accessible. The default browser indicator can vary depending on the users operating system, and the browser they use. 
title: Focus Indicator
type: demo
localcss: 
localjs: slickinit.js
includePrismJs: false
externalcss: 
externaljs: 
---

<style>
	.btn-primary:focus, .btn-primary.focus,
	.btn-secondary:focus, .btn-secondary.focus,
	.btn-tertiary:focus, .btn-tertiary.focus,
	.btn-quaternary:focus, .btn-quaternary.focus,
	.btn-success:focus, .btn-success.focus,
	.btn-danger:focus, .btn-danger.focus,
	.btn-warning:focus, .btn-warning.focus,
	.btn-info:focus, .btn-info.focus,
	.btn-light:focus, .btn-light.focus,
	.btn-dark:focus, .btn-d.focus,
	.btn:focus, .btn.focus,
	.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus,
	.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus,
	.btn-tertiary:not(:disabled):not(.disabled):active:focus, .btn-tertiary:not(:disabled):not(.disabled).active:focus, .show > .btn-tertiary.dropdown-toggle:focus,
	.btn-quaternary:not(:disabled):not(.disabled):active:focus, .btn-quaternary:not(:disabled):not(.disabled).active:focus, .show > .btn-quaternary.dropdown-toggle:focus,
	:focus,
	.form-control:focus {
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(255, 102, 1, 0.5);
		transition: box-shadow 0.2s ease-in-out;
	}

	.btn-primary:not(:disabled):not(.disabled):active, 
	.btn-primary:not(:disabled):not(.disabled).active, 
	.show > .btn-primary.dropdown-toggle {
		background-color: #005eaa;
	}	

	.btn-secondary:not(:disabled):not(.disabled):active, 
	.btn-secondary:not(:disabled):not(.disabled).active, 
	.show > .btn-secondary.dropdown-toggle {
		background-color: #88c3ea;
	}

	.btn-tertiary:not(:disabled):not(.disabled):active, 
	.btn-tertiary:not(:disabled):not(.disabled).active, 
	.show > .btn-tertiary.dropdown-toggle {
		background-color: #c0e9ff;
	}

	.btn-quaternary:not(:disabled):not(.disabled):active, 
	.btn-quaternary:not(:disabled):not(.disabled).active, 
	.show > .btn-quaternary.dropdown-toggle {
		background-color: #edf9ff;
	}

	.btn-primary.dropdown-toggle + .dropdown-menu > .dropdown-item.active, 
	.btn-primary.dropdown-toggle + .dropdown-menu > .dropdown-item:active {
		background-color: #005eaa;
	}		

	.btn-secondary.dropdown-toggle + .dropdown-menu > .dropdown-item.active, 
	.btn-secondary.dropdown-toggle + .dropdown-menu > .dropdown-item:active {
		background-color: #88c3ea;
	}

	.btn-tertiary.dropdown-toggle + .dropdown-menu > .dropdown-item.active, 
	.btn-tertiary.dropdown-toggle + .dropdown-menu > .dropdown-item:active {
		background-color: #c0e9ff;
	}

	.btn-quaternary.dropdown-toggle + .dropdown-menu > .dropdown-item.active, 
	.btn-quaternary.dropdown-toggle + .dropdown-menu > .dropdown-item:active {
		background-color: #edf9ff;
	}	
</style>

{%- include breadcrumbs.html -%}

<div class="container mb-5">
	{%- include demo/form-elements.html -%}

	{%- include demo/bootstrap4-form-elements.html -%}

	{%- include demo/html5-standard-elements.html -%}

	{%- include demo/template-package-components.html -%}
</div>

<script>
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

			$( 'a[href="#"]' ).on( 'click', function(e) {
				e.preventDefault();
			} );

			$( document ).on( 'keyup', function(e) {
				console.log( $(":focus") )
			} )

			slickInit( '.cdc-card-slider', {
				'sliderType': 'standard',
				'bodyClass': '',        
				'ariaLabel': '',
				'centerMode': false,
				'ariaLabelTarget': 'sliderLabel',
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
