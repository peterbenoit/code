---
title: All Slider Projects
narrow: true
permalink: sliders/index.html
show_profile: true
type: list
---

{% for project in site.sliders %}
- [{{ project.title }}]({{ site.baseurl }}{{ project.url }})
{% endfor %}
