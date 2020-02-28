---
layout: bootstrap
permalink: cards/image-cards.html
description: Different layouts or flavors for Bootstrap 4 cards as images
title: Image Cards
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss:
externaljs:
showinnav: true
image: image.jpg
---

<style>
	/* demo css */
	img {
		width: 100%;
	}

	.row {
		margin-bottom: 1rem;
	}
</style>

<p></p>

<div class="container">
	<div class="row">
		<div class="col">
			<div class="card card-text-top card-gradient-top card-inverse text-top">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(1).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title">Text Top</h4>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card card-text-right card-gradient-right card-inverse text-right">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(2).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title">Text Right</h4>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card card-text-bottom card-gradient-bottom card-inverse text-bottom">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(3).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title">Text Bottom</h4>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="card card-text-left card-gradient-left card-inverse text-left">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(4).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title">Text Left</h4>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card card-inverse card-gradient-center card-text-middle text-center ">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(5).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title">Text Center</h4>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<div class="card card-text-left card-gradient-left card-inverse text-left">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(6).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title rotate-90-left">Rotate Text Left</h4>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card card-text-right card-gradient-right card-inverse text-right">
				<!-- Image -->
				<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(7).jpg">
				<!-- Text Overlay -->
				<div class="card-img-overlay">
					<h4 class="card-title rotate-90-right">Rotate Text Right</h4>
				</div>
			</div>
		</div>
	</div>

<pre><code class="language-markup line-numbers"><script type="prism-html-markup"><div class="card card-inverse card-gradient-center card-text-middle text-center">
	<!-- Image -->
	<img alt="Cityscape" class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(7).jpg">
	<!-- Text Overlay -->
	<div class="card-img-overlay">
		<h4 class="card-title">Text Center</h4>
	</div>
</div></script></code></pre>

</div>