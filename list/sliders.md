---
title: All Slider Projects
narrow: true
permalink: sliders/index.html
show_profile: true
type: list
---

<dl class="row">
{%- for project in site.sliders -%}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endfor -%}
</dl>