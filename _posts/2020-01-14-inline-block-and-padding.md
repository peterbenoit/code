---
title: Using inline-block and dealing with padding
tags:
  - CSS
  - HTML
type: post
---

There was a question in one of my Slack channels today. A developer was trying to display two elements horizontally using inline-block, but they kept appearing vertically. To be clear, there are a number of ways to get to the presentation that this person was attempting, but I didn't consider that part of the exercise.

The problem stems with the way inline-block will pad elements whenever the HTML markup isn't compressed.

For example:

This <i class="fa fa-arrow-down" aria-hidden="true"></i>
{%- highlight html -%}
<div>
    <div>1</div>
    <div>2</div>
</div>
{%- endhighlight -%}

Will render differently than this <i class="fa fa-arrow-down" aria-hidden="true"></i>
{%- highlight html -%}
<div><div>1</div><div>2</div></div>
{%- endhighlight -%}

Here's a working example of what the developer was working with

<p class="codepen" data-height="300" data-theme-id="22720" data-default-tab="html,result" data-user="peterbenoit" data-slug-hash="povZoZz" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Inline Block with padding">
  <span>See the Pen <a href="https://codepen.io/peterbenoit/pen/povZoZz">
  Inline Block with padding</a> by Pete (<a href="https://codepen.io/peterbenoit">@peterbenoit</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>