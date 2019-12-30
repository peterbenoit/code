---
title: All Card Projects
narrow: true
permalink: cards/index.html
show_profile: true
type: list
---

<h1>Bootstrap 4 Cards</h1>
<p>These card demos were created using <a href="https://getbootstrap.com">Bootstrap 4</a> and a little bit O' gumption.</p>


<dl class="row">
{%- for project in site.cards -%}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endfor -%}
</dl>