---
layout: template
permalink: other/mobile-share-bar.html
description: This is a 2020 version of the share bar that is only visible in mobile.
title: Mobile Share Bar
type: demo
localcss: 
localjs:
includePrismJs: false
externalcss: 
externaljs:  
showinnav: true
order: 
---

{%- include breadcrumbs.html -%}

<style>

.cdc-icon-fb {
  color: #3b5998;
}

.cdc-icon-twitter-white {
  color: #00b6f1;
}

.navbar {
  display: none;
}

.navbar[style*='display: block'] {
  display: -webkit-box !important;
  display: flex !important;
}

[class*='cdc-icon-linkedin'] {
  color: #007bb5;
}

.cdc-icon-email {
  color: #333;
}

.share-bar {
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.5);
  padding: 0.3rem 0.75rem;
}
.share-bar li {
  margin-bottom: 0;
}


</style>


<div class="container d-flex flex-wrap body-wrapper">
	<main aria-label="Main Content Area" class="col-12 order-lg-2" role="main">
		<div id="lipsum">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel ligula tortor. Nam luctus varius maximus. Vivamus porttitor turpis sed elit lacinia pretium. Phasellus ullamcorper pretium neque, a ultrices mauris auctor in. Vivamus non facilisis magna. Aliquam aliquet cursus viverra. Maecenas malesuada rutrum lobortis. Suspendisse vel quam a nulla pharetra pulvinar at id mi. Aenean massa tortor, consequat ultricies porttitor nec, rutrum sit amet mi. Nunc id ex vel erat interdum malesuada ac ut ligula.</p>
			<p>Duis varius ex sit amet arcu fermentum fringilla nec a lorem. Proin vitae tortor volutpat, scelerisque quam non, consectetur sapien. Morbi eu arcu ac nisi facilisis sagittis non ut nisi. Nullam massa leo, tincidunt nec condimentum eget, ullamcorper nec ligula. Ut tempus semper leo, at ultrices sapien sagittis eget. Aliquam posuere aliquam mauris vel volutpat. Morbi convallis ante magna, ut bibendum risus aliquam nec. Vivamus viverra velit quis volutpat tempor. Curabitur rutrum nunc a metus maximus auctor. Aenean pellentesque luctus laoreet.</p>
			<p>Morbi ac augue sit amet lectus euismod vehicula. Suspendisse non iaculis turpis. Sed mollis viverra purus dapibus lacinia. Etiam in massa vitae metus blandit fringilla sit amet eu lorem. Cras sed laoreet felis. Fusce luctus eu lacus non sodales. Mauris porta pulvinar erat faucibus finibus. Quisque suscipit velit nec est laoreet tincidunt. Quisque eu risus accumsan, ultricies elit at, tristique augue. Morbi nec efficitur arcu.</p>
			<p>Nam accumsan ex non elit hendrerit cursus. Sed sit amet tincidunt odio. Integer nec lobortis erat. Curabitur fringilla arcu at diam finibus consectetur non sit amet orci. Donec massa tellus, eleifend vel diam in, vehicula ultrices nisi. Nulla felis nisi, mollis id ultrices in, imperdiet in felis. Vivamus sollicitudin ornare mauris, et lacinia lorem blandit in. Pellentesque eget congue ligula. Cras vehicula dolor nec molestie lobortis. Sed non nibh euismod, vehicula risus quis, faucibus justo. Fusce venenatis efficitur rhoncus. In eu elit placerat, hendrerit orci vitae, semper nibh. Sed eu vehicula neque.</p>
			<p>In augue leo, fringilla in blandit nec, fringilla ac magna. Mauris felis dolor, molestie quis purus eget, fringilla elementum nisi. Curabitur venenatis nibh rutrum, finibus nisl nec, hendrerit libero. Praesent nec vulputate nisi. Donec gravida, sapien in interdum luctus, velit lorem accumsan eros, nec finibus tellus augue quis elit. Sed mollis dolor orci, ac lobortis erat consectetur congue. Duis efficitur molestie arcu, hendrerit tincidunt mi suscipit vitae. Quisque quam quam, interdum eu consectetur eu, sagittis id erat. Fusce egestas, nulla a accumsan cursus, lectus est volutpat mauris, vel vulputate leo nibh id arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque sapien, consequat quis sapien nec, imperdiet condimentum magna. Aliquam lacinia consectetur odio, sit amet sollicitudin est condimentum eget. Proin non lacinia sem. In est lacus, mollis sagittis odio et, feugiat rhoncus purus.</p>
			<p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sed suscipit ex. Sed neque magna, vehicula in nulla vitae, aliquam euismod lacus. Morbi vel diam nec felis rhoncus congue in ac tortor. Suspendisse semper ultricies sagittis. Morbi a sagittis massa, id iaculis dolor. Quisque mollis sapien augue, vitae volutpat nunc laoreet quis. Sed congue tortor tellus, id mattis massa tempus non. Vestibulum efficitur mauris ut eros facilisis pharetra. Phasellus faucibus nisl urna, et blandit nisl fringilla a. Cras non metus in diam finibus consectetur. Duis nulla massa, porttitor sed purus id, posuere viverra nibh. Nam ultricies orci in leo blandit congue. Morbi varius ornare elit non efficitur. Sed ligula enim, varius id ex sed, venenatis pretium augue. Vivamus pulvinar interdum massa, sit amet dictum ipsum elementum ut.</p>
			<p>Aliquam congue arcu mauris, ut finibus purus egestas vitae. Fusce ultricies augue eu arcu aliquam elementum. Sed pretium facilisis consectetur. Maecenas nec pellentesque lorem. Quisque porta est volutpat sapien eleifend, sit amet vehicula ante euismod. Integer aliquam tempor tellus, consectetur ullamcorper lectus. Curabitur nisi nisl, maximus eget auctor at, rutrum vitae erat. Aenean mollis ante nulla, sit amet interdum enim tristique sit amet. Morbi rhoncus elit eu porttitor interdum. Nam sed feugiat velit, eget ultricies est. Vestibulum consectetur interdum dui, nec mattis lectus faucibus vel. Suspendisse quis ullamcorper arcu, non varius ante.</p>
			<p>Mauris et odio condimentum elit sagittis facilisis. In ultricies sem cursus purus rutrum lacinia. Donec sem libero, rutrum sed enim in, gravida condimentum quam. Duis eu erat nec ligula sagittis molestie vel pellentesque ante. Maecenas neque erat, porta vel ante in, eleifend feugiat nulla. Aliquam auctor cursus luctus. Etiam at ipsum a tellus bibendum ultrices ut non odio. Duis iaculis facilisis eros, in malesuada sem aliquam ut. Aenean nibh dolor, sagittis a eros et, pulvinar cursus urna.</p>
			<p>Quisque malesuada ligula ullamcorper, mattis nunc eget, rhoncus felis. Duis viverra bibendum congue. Nullam pellentesque nisi nec semper ornare. Vivamus gravida dictum ornare. Aliquam vitae porta elit. Duis vitae blandit tortor. Quisque semper feugiat mauris, ac ornare mauris vehicula sit amet. Aenean sollicitudin tempus faucibus.</p>
			<p>Vivamus quis nulla nec diam accumsan eleifend eu vel tellus. Duis ac sapien non elit suscipit sagittis. In hac habitasse platea dictumst. Mauris venenatis diam non porttitor tempor. Aliquam interdum tellus eu erat tempor, vitae suscipit felis efficitur. Nunc a condimentum nulla. Phasellus egestas lorem ac nibh sagittis, nec efficitur ipsum semper. Maecenas tempus, velit eleifend blandit condimentum, leo ex varius urna, nec hendrerit justo ante at tellus. Quisque laoreet volutpat massa, sed commodo tortor condimentum ut. Curabitur scelerisque ex odio, quis viverra felis elementum et.</p>
			<p>Aliquam quis viverra eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin enim leo, placerat eu nulla ac, varius aliquet risus. Curabitur finibus metus volutpat est sagittis blandit. Sed vitae sodales elit. Vivamus nulla lectus, pulvinar nec metus vitae, tincidunt ultrices elit. Nulla vitae orci a purus ullamcorper vehicula. Pellentesque posuere, neque at faucibus pellentesque, urna sem pharetra ipsum, ut sodales lorem ex ac turpis. Nullam sodales et massa blandit tristique. Sed efficitur feugiat neque quis porta.</p>
			<p>Cras a purus et dui aliquet aliquam a eu magna. Ut vitae ante eget orci varius condimentum eget quis risus. Pellentesque eu vehicula justo. Phasellus tortor risus, consectetur id rutrum vel, elementum eu ex. Nullam ac libero vulputate, molestie elit non, sagittis lectus. Mauris magna sapien, dapibus a porta bibendum, egestas non ligula. Fusce egestas imperdiet ligula, eu auctor turpis bibendum nec. Ut aliquam quam nec orci hendrerit, a posuere ex cursus. Nunc lacinia ac neque et malesuada.</p>
			<p>Cras at sodales massa, sed semper enim. Fusce vitae neque non neque scelerisque volutpat. Sed auctor posuere sapien sit amet luctus. Ut venenatis orci eu nisl interdum, sed ornare felis sollicitudin. Ut ut venenatis ex, et finibus sem. Phasellus aliquam lobortis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean nec viverra felis. Cras nunc velit, aliquam iaculis massa nec, blandit tempor neque. Quisque pulvinar, sapien a pellentesque sagittis, augue risus cursus lectus, quis blandit lacus magna sit amet massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vulputate pulvinar massa in congue.</p>
		</div>
	</main>
</div>
<nav class="navbar navbar-expand navbar-white bg-white fixed-bottom justify-content-between share-bar">
	<a class="navbar-brand" href="http://www.cdc.gov"><img alt="" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/CDC/CDC-Logo.png"></a>
	<ul class="navbar-nav ml-auto">
		<li class="nav-item">
			<a class="nav-link" href="https://api.addthis.com/oexchange/0.8/forward/facebook/offer?url=https://search.cdc.gov/search/index.html?query=zika&amp;sitelimit=&amp;utf8=%25E2%259C%2593&amp;affiliate=cdc-main&amp;title=Search%20Results%20%7C%20CDC&amp;description=undefined&amp;via=undefined&amp;media=undefined"><span class="sr-only">Facebook</span><span class="fi cdc-icon-fb x24"></span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="https://api.addthis.com/oexchange/0.8/forward/twitter/offer?url=https://search.cdc.gov/search/index.html?query=zika&amp;sitelimit=&amp;utf8=%25E2%259C%2593&amp;affiliate=cdc-main&amp;title=Search%20Results%20%7C%20CDC&amp;description=undefined&amp;via=CDCgov&amp;ct=0&amp;media=undefined"><span class="sr-only">Twitter</span><span class="fi cdc-icon-twitter-white x24"></span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="https://api.addthis.com/oexchange/0.8/forward/linkedin/offer?url=https://search.cdc.gov/search/index.html?query=zika&amp;sitelimit=&amp;utf8=%25E2%259C%2593&amp;affiliate=cdc-main&amp;title=Search%20Results%20%7C%20CDC&amp;description=undefined&amp;via=undefined&amp;ct=0&amp;media=undefined"><span class="sr-only">LinkedIn</span><span class="fi cdc-icon-linkedin x24"></span></a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="https://api.addthis.com/oexchange/0.8/forward/email/offer?url=https://search.cdc.gov/search/index.html?query=zika&amp;sitelimit=&amp;utf8=%25E2%259C%2593&amp;affiliate=cdc-main&amp;title=Search%20Results%20%7C%20CDC&amp;description=undefined&amp;via=CDCgov&amp;ct=0&amp;media=undefined"><span class="sr-only">Email</span><span class="fi cdc-icon-email x24"></span></a>
		</li>
	</ul>
</nav>

<script>
    window.addEventListener( 'DOMContentLoaded', function() {
        ( function( $ ) {
			var topContainerHeight = parseInt( $( '.navbar' ).css( 'height' ) );
			var scrolled = false;
			$( window ).scroll( function() {
				if ( scrolled ) {
					var isMobile = $( window ).width() < 768;
					if ( isMobile ) {
						if ( $( this ).scrollTop() > prevScrollTop ) {
							if( $( '.navbar' ).is( ':visible') ) {
								$( '.navbar' ).fadeOut( 'slow' );
							}
						} else if ( $( this ).scrollTop() < prevScrollTop ) {
							if ( $( this ).scrollTop() <= 100 ) {
								$( '.navbar' ).fadeOut( 'slow' );
							} else {
								$( '.navbar' ).fadeIn( 'slow' );
							}
						}
					}
				}
				scrolled = true;
				prevScrollTop = $( this ).scrollTop();
			} );
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
