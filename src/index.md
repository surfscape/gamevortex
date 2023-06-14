---
layout: home.njk
---

{%- from "components/components.njk" import component -%}

<div class="container">
<span class="container--title"><img src="/public/icons/24x24/new.png" alt="NEW Icon">Latest Additions</span>
<div class="container--content game--grid">
{%- for game in collections.games | reverse -%}
    {%- if loop.index0 < 3 -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.codename}) }}
{%- endif -%}
{%- endfor -%}
</div>
</div>

<div class="container">
<span class="container--title"><img src="/public/icons/24x24/controller.png" alt="GameVortex Games Icon">All Games</span>
<div class="container--content game--grid">
{%- for game in collections.games  -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.codename}) }}
{%- endfor -%}
</div>
</div>
