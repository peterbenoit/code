---
title: All the Other Projects
narrow: true
permalink: other/index.html
show_profile: true
type: list
---

<p>These projects are just a random collection of ideas I might have worked on without being able to categorize them with other projects.</p>

<dl class="row">
{%- for project in site.other -%}
{% if project.showinnav != false %}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endif -%}
{%- endfor -%}
</dl>