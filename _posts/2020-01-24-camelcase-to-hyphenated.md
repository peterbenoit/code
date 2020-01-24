---
title: Convert camelCase to hyphenated camel-case
tags:
  - Javascript
type: post
---

It's pretty straight-forward to take a hyphenated string and convert it to camel case, but the other way around isn't so obvious. 

Here's one way you can do it in Javascript.

{%- highlight javascript -%}

"camelCase".replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`);

{%- endhighlight -%}

