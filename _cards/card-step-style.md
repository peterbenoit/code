---
layout: template
permalink: cards/card-step-style.html
description: Using Bootstrap 4 Cards in Step card style
title: Card Step Style
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css
externaljs:
showinnav: true
image: step_style.jpg
---

{%- include breadcrumbs.html -%}

<div class="container">
	<div class="row">
		<div class="col-lg-3 d-none d-lg-block border">
			"leftnav"
		</div>
		<div class="col-lg-9">
			<div class="row mb-3">
				<div class="col px-0 px-lg-3">
					<div class="card card-step bt-3 bt-primary">
						<div class="row no-gutters">
							<div class="col-lg-3">
								<div class="card">
									<div class="card-body text-center d-none d-lg-block">
										<i class="fas fa-air-freshener c-primary"></i>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card">
									<div class="card-header">Step 1</div>
									<div class="card-body">Lorem isum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col px-0 px-lg-3">
					<div class="card card-step bt-3 bt-primary">
						<div class="row no-gutters">
							<div class="col-lg-3">
								<div class="card">
									<div class="card-body text-center d-none d-lg-block">
										<i class="fas fa-drumstick-bite c-primary"></i>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card">
									<div class="card-header">Step 2</div>
									<div class="card-body">Lorem isum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-3">
				<div class="col px-0 px-lg-3">
					<div class="card card-step bt-3 bt-primary">
						<div class="row no-gutters">
							<div class="col-lg-3">
								<div class="card">
									<div class="card-body text-center d-none d-lg-block">
										<i class="fas fa-cat c-primary"></i>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card">
									<div class="card-header">Step 3</div>
									<div class="card-body">Lorem isum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div aria-multiselectable="true" class="accordion indicator-plus accordion-white mb-3 mt-3" id="accordion-4" role="tabpanel">
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-3" data-toggle="collapse" id="accordion-4-card-3" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-3">Notes</a>
		</div>
		<div aria-labelledby="accordion-4-card-3" class="collapse show" id="accordion-4-collapse-3" role="tabpanel">
			<div class="card-body">
				<p>Some info on this demo.</p>
				<p>Cards are one of the more flexible components available in the Bootstrap 4 framework, and can be used in a variety of ways. This is a demo of "step style" cards, where each card is a step in a series.</p>
				<p>This demo was built to work with the Template, however it could be easily modified to work with default Bootstrap 4. It includes Font Awesome 5 icons with each card.</p>

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
					<div class="col">
						<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card card-step bt-3 bt-primary">
	<div class="row no-gutters">
		<div class="col-lg-3">
			<div class="card">
				<div class="card-header bg-tertiary h3 r-none"><i class="fas fa-air-freshener c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">01</span></div>
				<div class="card-body text-center d-none d-lg-block">
					<i class="fas fa-air-freshener c-primary"></i>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card">
				<div class="card-header">Header 1</div>
				<div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
			</div>
		</div>
	</div>
</div></script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
