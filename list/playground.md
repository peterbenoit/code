---
title: All Playground Projects
narrow: true
permalink: playground/index.html
show_profile: true
type: list
---

<h1>Playground</h1>
<p>These projects are just a random collection of ideas I might have worked on without being able to categorize them with other projects.</p>

<dl class="row">
{%- for project in site.playground -%}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endfor -%}
</dl>