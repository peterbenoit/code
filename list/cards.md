---
title: All Card Projects
narrow: true
permalink: cards/index.html
show_profile: true
type: list
---

<style>
    .card-img-top  {
        padding: 0.5rem;
    }
</style>

<p>These card demos were created using <a href="https://getbootstrap.com">Bootstrap 4</a> and a little bit O' gumption.</p>

<div class="card-columns">
    {%- for project in site.cards -%}
    {% if project.showinnav != false %}
    <div class="card shadow-sm">
        {% if project.image %}
        <img src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/cards/{{ project.image }}" alt="{{ project.title }}" class="card-img-top">
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

