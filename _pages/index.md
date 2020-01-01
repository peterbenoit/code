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

Pete keeps himself busy on open-source and hobby projects. This is great for learning new skills. [The full list is here]({% link list/projects.md %}). There's also a project page about how to [install and use this theme]({% link _pages/install.md %}).

Pete has worked in engineering for many years and has an impressive portfolio. [Browse it here.]({% link list/portfolio.html %})

Here's [all posts by year.]({% link list/posts.html %})

<div class="card mb-3">
    <img class="card-img-top" src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/horizontal/city/col-6/img%20(1).jpg"/>
    <div class="card-body bg-light">
        <div class="card-text">A picture from when Pete was on vacation in the middle of nowhere.</div>
    </div>
</div>

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}


