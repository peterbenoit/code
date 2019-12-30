---
---

<html lang="en">
<head>
<meta charset="UTF-8">
<title>CodePen - Card-o-sel or Thumbnail Slider</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet' href='https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css'>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700'>
<style>
body {
  font-family: 'Open Sans', sans-serif;
}

.carousel-indicators1 {
  right: 0;
  bottom: -30px;
}
.carousel-indicators1 li {
  outline: 1px solid lightgray;
}
.carousel-indicators1 .active {
  outline: 1px solid black;
}

img {
  height: 200px;
}
</style>
</head>
<body translate="no">
<div class="container mt-3 mb-5">
<div class="row">
<div class="col">

<div class="carousel slide carousel-multi-item" data-ride="carousel" id="multi-item-example">

<div class="controls-top float-right">
<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example"><i class="fa fa-chevron-left"></i></a> <a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example"><i class="fa fa-chevron-right"></i></a>
</div>
<h3 class="d-inline-block mb-3">Card Carousel</h3>
<div class="carousel-inner" role="listbox">

<div class="carousel-item active">
<div class="row">
<div class="col-md-4">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
</div>
</div>

<div class="carousel-item">
<div class="row">
<div class="col-md-4">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
</div>
</div>

<div class="carousel-item">
<div class="row">
<div class="col-md-4">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
</div>
<div class="col-md-4 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg">
<div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

<div class="carousel slide carousel-multi-item" data-ride="carousel" id="multi-item-example1">
<h3 class="d-inline-block mb-3">Card Carousel Images Only</h3>
<div class="controls-bottom pull-right">
<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example1"><i class="fa fa-chevron-left"></i></a> <a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example1"><i class="fa fa-chevron-right"></i></a>
</div>

<div class="carousel-inner" role="listbox">

<div class="carousel-item active">
<div class="row">
<div class="col-md-3">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg"></div>
</div>
</div>
</div>

<div class="carousel-item">
<div class="row">
<div class="col-md-3">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg"></div>
</div>
</div>
</div>

<div class="carousel-item">
<div class="row">
<div class="col-md-3">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg"></div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card"><img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg"></div>
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

<div class="carousel slide carousel-multi-item" data-ride="carousel" id="multi-item-example2">
<h3 class="d-inline-block mb-3">Card Carousel Images with Titles</h3>
<div class="controls-bottom pull-right">
<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example2"><i class="fa fa-chevron-left"></i></a> <a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example2"><i class="fa fa-chevron-right"></i></a>
</div>

<div class="carousel-inner" role="listbox">

<div class="carousel-item active">
<div class="row">
<div class="col-md-3">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
 </div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
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
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
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
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(36).jpg">
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
<div class="container mt-5 mb-5">
<div class="row">
<div class="col">

<div class="carousel slide carousel-multi" data-ride="carousel" id="multi-item-example3">
<h3 class="d-inline-block mb-3">Card Carousel Images</h3>
<div class="controls-bottom pull-right">
<a class="btn btn-outline-secondary prev" data-slide="prev" href="#multi-item-example3"><i class="fa fa-chevron-left"></i></a> <a class="btn btn-outline-secondary next" data-slide="next" href="#multi-item-example3"><i class="fa fa-chevron-right"></i></a>
</div>

<div class="carousel-inner" role="listbox">

<div class="carousel-item active">
<div class="row">
<div class="col-md-3">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
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
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
 <div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
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
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(34).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(18).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
<div class="card-body">
<div class="card-title">
Card Title
</div>
</div>
</div>
</div>
<div class="col-md-3 clearfix d-none d-md-block">
<div class="card">
<img alt="Card image cap" class="img-fluid" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-4/img%20(35).jpg">
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
<li class="active" data-slide-to="0" data-target="#multi-item-example3"></li>
<li data-slide-to="1" data-target="#multi-item-example3"></li>
<li data-slide-to="2" data-target="#multi-item-example3"></li>
</ol>
</div>
</div>
</div>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src='https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/js/bootstrap.bundle.js'></script>
<script id="rendered-js">
$('.carousel.carousel-multi .carousel-item').each(function () {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));

	if (next.next().length > 0) {
		next.next().children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this));
	}
	else {
		$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
});
    </script>
</body>
</html>
