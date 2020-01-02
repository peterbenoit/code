---
title: All Datatable Projects
narrow: true
permalink: datatables/index.html
show_profile: true
type: list
---

<h1>Datatables</h1>
<p>These projects were created using the datatables library from <a href="https://datatables.net">datatables.net</a>.</p>
<p>While it may not be vogue to build apps in something other than React, Angular, Vue or Svelte these days, I'm a firm believer of using the time tested tools which are available and not necessarily reinventing the wheel with each new project.</p>
<p>The Datatables library displays huge datasets very quickly and has built-in sort/filter functionalty as well as pagination, just to name a few of the things it does out of the box. The demos below take advantage of the Datatables engine to show some ways it can be used to build custom layouts quickly and reliably.</p>

<dl class="row">
{%- for project in site.datatables -%}
{% if project.showinnav != false %}
<dt class="col-sm-3">{{ project.title }}</dt>
<dd class="col-sm-9">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endif -%}
{%- endfor -%}
</dl>