---
---

<html class="theme-blue" lang="en">
<head>
	<meta charset="UTF-8">
	<title>slick slider center mode - Thumbnail Slider</title>
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<link href='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/css/bootstrap.css' rel='stylesheet'>
	<link href='https://www.cdc.gov/TemplatePackage/4.0/assets/css/app.min.css' rel='stylesheet'>
	<link href='https://codepen.io/peterbenoit/pen/xxxXwMQ.css' rel='stylesheet'>
	<style>
	 .cdc-thumbnail-slider .slick-slide {
	 margin: 10px 1px;
	}
	.cdc-thumbnail-slider .slick-slide.slick-active {
	 box-shadow: none;
	}
	</style>
</head>
<body translate="no">
	<div class="container d-flex flex-wrap body-wrapper">
		<main aria-label="Main Content Area" class="col-12 order-lg-2" role="main">
			<div class="container">
				<div class="row">
					<div class="col-lg-9">
						<span class="h3" id="sliderLabel">Thumbnail Slider</span>
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
							<div class="card">
								<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/822/700/300">
								<div class="card-body">
									<div class="card-title h4 text-left">
										Card Title 4
									</div>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
								</div>
							</div>
							<div class="card">
								<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/813/700/300">
								<div class="card-body">
									<div class="card-title h4 text-left">
										Card Title 5
									</div>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
								</div>
							</div>
							<div class="card">
								<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/849/700/300">
								<div class="card-body">
									<div class="card-title h4 text-left">
										Card Title 6
									</div>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
								</div>
							</div>
							<div class="card">
								<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/820/700/300">
								<div class="card-body">
									<div class="card-title h4 text-left">
										Card Title 7
									</div>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
								</div>
							</div>
							<div class="card">
								<img alt="Card image cap" class="card-img-top" src="https://picsum.photos/id/821/700/300">
								<div class="card-body">
									<div class="card-title h4 text-left">
										Card Title 8
									</div>
									<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sapiente quibusdam labore adipisci.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/jquery.min.js'>
	</script> 
	<script src='https://www.cdc.gov/TemplatePackage/4.0/assets/vendor/js/bootstrap.bundle.min.js'>
	</script> 
	<script src='https://codepen.io/peterbenoit/pen/yLLbKzE.js'>
	</script> 
	<script src='https://codepen.io/peterbenoit/pen/xxxXwMQ.js'>
	</script> 
	<script id="rendered-js">
	     $( function() {
	   slickInit( '.cdc-card-slider', {
	       'sliderType': 'thumbnail',
	       'bodyClass': '',        
	       'ariaLabel': '',
	       'centerMode': false,
	       'ariaLabelTarget': 'sliderLabel',
	       'callback': function( slider ) {
	           slider.addClass( 'cdc-thumbnail-slider' );
	       },
	       'responsive': [ 
	           { 'breakpoint': 1200, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4 } },         
	           { 'breakpoint': 992, 'settings': { 'slidesToShow': 4, 'slidesToScroll': 4 } },
	           { 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },          
	           { 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
	           { 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }
	       ]
	   } );
	} );
	</script>
</body>
</html>