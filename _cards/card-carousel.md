---
layout: bootstrap
permalink: cards/card-carousel.html
description: Using cards in the Bootstrap 4 Carousel
title: Card Carousel
type: demo
localcss: cards.css
localjs:
includePrismJs: true
externalcss:
externaljs: https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js
---

<style>
	.carousel-indicators {
		right: 0;
		bottom: -30px;
	}

	.carousel-indicators li {
		outline: 1px solid lightgray;
	}

	.carousel-indicators .active {
		outline: 1px solid black;
	}

	/* remove the bottom margin on the card title if it's the only child  */
	.card-body .card-title:only-child {
		margin-bottom: 0;
	}
</style>

<div class="container mt-3 mb-5">
	<div class="row">
		<div class="col">
			<div class="carousel slide carousel-multi-item" data-interval="false" id="multi-item-example">
				<div class="controls-top float-right">
					<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example"><i class="fas fa-angle-left"></i></a> 
					<a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example"><i class="fas fa-angle-right"></i></a>
				</div>
				<h3 class="d-inline-block mb-3">Card Carousel</h3>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="row">
							<div class="col-md-4">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-4">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-4">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg">
									<div class="card-body">
										<h4 class="card-title">Card title</h4>
										<p class="card-text">Some quick example text to build on the card title and
											make up the bulk of the card's content.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ol class="carousel-indicators carousel-indicators1">
					<li class="active" data-slide-to="0" data-target="#multi-item-example"></li>
					<li data-slide-to="1" data-target="#multi-item-example"></li>
					<li data-slide-to="2" data-target="#multi-item-example"></li>
				</ol>
			</div>
		</div>
	</div>
</div>
<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col">
			<div class="carousel slide carousel-multi-item" data-interval="false" id="multi-item-example1">
				<h3 class="d-inline-block mb-3">Card Carousel Images Only</h3>
				<div class="controls-top float-right">
					<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example1"><i class="fas fa-angle-left"></i></a> <a class="btn btn-outline-secondary next"
						data-slide="next" href="#multi-item-example1"><i class="fas fa-angle-right"></i></a>
				</div>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="row">
							<div class="col-md-3">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-3">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-3">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card"><img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
								</div>
							</div>
						</div>
					</div>
				</div>
				<ol class="carousel-indicators carousel-indicators1 mt-4">
					<li class="active" data-slide-to="0" data-target="#multi-item-example1"></li>
					<li data-slide-to="1" data-target="#multi-item-example1"></li>
					<li data-slide-to="2" data-target="#multi-item-example1"></li>
				</ol>
			</div>
		</div>
	</div>
</div>
<div class="container mt-5 mb-5">
	<div class="row">
		<div class="col">
			<div class="carousel slide carousel-multi-item" data-interval="false" id="multi-item-example2">
				<h3 class="d-inline-block mb-3">Card Carousel Images with Titles</h3>
				<div class="controls-top float-right">
					<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example2"><i class="fas fa-angle-left"></i></a> <a class="btn btn-outline-secondary next"
						data-slide="next" href="#multi-item-example2"><i class="fas fa-angle-right"></i></a>
				</div>
				<div class="carousel-inner" role="listbox">
					<div class="carousel-item active">
						<div class="row">
							<div class="col-md-3">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-3">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item">
						<div class="row">
							<div class="col-md-3">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3 clearfix d-none d-md-block">
								<div class="card">
									<img alt="Card image cap" class="img-fluid"
										src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
									<div class="card-body">
										<div class="card-title">
											Card Title
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ol class="carousel-indicators carousel-indicators1 mt-4">
					<li class="active" data-slide-to="0" data-target="#multi-item-example2"></li>
					<li data-slide-to="1" data-target="#multi-item-example2"></li>
					<li data-slide-to="2" data-target="#multi-item-example2"></li>
				</ol>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col">
			<pre id="script-output"></pre>
		</div>
	</div>
</div>

<script id="prism-source">
window.addEventListener( 'DOMContentLoaded', function() {
	( function( $ ) {

		// enable swiping on BS4 carousel
		$( '.carousel' ).swipe( {
			swipe: function( event, direction, distance, duration, fingerCount, fingerData ) {
				if ( 'left' === direction ) { $( this ).carousel( 'next' ); }
				if ( 'right' === direction ) { $( this ).carousel( 'prev' ); }
			},
			allowPageScroll: 'vertical'
		} );

	} )( jQuery );
} );
</script>