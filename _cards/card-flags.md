---
layout: bootstrap
permalink: cards/card-flags.html
description: Adding flags (indicators) to Bootstrap 4 Cards
title: Bootstrap 4 Card Flags
type: demo
localcss: flags.css
localjs:
includePrismJs: true
externalcss:
externaljs:
showinnav: true
image: columns.jpg
---

<p></p>

<div class="container">
	<div class="card-deck w-75">
		<div class="card w-25 m-5">
			<img src="https://www.cdc.gov/homepage/images/cards/beaches-and-pools-720x400px.jpg" alt="" class="card-img-top">
			<span class="card-flag card-flag-left">NEW</span>
			<div class="card-body ">
				<div class="card-title h4 text-left">Left Aligned</div>
				<p>In or out of the water, stay at least 6 feet away from people you don’t live with.</p>
			</div>	
		</div>
	
		<div class="card w-25 m-5">
			<img src="https://www.cdc.gov/homepage/images/cards/beaches-and-pools-720x400px.jpg" alt="" class="card-img-top">
			<span class="card-flag card-flag-right">New</span>
			<div class="card-body ">
				<div class="card-title h4 text-left">Right Aligned</div>
				<p>In or out of the water, stay at least 6 feet away from people you don’t live with.</p>
			</div>	
		</div>	
	</div>
</div>
<div class="container">
	<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
		<div class="card">
			<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
				<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
			</div>
			<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
				<div class="card-body">
					<p>Some info on this demo.</p>
					<p>Card flags on Bootstrap 4 cards.</p>
				</div>
			</div>
		</div>
	</div>
</div>
