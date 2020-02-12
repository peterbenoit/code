---
title: Image API for loading images in a browser
tags:
- Lazy Loading
- HTML5
- images
type: post
---

The browser support for lazy loading images <a href="https://caniuse.com/#feat=loading-lazy-attr">isn't quite there yet</a>... dare to dream.

<ul>
	<li><code>auto</code> - default</li>
	<li><code>lazy</code> - loads the image when it becomes visible based on scroll position</li>
	<li><code>eager</code> - loads the image immediately regardless of scroll position</li>
</ul>

<p class="codepen" data-height="300" data-theme-id="22720" data-default-tab="js,result" data-user="peterbenoit" data-slug-hash="KKwqQpq" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Using loading attribute for lazy loading images">
	<span>See the Pen <a href="https://codepen.io/peterbenoit/pen/KKwqQpq">
	Using loading attribute for lazy loading images</a> by Pete (<a href="https://codepen.io/peterbenoit">@peterbenoit</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<p>Thanks to <a href="https://davidwalsh.name/loading-lazy">David Walsh</a> and <a href="https://addyosmani.com/blog/lazy-loading/">Addy Osmani</a>.</p>