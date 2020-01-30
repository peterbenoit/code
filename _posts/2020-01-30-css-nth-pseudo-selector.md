---
title: CSS nth child psuedo-selector
tags:
  - CSS
type: post
---

I had been familiar with the <code>nth-child</code> pseudo-selector for some time, but I apparently haven't been using it to its fullest extent. 

Today I had an issue where I wanted the first three images in an element to have a certain height, and the rest to have a different height. Since I knew the first three would always be the same, I decided to target them instead of the rest of the images.

Here's roughly how I managed to do this.

{%- highlight css -%}
.yourelement .img-wrapper img {
  height: 300px;
}

.yourelement .img-wrapper:nth-child(-n+3) img {
  height: 200px;
}
{%- endhighlight -%}}

CSS-Tricks has a <a href="https://css-tricks.com/examples/nth-child-tester/">great tool</a> for testing variations of the <code>nth-child</code> pseudo-selector.

