---
layout: template
permalink: cards/card-columns.html
description: Using Bootstrap 4 Cards in a multi-column layout
title: Card Column Layout
type: demo
localcss:
localjs:
includePrismJs: true
externalcss:
externaljs:
showinnav: true
image: columns.jpg
---

{%- include breadcrumbs.html -%}

<span class="display-5">Card Columns</span>
<div class="container">
	<p>You can display Bootstrap 4 cards in semi-equal columns using the <code>.card-columns</code> class. Adding <code>.cc-2</code> or <code>.cc-4</code> to your columns will change the number of columns displayed. This is all done by the browser using <code>column-count</code> and can sometimes have unexpected results. YMMV.</p>

	<p><a href="#two">Two Column</a> | <a href="#four">Four Column</a></p>
	<span class="display-5">Three Columns</span>

	<div class="card-columns">
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/420/200">
			<div class="card-body">
				<h4 class="card-title">Boating is the new canoeing</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/414/200">
			<div class="card-body">
				<h4 class="card-title">This almost brought the Internet to its knees</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/412/200">
			<div class="card-body">
				<h4 class="card-title">Try not to gasp when you find out who painted this.</h4>
				<span class="badge badge-success">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/411/200">
			<div class="card-body">
				<h4 class="card-title">Lower back pain treatments</h4>
				<span class="badge badge-warning">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/415/200">
			<div class="card-body">
				<h4 class="card-title">How to keep a straight face</h4>
				<span class="badge badge-primary">Social</span>
				<p class="card-text">Keeping a straight face in a conversation can be more difficult than it seems.</p>
			</div>
		</div>
		<div class="card p-3">
			<bodyquote class="card-body card-bodyquote">
				<p>Of course I talk to myself, sometimes I need an expert opinion.</p>
				<footer>
					<small class="text-muted">William James Murray <cite title="Source Title">Caddyshack</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/360/200">
			<div class="card-body">
				<h4 class="card-title">Best Horror Movies of 2017</h4>
				<span class="badge badge-info">Movies</span>
				<p class="card-text"></p>
				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			</div>
		</div>
		<div class="card card-inverse card-primary p-3 text-center">
			<bodyquote class="card-bodyquote">
				<p>Movie acting suits me because I only need to be good for ninety seconds at a time.</p>
				<footer>
					<small>Billy Murray</small>
				</footer>
			</bodyquote>
		</div>
		<div class="card text-center">
			<div class="card-body">
				<h4 class="card-title">Deep-thoughts</h4>
				<p class="card-text">Sometimes I snore, like when I get really tired.</p>
				<p class="card-text"><small class="text-muted">Willy M Murray</small></p>
			</div>
		</div>
		<div class="card"><img alt="Card image" class="card-img img-fluid" src="https://www.fillmurray.com/400/200">
		</div>
		<div class="card p-3 text-right">
			<bodyquote class="card-bodyquote">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer>
					<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Golf Tales</h4>
				<p class="card-text">When you see grown men near to tears because they've missed hitting a little white
					ball into a hole from three feet, it makes you laugh.</p>
				<p class="card-text"><small class="text-muted">Bill M</small></p>
			</div>
		</div>
	</div>

	<span class="display-5" id="four">Four Columns</span>
	<div class="card-columns cc-4">
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/420/200">
			<div class="card-body">
				<h4 class="card-title">Boating is the new canoeing</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/414/200">
			<div class="card-body">
				<h4 class="card-title">This almost brought the Internet to its knees</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/412/200">
			<div class="card-body">
				<h4 class="card-title">Try not to gasp when you find out who painted this.</h4>
				<span class="badge badge-success">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/411/200">
			<div class="card-body">
				<h4 class="card-title">Lower back pain treatments</h4>
				<span class="badge badge-warning">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/415/200">
			<div class="card-body">
				<h4 class="card-title">How to keep a straight face</h4>
				<span class="badge badge-primary">Social</span>
				<p class="card-text">Keeping a straight face in a conversation can be more difficult than it seems.</p>
			</div>
		</div>
		<div class="card p-3">
			<bodyquote class="card-body card-bodyquote">
				<p>Of course I talk to myself, sometimes I need an expert opinion.</p>
				<footer>
					<small class="text-muted">William James Murray <cite title="Source Title">Caddyshack</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/360/200">
			<div class="card-body">
				<h4 class="card-title">Best Horror Movies of 2017</h4>
				<span class="badge badge-info">Movies</span>
				<p class="card-text"></p>
				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			</div>
		</div>
		<div class="card card-inverse card-primary p-3 text-center">
			<bodyquote class="card-bodyquote">
				<p>Movie acting suits me because I only need to be good for ninety seconds at a time.</p>
				<footer>
					<small>Billy Murray</small>
				</footer>
			</bodyquote>
		</div>
		<div class="card text-center">
			<div class="card-body">
				<h4 class="card-title">Deep-thoughts</h4>
				<p class="card-text">Sometimes I snore, like when I get really tired.</p>
				<p class="card-text"><small class="text-muted">Willy M Murray</small></p>
			</div>
		</div>
		<div class="card"><img alt="Card image" class="card-img img-fluid" src="https://www.fillmurray.com/400/200">
		</div>
		<div class="card p-3 text-right">
			<bodyquote class="card-bodyquote">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer>
					<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Golf Tales</h4>
				<p class="card-text">When you see grown men near to tears because they've missed hitting a little white
					ball into a hole from three feet, it makes you laugh.</p>
				<p class="card-text"><small class="text-muted">Bill M</small></p>
			</div>
		</div>
	</div>

	<span class="display-5" id="two">Two Columns</span>
	<div class="card-columns cc-2">
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/420/200">
			<div class="card-body">
				<h4 class="card-title">Boating is the new canoeing</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/414/200">
			<div class="card-body">
				<h4 class="card-title">This almost brought the Internet to its knees</h4>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/412/200">
			<div class="card-body">
				<h4 class="card-title">Try not to gasp when you find out who painted this.</h4>
				<span class="badge badge-success">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/411/200">
			<div class="card-body">
				<h4 class="card-title">Lower back pain treatments</h4>
				<span class="badge badge-warning">Health</span>
				<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional
					content. This content is a little bit longer.</p>
			</div>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/415/200">
			<div class="card-body">
				<h4 class="card-title">How to keep a straight face</h4>
				<span class="badge badge-primary">Social</span>
				<p class="card-text">Keeping a straight face in a conversation can be more difficult than it seems.</p>
			</div>
		</div>
		<div class="card p-3">
			<bodyquote class="card-body card-bodyquote">
				<p>Of course I talk to myself, sometimes I need an expert opinion.</p>
				<footer>
					<small class="text-muted">William James Murray <cite title="Source Title">Caddyshack</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<img alt="Card image cap" class="card-img-top img-fluid" src="https://www.fillmurray.com/360/200">
			<div class="card-body">
				<h4 class="card-title">Best Horror Movies of 2017</h4>
				<span class="badge badge-info">Movies</span>
				<p class="card-text"></p>
				<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
			</div>
		</div>
		<div class="card card-inverse card-primary p-3 text-center">
			<bodyquote class="card-bodyquote">
				<p>Movie acting suits me because I only need to be good for ninety seconds at a time.</p>
				<footer>
					<small>Billy Murray</small>
				</footer>
			</bodyquote>
		</div>
		<div class="card text-center">
			<div class="card-body">
				<h4 class="card-title">Deep-thoughts</h4>
				<p class="card-text">Sometimes I snore, like when I get really tired.</p>
				<p class="card-text"><small class="text-muted">Willy M Murray</small></p>
			</div>
		</div>
		<div class="card"><img alt="Card image" class="card-img img-fluid" src="https://www.fillmurray.com/400/200">
		</div>
		<div class="card p-3 text-right">
			<bodyquote class="card-bodyquote">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer>
					<small class="text-muted">Someone famous in <cite title="Source Title">Source Title</cite></small>
				</footer>
			</bodyquote>
		</div>
		<div class="card">
			<div class="card-body">
				<h4 class="card-title">Golf Tales</h4>
				<p class="card-text">When you see grown men near to tears because they've missed hitting a little white
					ball into a hole from three feet, it makes you laugh.</p>
				<p class="card-text"><small class="text-muted">Bill M</small></p>
			</div>
		</div>
	</div>
</div>
