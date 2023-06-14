---
layout: home.njk
---

{%- from "components/components.njk" import component -%}

<div class="box">
<span class="box--title"><img src="/public/icons/24x24/new.png" alt="NEW Icon">Latest Additions</span>
<div class="box--content game--grid">
{%- for game in collections.games | reverse -%}
    {%- if loop.index0 < 3 -%}
    {%- if game.data.draft != true -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.codename}) }}
    {%- endif -%}
{%- endif -%}
{%- endfor -%}
</div>
</div>

<div class="box">
<span class="box--title"><img src="/public/icons/24x24/controller.png" alt="GameVortex Games Icon">All Games</span>
<div class="box--content game--grid">
{%- for game in collections.games  -%}
    {%- if game.data.draft != true -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.codename}) }}
    {%- endif -%}
{%- endfor -%}
</div>
</div>
