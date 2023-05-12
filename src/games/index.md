---
title: Games
layout: base.njk
eleventyExcludeFromCollections: true
---

# GameVortex Library

{% for game in collections.games %}
<a href="{{game.url}}">{{game.data.title}}</a>
{% endfor %}
