---
layout: template
permalink: other/focus-indicator.html
description: Focus indicator on a variety of elements
title: Focus Indicator
type: demo
localcss: 
localjs:
includePrismJs: false
externalcss: 
externaljs: 
---

<style>
	.btn-primary:focus, .btn-primary.focus,
	.btn-secondary:focus, .btn-secondary.focus,
	.btn-success:focus, .btn-success.focus,
	.btn-danger:focus, .btn-danger.focus,
	.btn-warning:focus, .btn-warning.focus,
	.btn-info:focus, .btn-info.focus,
	.btn-light:focus, .btn-light.focus,
	.btn-dark:focus, .btn-d.focus,
	.btn:focus, .btn.focus,
	:focus,
	.form-control:focus {
		outline: 0;
		box-shadow: 0 0 0 0.2rem rgba(255, 102, 1, 0.5);
	}
</style>

{%- include breadcrumbs.html -%}

<div class="container mb-5">
	{%- include demo/form-elements.html -%}

	{%- include demo/bootstrap4-form-elements.html -%}

	<h1 class="bb-1 pt-5 mb-3">HTML5 Standard Elements</h1>
	<!-- if an anchor wraps an element, you may need to add inline-block or block to it in order for the focus to appear properly -->
	<a href="#">Standard Link</a>
	<a href="#" class="d-block"><h3>Heading in a link</h3></a>
	<a href="#" class="d-inline-block"><img src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg" style="width: 250px"></a>
	<a href="#" class="d-block"><p>Paragraph: Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, nam. Mollitia corrupti provident esse ex saepe labore nulla assumenda deserunt eaque. Ullam in exercitationem earum temporibus corrupti sunt suscipit enim?</p></a>
	<a href="#" class="d-inline-block"><div class="bb-1 bg-primary" style="width: 150px; height: 150px;">DIV</div></a>


	<h1 class="bb-1 pt-5 mb-3">Boostrap 4 Elements</h1>
	<a href="#" class="d-block td-none">
		<div class="jumbotron">
			<h1 class="display-4">Standard jumbotron wrapped in an Anchor</h1>
			<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr class="my-4">
			<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			<p class="lead"><span class="btn btn-primary btn-lg" role="button">Learn more</span></p>
		</div>
	</a>

	<a href="#" class="d-inline-block td-none">
		<div class="card" style="width: 18rem;">
			<img alt="Card image cap" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
			<div class="card-body">
				<h5 class="card-title">Card wrapped in an Anchor</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<span class="btn btn-primary" href="#">Go somewhere</span>
			</div>
		</div>
	</a>	
</div>

