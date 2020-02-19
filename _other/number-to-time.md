---
layout: template
permalink: other/number-to-time.html
description: Jira auto-converts numbers into time for time tracking. An example of this would be 1.5 converts to 1 hour and 30 minutes. I thought re-creating that would be a fun exercise, so here's what I came up with.
title: Number to Time converter
type: demo
localcss: 
localjs:
includePrismJs: true
externalcss: 
externaljs: https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js
showinnav: true
order: 
---

<style>
	.form-control {
		display: inline-block;
	}
</style>

{%- include breadcrumbs.html -%}

<div class="container d-flex flex-wrap body-wrapper">
	<main class="col-12 order-lg-2" role="main" aria-label="Main Content Area">

		<p>Converts a number into a relative time. </p>

		<p>Examples:</p>
		<ul>
			<li><span>0.5</span> => <span id="pointfive"></span></li>
			<li><span>1.5</span> => <span id="onepointfive"></span></li>
			<li><span>120</span> => <span id="onetwenty"></span></li>
			<li><span>24.75</span> => <span id="twentyfoursevenfive"></span></li>
			<li><span>9e9</span> => <span id="nineenine"></span></li>	
		</ul>
		
		<p>Or try your own:</p>
		<input type="number" id="number" oninput="calcTime( this.value, 'time' )" placeholder="Number" class="form-control w-50">
		<span id="time"></span>

	</main>
</div>

<script id="prism-source">
	var calcTime;

    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {

			calcTime = function( input, target ) {
				input = _.toNumber( input );
				var timevalue = 0;
				
				if( _.isNumber( input ) && !_.isNaN( input ) ) {
					if( input < 1 ) {
						timevalue = ( input * 60 )  + ' minutes';
					} else {
						input = input.toString().split( '.' );

						if( input[0] < 60 ) {
							if( input[1] ) {
								input[1] = ( _.toNumber( '.' + input[1] ) * 60 );
								timevalue = input[0] + ' hours ' + _.round( input[1] ) + ' minutes';
							} else {
								timevalue = input[0] + ' minutes';
							}
						} else {
							if( input[1] ) {
								input[1] = ( _.toNumber( '.' + input[1] ) * 60 );
								timevalue = input[0] + ' hours ' + _.round( input[1] ) + ' minutes';
							} else {
								timevalue = ( input[0] / 60 );
								timevalue = _.round( timevalue, 2 ) + ' hours';
							}
						}
					}
				}
				
				document.getElementById( target ).innerText = timevalue;
			}

			calcTime( 0.5, 'pointfive' );
			calcTime( 1.5, 'onepointfive' );
			calcTime( 120, 'onetwenty' );
			calcTime( 24.75, 'twentyfoursevenfive' );
			calcTime( 9e9, 'nineenine' );

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
