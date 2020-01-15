---
title: All Datatable Projects
narrow: true
permalink: datatables/index.html
show_profile: true
type: list
---

<p>These projects were created using the <a href="https://datatables.net">Datatables</a> Javascript library.</p>
<p>This library displays huge datasets very quickly and has built-in sort/filter functionality as well as pagination, just to name a few of the things it does out of the box. The demos below take advantage of the Datatables engine to show some ways it can be used to build custom layouts quickly and reliably.</p>

<dl>
    {%- for project in site.datatables -%}
    {% if project.showinnav != false %}
    <dt><a class="text-body" href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></dt>
    <dd class="ml-5">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
    {%- endif -%}
    {%- endfor -%}
</dl>