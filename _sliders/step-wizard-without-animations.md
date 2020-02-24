---
layout: template
permalink: sliders/step-wizard.html
description: We occasionally ask a user to follow a series of like-minded steps for a variety of reasons. One idea I had was to place this functionality into a slider, this is an example of that.
title: Step Wizard Slider 
type: demo
localcss: sliders.css
localjs: slickinit.js
includePrismJs: true
externalcss:
externaljs:
showinnav: true
---

{%- include breadcrumbs.html -%}

<div class="container">

	<div class="row">
		<div class="col">
			<span class="h3 d-block" id="sliderLabel">Slick Slider - Step Wizard Slider</span>
		</div>
	</div>

	<div class="row">
		<div class="col">
			<div class="cdc-card-slider" id="example1">
				<div class="card">
					<div class="card-body">
						<div class="card-title d-none">
							Step 1
						</div>
						<h4 class="text-center">Please fill out the following <small>(not really)</small></h4>
						<div class="form-group">
							<label for="NameDemo">Your Name:</label> <input aria-describedby="nameHelp" class="form-control" id="NameDemo" placeholder="Enter Full Name" type="text"> <small class="form-text text-muted" id="nameHelp">Please enter your full name</small>
						</div>
						<div class="form-group">
							<label for="EmailDemo">Your Email:</label> <input aria-describedby="emailHelp" class="form-control" id="EmailDemo" placeholder="Enter email" type="email"> <small class="form-text text-muted" id="emailHelp">Please enter your primary email, we will send confirmation email!</small>
						</div>
						<div class="form-group">
							<label for="passDemo">Enter Password:</label> <input aria-describedby="passHelp" class="form-control" id="passDemo" placeholder="Password" type="password"> <small class="form-text text-muted" id="passHelp">Must be 8 characters long</small>
						</div>
						<div class="form-check">
							<input class="form-check-input" id="CheckDemo" required="" type="checkbox"> <label class="form-check-label" for="CheckDemo">Agree with Terms &amp; Conditions?</label>
						</div>
					</div>
					<div class="card-footer">
						<button class="float-right btn btn-success btn-next" disabled="disabled">Continue</button>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title d-none">
							Step 2
						</div>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae ea tempora laboriosam quae non possimus quo minus, placeat, ex amet, nulla blanditiis deserunt necessitatibus exercitationem accusantium nesciunt voluptatum? Aliquid.</p>
						<fieldset class="form-group">
							<div class="row">
								<legend class="col-form-label col-sm-2 pt-0">Your option</legend>
								<div class="col-sm-10">
									<div class="form-check">
										<input checked class="form-check-input" id="gridRadios1" name="gridRadios" type="radio" value="option1"> <label class="form-check-label" for="gridRadios1">It is a possibility</label>
									</div>
									<div class="form-check">
										<input class="form-check-input" id="gridRadios2" name="gridRadios" type="radio" value="option2"> <label class="form-check-label" for="gridRadios2">I'm not quite sure</label>
									</div>
									<div class="form-check disabled">
										<input class="form-check-input" disabled id="gridRadios3" name="gridRadios" type="radio" value="option3"> <label class="form-check-label" for="gridRadios3">I am confused</label>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col">
								<button class="btn btn-secondary btn-prev">Previous</button>
							</div>
							<div class="col">
								<button class="float-right btn btn-success btn-next">Next</button>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title d-none">
							Step 3
						</div>
						<p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse unde iusto minus illum amet aliquam dolorum rem, ea aspernatur earum adipisci culpa. Dolore non eligendi velit iure distinctio illum.</span><span>Eligendi beatae repellendus, animi tempore quibusdam impedit illo doloremque asperiores, veniam esse, perferendis quod recusandae adipisci! Facilis dolorem, voluptatibus, ea voluptate sapiente molestias, enim architecto ipsam ut dolores vel recusandae!</span></p>
						<p><span>Labore dolor enim impedit modi culpa corrupti, aliquam, quisquam cumque reiciendis quam eum iusto nam aliquid tenetur amet eius, voluptatibus illum recusandae distinctio deserunt vero quos adipisci id velit! Magnam.</span><span>Sed provident saepe ut libero omnis assumenda quasi obcaecati quod optio, repellat ipsum quisquam dolore accusamus fugiat veritatis, fugit aut itaque. Reiciendis, animi. Nulla laudantium unde ad libero est veritatis?</span></p>
						<div class="form-check">
							<input class="form-check-input" id="defaultCheck1" required="" type="checkbox" value=""> <label class="form-check-label" for="defaultCheck1">Yes, this seems reasonable.</label>
						</div>
					</div>
					<div class="card-footer">
						<div class="row">
							<div class="col">
								<button class="btn btn-secondary btn-prev">Previous</button>
							</div>
							<div class="col">
								<button class="float-right btn btn-success btn-next" disabled="disabled">Next</button>
							</div>
						</div>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<div class="card-title d-none">
							Step 4
						</div>
						<p class="display-1 p-abs-cen">Congratulations</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script id="prism-source" data-line="11-19">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		slickInit( '#example1', {
			'sliderType': '',
			'bodyClass': '',
			'ariaLabel': '',
			'centerMode': false,
			'arrows': false,
			'ariaLabelTarget': 'sliderLabel1',
			'customPaging': function( slick, index ) {
				var t = slick.$slides.eq( index ),
					img = t.find( 'img' ),
					src = img.attr( 'src' ),
					title = t.find( '.card-title' ),
					text = title.text();
				console.log( slick.defaults )
				return text;
			},
			'callback': function( t, d ) {
				t.addClass( 'cdc-arrow-slider' );
			},
			'responsive': [ 
				{ 'breakpoint': 1200,'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } }, 
				{ 'breakpoint': 992,'settings': {	'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 768,'settings': {	'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 576,'settings': {	'slidesToShow': 1, 'slidesToScroll': 1 } },
				{ 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' }
			} ]
		} );
	     
	     $( '.btn-next' ).on( 'click', function() {
	     	$( '.cdc-card-slider' ).slick( 'slickNext' );
	     } );
	     $( '.btn-prev' ).on( 'click', function() {
	     	$( '.cdc-card-slider' ).slick( 'slickPrev' );
	     } );
	     $( 'input:checkbox[required]' ).on( 'click', function() {
	     	$( this ).parents( '.card' ).find( '.btn-next' ).attr( 'disabled', !$( this ).is( ':checked' ) )
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
					<li>Using the slider as a form step wizard.</li>
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
					<div class="col"><pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card">
	<div class="card-body">
		<div class="card-title d-none">
			Step 3
		</div>
		<p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non esse unde iusto minus illum amet aliquam dolorum rem, ea aspernatur earum adipisci culpa. Dolore non eligendi velit iure distinctio illum.</span><span>Eligendi beatae repellendus, animi tempore quibusdam impedit illo doloremque asperiores, veniam esse, perferendis quod recusandae adipisci! Facilis dolorem, voluptatibus, ea voluptate sapiente molestias, enim architecto ipsam ut dolores vel recusandae!</span></p>
		<p><span>Labore dolor enim impedit modi culpa corrupti, aliquam, quisquam cumque reiciendis quam eum iusto nam aliquid tenetur amet eius, voluptatibus illum recusandae distinctio deserunt vero quos adipisci id velit! Magnam.</span><span>Sed provident saepe ut libero omnis assumenda quasi obcaecati quod optio, repellat ipsum quisquam dolore accusamus fugiat veritatis, fugit aut itaque. Reiciendis, animi. Nulla laudantium unde ad libero est veritatis?</span></p>
		<div class="form-check">
			<input class="form-check-input" id="defaultCheck1" required="" type="checkbox" value=""> <label class="form-check-label" for="defaultCheck1">Yes, this seems reasonable.</label>
		</div>
	</div>
	<div class="card-footer">
		<div class="row">
			<div class="col">
				<button class="btn btn-secondary btn-prev">Previous</button>
			</div>
			<div class="col">
				<button class="float-right btn btn-success btn-next" disabled="disabled">Next</button>
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