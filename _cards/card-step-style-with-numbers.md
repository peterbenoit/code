---
layout: template
permalink: cards/card-step-style-with-numbers.html
description: Using Bootstrap 4 Cards in Step card style with numbers
title: Card Step Style with Numbers
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css
externaljs:
showinnav: true
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
									<div class="card-header d-none bg-tertiary h3 r-none"><i class="fas fa-air-freshener c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">01</span></div>
									<div class="card-body text-center d-none d-lg-block">
										<span class="fa-stack c-primary">
											<span class="far fa-circle fa-stack-2x"></span>
											<strong class="fa-stack-1x">
											<span class="number">1</span>    
											</strong>
										</span>
									</div>
								</div>
							</div>
							<div class="col">
								<div class="card">
									<div class="card-header">Header 1</div>
									<div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
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
									<div class="card-header d-none bg-tertiary h3 r-none"><i class="fas fa-drumstick-bite c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">02</span></div>
									<div class="card-body text-center d-none d-lg-block">
										<span class="fa-stack c-primary">
											<span class="far fa-circle fa-stack-2x"></span>
											<strong class="fa-stack-1x">
											<span class="number">2</span>    
											</strong>
										</span>
									</div>
								</div>
							</div>					
							<div class="col">
								<div class="card">
									<div class="card-header">Header 2</div>
									<div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
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
									<div class="card-header d-none bg-tertiary h3 r-none"><i class="fas fa-cat c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">03</span></div>
									<div class="card-body text-center d-none d-lg-block">
										<span class="fa-stack c-primary">
											<span class="far fa-circle fa-stack-2x"></span>
											<strong class="fa-stack-1x">
											<span class="number">3</span>    
											</strong>
										</span>
									</div>
								</div>
							</div>					
							<div class="col">
								<div class="card">
									<div class="card-header">Header 3</div>
									<div class="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus adipisci culpa perferendis doloribus quam esse eos iste commodi, asperiores odio alias sunt laborum. Ducimus facilis adipisci consectetur ipsam numquam praesentium?</div>
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
				<ol>
					<li>See <a href="card-step-style.html">Card Step Style</a> for details on this demo.</li>
					<li>The numbers are created using Font Awesome, detailed in <a href="/code/2020/01/06/using-numbers-in-font-awesome-5.html">this post</a>.</li>
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
					<div class="col">
						<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card card-step bt-3 bt-primary">
	<div class="row no-gutters">
		<div class="col-lg-3">
			<div class="card">
				<div class="card-header bg-tertiary h3 r-none"><i class="fas fa-air-freshener c-primary d-lg-none mr-1"></i>Step <span class="d-lg-block">01</span></div>
				<div class="card-body text-center d-none d-lg-block">
					<span class="fa-stack c-primary">
						<span class="far fa-circle fa-stack-2x"></span>
						<strong class="fa-stack-1x">
						<span class="number">1</span>    
						</strong>
					</span>
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
	<div class="card">
		<div aria-expanded="false" class="card-header collapsed" data-target="#accordion-4-collapse-2" data-toggle="collapse" id="accordion-4-card-2" role="tab">
			<a class="card-title" data-controls="accordion-4-collapse-2">SCSS</a>
		</div>
		<div aria-labelledby="accordion-4-card-2" class="collapse" id="accordion-4-collapse-2" role="tabpanel">
			<div class="card-body">
				<div class="row">
					<div class="col">
						<pre><code class="language-css line-numbers"><script type="prism-html-markup">.card-step {
	.card-body {
		i, span {
			&.fas, &.far, &.fa-stack {
				font-size:10vw;
				+.fa-stack-1x {
					font-size: 7vw;
				}
			} 
		}
		
		.fa-stack {
			height: 1em;
			width: 1em;
			line-height: 1em;
		}
	}
}</script></code></pre>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

