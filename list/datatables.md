---
title: All Datatable Projects
narrow: true
permalink: datatables/index.html
show_profile: true
type: list
---

<style>
    .card-img-top  {
        padding: 0.5rem;
    }
</style>

<p>These projects were created using the <a href="https://datatables.net">Datatables</a> Javascript library.</p>
<p>This library displays huge datasets very quickly and has built-in sort/filter functionality as well as pagination, just to name a few of the things it does out of the box. The demos below take advantage of the Datatables engine to show some ways it can be used to build custom layouts quickly and reliably.</p>

<div class="card-columns">
    {%- for project in site.datatables -%}
    {% if project.showinnav != false %}
    <div class="card shadow-sm">
        {% if project.image %}
        <a href="{{ site.baseurl }}{{ project.url }}"><img src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/datatables/{{ project.image }}" alt="{{ project.title }}" class="card-img-top"></a>
        {% endif %}
        <div class="card-body">
            <h5 class="card-title"><a class="text-body" href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></h5>
            <p class="card-text">
                {{ project.description }}
            </p>
        </div>
        <div class="card-footer text-right">
            <a class="btn btn-link" href="{{ site.baseurl }}{{ project.url }}">View Project</a>
        </div>
    </div>
    {%- endif -%}
    {%- endfor -%}
</div>

