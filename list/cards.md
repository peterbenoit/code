---
title: All Card Projects
narrow: true
permalink: cards/index.html
show_profile: true
type: list
---

<p>These card demos were created using <a href="https://getbootstrap.com">Bootstrap 4</a> and a little bit O' gumption.</p>

<dl>
    {%- for project in site.cards -%}
    {% if project.showinnav != false %}
    <dt><a class="text-body" href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></dt>
    <dd class="ml-5">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
    {%- endif -%}
    {%- endfor -%}
</dl>