---
title: jQuery "on" method with various event handlers
tags:
  - jQuery
  - Javascript
type: post
---

There are several ways to handle events on elements with jQuery's "on" method. See the <a href="https://codepen.io/peterbenoit/pen/abOJVLQ.js">Javascript</a> for examples.

<ol>
  <li>This method is the standard one event, one function method. On your <code>.mybutton</code> click, execute a function.</li>
  <li>This is a little more advanced. Capture two events and run the same function.</li>
  <li>Same as the previous example, this time we determine which event using <code>e.type</code> and handle that event separately.</li>
  <li>You can also chain the "on" method to handle different events with specific code.</li>
  <li>This time we're taking one selector and applying multiple unique handlers through one "on" method.</li>
</ol>

<p class="codepen" data-height="300" data-theme-id="22720" data-default-tab="js,result" data-user="peterbenoit" data-slug-hash="abOJVLQ" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="jQuery &amp;quot;on&amp;quot; method with various event handlers">
  <span>See the Pen <a href="https://codepen.io/peterbenoit/pen/abOJVLQ">
  jQuery &quot;on&quot; method with various event handlers</a> by Pete (<a href="https://codepen.io/peterbenoit">@peterbenoit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>