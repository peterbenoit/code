---
title: All Slider Projects
narrow: true
permalink: sliders/index.html
show_profile: true
type: list
---

<p>The <a href="http://kenwheeler.github.io/slick/">Slick Carousel</a> hasn't been updated in a few years, but it still holds its own as a decent enough slider.</p>
<p>Instead of making changes to the core library, I wrote a custom <code>slickInit()</code> method for taking configuration options and applying them to the slider. This can be as simple as turning options on or off, or as complex as you callback functions for slider DOM actions. You can see an example of this at the bottom of this page or at the bottom of each of the demo pages.</p>

<p>This addresses a couple of needs.</p>
<ol>
    <li>End-users won't necessarily know how to work with JavaScript</li>
    <li>Custom and various configurations of the slider should require minimal coding, if any.</li>
</ol>
<p>There are also custom styles applied to the slider, in order to produce the different layouts and configurations. This was done using <a href="https://sass-lang.com/">SASS</a> which is compiled into CSS.</p>

{% assign sliders = site.sliders | sort: 'order' %}

<span class="display-5">Image Sliders</span>
<div class="card-columns">
    {%- for project in sliders -%}
    {% if project.showinnav != false and project.slidertype == 'image' %}
    <div class="card shadow-sm">
        {% if project.image %}
        <a href="{{ site.baseurl }}{{ project.url }}"><img src="https://raw.githubusercontent.com/peterbenoit/cdn/master/images/sliders/{{ project.image }}" alt="{{ project.title }}" class="card-img-top"></a>
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


<span class="display-5">Standard Sliders</span>
<dl>
    {%- for project in sliders -%}
    {% if project.showinnav != false and project.order %}
    <dt><a class="text-body" href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></dt>
    <dd class="ml-5">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
    {%- endif -%}
    {%- endfor -%}
</dl>

<span class="display-5">Other Slider Types</span>
<dl>
    {%- for project in sliders -%}
    {% if project.showinnav != false and project.order == nil %}
    <dt><a class="text-body" href="{{ site.baseurl }}{{ project.url }}">{{ project.title }}</a></dt>
    <dd class="ml-5">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
    {%- endif -%}
    {%- endfor -%}
</dl>