---
title: How to highlight Jekyll in Jekyll. AKA, Jekyllinception.
tags:
  - Jekyll
  - Highlight
type: post
---

Highlighting in Jekyll is pretty straight-forward as long as you are using a language it supports, and it supports quite a few. 

In my previous post, I realized I wasn't sure how to highlight Jekyll inside of Jekyll - it would auto convert the markup I was trying to highlight. Not ideal.

The key to getting this to work is to wrap your Jekyll markup in a <code>&#0123;% raw %&#0125;</code> block. See this Gist.

<script src="https://gist.github.com/peterbenoit/6cd9779596c8d233c6876ea62aaf21f4.js"></script>

And an example of the output

{% highlight liquid %}
{% raw %}
{% for post in paginator.posts %}
   <div class="author">{{ post.date | date_to_string }}</div>
   <h3><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h3>
   <div class="content">
       {{ post.content | split:"<!--break-->" | first }}
   </div>
   <b><a href="{{ BASE_PATH }}{{ post.url }}">continue reading >></a></b>
   <hr/>
{% endfor %}
{% endraw %}
{% endhighlight %}