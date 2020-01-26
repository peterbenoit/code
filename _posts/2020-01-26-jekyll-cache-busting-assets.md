---
title: One way to prevent caching of your Javascript and CSS using Jekyll
tags:
  - Jekyll
  - Cache
type: post
---

As with most things in development, there are often a handful of ways to do the same thing. Some might be more readable, others might be more <def title="https://dictionary.cambridge.org/us/dictionary/english/performant">performant</def>, but rarely does the end user know the difference. In this case, I want to limit the amount of caching the browser does on my local CSS and Javascript assets. There are a variety of reasons why anyone would want this, mine is purely for testing; I want to always have the latest version of a file. Once I'm happy with the end product, I'll remove the mechanism. 

Here's one way to do it using Jekyll. The site.time is the current time when the <code>jekyll</code> command is run; typically this is when the site is built.

{%- highlight liquid -%}
{% raw %}
  <link href="{{ site.baseurl }}/css/{{ pg | strip }}?{{ site.time | date:'%Y%m%d%U%H%N%S' }}" rel="stylesheet">
{% endraw %}
{%- endhighlight -%}

The output with the querystring
{%- highlight html -%}
  <link rel="stylesheet" href="/code/theme/css/site.css?20200126040844656780058">
{%- endhighlight -%}

