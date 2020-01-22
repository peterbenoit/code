---
layout: defaults/page
permalink: index.html
narrow: true
description: 
title: 
type: home
---

{% include components/intro.md %}

### Intro

Here's an assortment of [posts]({{ site.baseurl}}{% link list/posts.html %}) and [projects]({{ site.baseurl}}{% link list/projects.md %}) that I have put together over the last year. It's built in <a href="https://jekyllrb.com">Jekyll</a> and runs in Github or in your local dev environment. That is, assuming you have Ruby installed.

Most of my project work is still in [Codepen](https://codepen.io/peterbenoit/), but thanks to constant issues with their hosting, I'm slowly migrating it all here.

### Recent

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


