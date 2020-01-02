---
layout: defaults/page
permalink: index.html
narrow: true
description: 
title: 
type: home
---

{% include components/intro.md %}

[More about Pete.]({{ site.baseurl}}{% link _pages/about.md %})

### What else?

Pete keeps himself busy on work and hobby projects, [The full list is here]({{ site.baseurl}}{% link list/projects.md %}). 

### Recent Posts ( [all]({{ site.baseurl}}{% link list/posts.html %}) )

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


