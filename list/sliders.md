---
title: All Slider Projects
narrow: true
permalink: sliders/index.html
show_profile: true
type: list
---

<p>The <a href="http://kenwheeler.github.io/slick/">Slick Carousel</a> hasn't been updated in a few years, but it still holds its own as a decent enough slider.</p>
<p>Instead of making changes to the core library, I wrote a custom <code>slickInit()</code> method for taking configuration options and applying them to the slider. Options can be as simple as turning options on or off, or as complex as you callback functions for slider DOM actions. You can see an example of this at the bottom of this page</p>
<p>This method serves a couple of needs.</p>
<ol>
    <li>End-users won't necessarily know how to work with JavaScript</li>
    <li>Custom and various configurations of the slider should require minimal coding, if any.</li>
</ol>

<dl>
{%- for project in site.sliders -%}
{% if project.showinnav != false %}
<dt>{{ project.title }}</dt>
<dd class="ml-5">{{ project.description }} <a href="{{ site.baseurl }}{{ project.url }}">more &hellip;</a></dd>
{%- endif -%}
{%- endfor -%}
</dl>

{%- highlight javascript -%}
slickInit( '#slider_1', {
    'sliderType': 'carousel',
    'bodyClass': '',        
    'ariaLabel': '',
    'ariaLabelTarget': 'sliderLabel_1',
    'centerMode': false,
    'dots': false,
    'sliderClass': 'cdc-carousel-slider',
    'responsive': [             
        { 'breakpoint': 1200, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },         
        { 'breakpoint': 992, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
        { 'breakpoint': 768, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
        { 'breakpoint': 576, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1 } },
        { 'breakpoint': 0, 'settings': { 'slidesToShow': 1, 'slidesToScroll': 1, 'centerPadding': '20px' } }            
    ]   
} );
{%- endhighlight -%}