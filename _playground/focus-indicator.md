---
layout: template
permalink: other/focus-indicator.html
description: Focus indicator on a variety of elements
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

	<h1 class="bb-1 pt-5 mb-3">HTML5 Standard Elements</h1>
	<!-- if an anchor wraps an element, you may need to add inline-block or block to it in order for the focus to appear properly -->
	<a href="#">Standard Link</a>
	<a href="#" class="d-block mt-3"><h3>Heading in a link</h3></a>
	<a href="#" class="d-inline-block mt-3"><img src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg" style="width: 250px"></a>
	<a href="#" class="d-block mt-3"><p>Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nam. Mollitia corrupti provident esse ex saepe labore nulla assumenda deserunt eaque. Ullam in exercitationem earum temporibus corrupti sunt suscipit enim?</p></a>
	<a href="#" class="d-inline-block mt-3"><div class="bb-1 bg-primary" style="width: 150px; height: 150px;">DIV</div></a>


	<h1 class="bb-1 pt-5 mb-3">Boostrap 4 Components</h1>
	<a href="#" class="d-block td-none">
		<div class="jumbotron">
			<h1 class="display-4">Standard jumbotron wrapped in an Anchor</h1>
			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr class="my-4">
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p class="lead"><span class="btn btn-primary btn-lg" role="button">Learn more</span></p>
		</div>
	</a>

	<a href="#" class="d-inline-block td-none mt-3">
		<div class="card" style="width: 18rem;">
			<img alt="Card image cap" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
			<div class="card-body">
				<h5 class="card-title">Card wrapped in an Anchor</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<span class="btn btn-primary" href="#">Go somewhere</span>
			</div>
		</div>
	</a>

	<div class="dropdown mt-3">
		<button aria-expanded="false" aria-haspopup="true" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" type="button">Dropdown button</button>
		<div aria-labelledby="dropdownMenuButton" class="dropdown-menu">
			<a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another action</a> <a class="dropdown-item" href="#">Something else here</a>
		</div>
	</div>
	
	<div class="accordion accordion-white mt-3" id="accordionTabs_3">
		<div class="tabs-module">
			<ul class="nav nav-tabs no-syndicate" id="tabs-3" role="tablist">
				<li class="nav-item">
					<a class="nav-link active" data-toggle="tab" href="#tabs-3-1" role="tab">Getting Started</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#tabs-3-2" role="tab">Troubleshooting</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" data-toggle="tab" href="#tabs-3-3" role="tab">Getting Help</a>
				</li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane active" id="tabs-3-1" role="tabpanel">
					<p>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
					<p class="offset1">A: <a href="#">Ut enim ad minim veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p>Q: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?</p>
					<p class="offset1">A: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div class="tab-pane" id="tabs-3-2" role="tabpanel">
					<p>Q: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?</p>
					<p class="offset1">A: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p>Q: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?</p>
					<p class="offset1">A: Neque <a href="#">porro quisquam est, qui dolorem</a> ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
				</div>
				<div class="tab-pane" id="tabs-3-3" role="tabpanel">
					<p>Q: At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi?</p>
					<p class="offset1">A: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<p>Q: Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing</a> elit?</p>
					<p class="offset1">A: Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
				</div>
			</div>
		</div>
	</div>

	<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mt-3" id="accordion-4" role="tabpanel">
		<div class="card bar">
			<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-1" data-toggle="collapse" id="accordion-4-card-1" role="tab">
				<button class="btn btn-link card-title" data-controls="accordion-4-collapse-1">
					Accordion Section A
				</button>				
			</div>
			<div aria-labelledby="accordion-4-card-1" class="collapse" id="accordion-4-collapse-1" role="tabpanel">
				<div class="card-body">
					<p>This accordion allows the visitor to expand multiple individual panels.&nbsp; This option is controlled in the accordion Settings pop-up. Note that an expand/collapse module is inserted above and below the accordion.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</div>
			</div>
		</div>
		<div class="card bar">
			<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-2" data-toggle="collapse" id="accordion-4-card-2" role="tab">
				<button class="btn btn-link card-title" data-controls="accordion-4-collapse-2">
					Accordion Section B
				</button>				
			</div>
			<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
				<div class="card-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
		<div class="card bar">
			<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
				<button class="btn btn-link card-title" data-controls="accordion-4-collapse-3">
					Accordion Section C
				</button>				
			</div>
			<div aria-labelledby="accordion-4-card-3" class="collapse" id="accordion-4-collapse-3" role="tabpanel">
				<div class="card-body">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</div>
	</div>	

	<h1 class="bb-1 pt-5 mb-3">Template Package 4 Components</h1>
	<div class="cdc-card-slider">
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
	</div>
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
