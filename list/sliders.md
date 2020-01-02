---
title: All Slider Projects
narrow: true
permalink: sliders/index.html
show_profile: true
type: list
---

<dl class="row">
{%- for project in site.sliders -%}
{% if project.showinnav != false %}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endif -%}
{%- endfor -%}
</dl>