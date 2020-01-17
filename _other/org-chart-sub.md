---
layout: template
permalink: other/org-chart-sub.html
description: 
title: Org Chart Sub
type: demo
localcss: 
localjs:
includePrismJs: false
externalcss: 
externaljs:  
showinnav: false
order: 
---

{%- include breadcrumbs.html -%}

<style>

@media (min-width: 576px) { 
	.org-chart img {
		
	}	
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { 
	.org-chart img {
		width: 110px;
		height: 110px;
		border-radius: 50% !important;
		margin-right: 10px;
		float: left;
	}
	.org-chart .pl-5 {
		padding-left:3rem!important;
	}	
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { 
	
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {  }
	/* https://codepen.io/peterbenoit/pen/LYYjGYY */

.org-chart .pl-5 {
	padding-left:1rem!important;
}
.org-chart img {
	border-radius: 50% !important;
	width: 90px;
	height: 90px;
	margin-left: auto;
	margin-right: auto;
	display: block;
}





.org-chart.bg-primary {
  color: #000 !important;
}
.org-chart .card-body {
  position: relative;
}
.org-chart .card-body.bg-tertiary {
  border-bottom: 1px dashed;
}
.org-chart p {
  margin-bottom: 2px;
}
.org-chart h4 {
  font-weight: bold;
}
.org-chart a:not(.btn) {
  color: #005eaa !important;
  display: block;
}
.org-chart a:not(.btn) + a span {
  margin-left: 10px;
  font-size: 30px;
}
.org-chart .cdc-icon-arrow-alt-circle-down-solid {
  font-size: 30px;
}
.org-chart .cdc-icon-chevron-circle-right {
  font-size: 24px;
}

.org-chart .badge {
  position: absolute;
  left: 100px;
  top: 90px;
  padding: 8px 10px;
  border: 1px solid #c0c0c0;
}
.org-chart ul {
  list-style-type: none;
  padding-left: 0 !important;
}
.org-chart ul li {
  overflow: hidden;
}
.org-chart ul li ul {
  padding-left: 55px !important;
}

</style>

<div class="container">
	<span class="h3 d-block">Org Chart</span>
	<div class="row org-chart">
		<div class="col-md-3 vh100 d-none d-md-block" style="border: 1px solid #005eaa">left nav</div>
		<div class="col-md-9">
			<h1 id="content">CDC Organization Chart</h1>
			<div class="row">
				<div class="col">
					<div class="card">
						<div class="card-body bg-tertiary">
							<img src="https://www.cdc.gov/about/images/leadership/leaders/pdd.jpg" class="ml-0 mr-3 float-left" alt="">
							<h4>Principal Deputy Director</h4>
							<a href="https://www.cdc.gov/about/leadership/director.htm">Anne Schuchat, MD (RADM, USPHS, RET)</a>
							<a href="org-chart.html" class="d-inline-block"><span class="cdc-icon-arrow-alt-circle-left-solid"></span></a> <a class="d-inline-block" href="org-chart.html">Go Up a Level</a>	
						</div>
						<div class="card-body bg-quaternary pl-md-5">
							<img src="https://www.cdc.gov/about/images/leadership/leaders/niosh.jpg" class="mr-md-3" alt="">
							<h4>Director for National Institute for Occupational Safety and Health</h4>
							<a href="https://www.cdc.gov/about/leadership/leaders/noish.html">John Howard, MD, MPH, JD, LLM, MBA</a>
												
						</div>
						<div class="card-body bg-quaternary pl-md-5">
							<img src="https://www.cdc.gov/about/images/leadership/leaders/DDPHSIS.jpg" class="mr-md-3" alt="">
							<h4>Deputy Director for Public Health Service and Implementation Science</h4>
							<a href="https://www.cdc.gov/about/leadership/leaders/ddphsis.html">Stephen C. Redd, MD (RADM, USPHS)</a>
						</div>
						<div class="card-body bg-quaternary pl-md-5">
							<img src="https://www.cdc.gov/about/images/leadership/leaders/ophss.jpg" class="mr-md-3" alt="">
							<h4>Deputy Director for Public Health Science and Surveillance</h4>
							<a href="https://www.cdc.gov/about/leadership/leaders/ophss.html">Chesley Richards, MD, MPH, FACP</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-3 mt-3">
				<div class="col">
					<div class="card bg-gray-l2">
						<div class="card-body">
							<a href="#" target="new">CDC Organizational Chart with Photos<span class="sr-only">pdf icon</span><span class="fi cdc-icon-pdf x16 fill-pdf" aria-hidden="true"></span><span class="file-details">[PDF – 583 KB]</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {
    
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
					<li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
				</ol>
			</div>
		</div>
	</div>
</div>
