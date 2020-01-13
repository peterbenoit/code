---
layout: defaults/page
permalink: index.html
narrow: true
description: 
title: 
type: home
---

{% include components/intro.md %}

### What am I looking at?

I have an assortment of [posts]({{ site.baseurl}}{% link list/posts.html %}) and [projects]({{ site.baseurl}}{% link list/projects.md %}) that I put together.

### Recent

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


