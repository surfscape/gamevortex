---
layout: home.njk
---

{%- from "components/components.njk" import component -%}

<div class="pod">
<span class="pod--title">Latest Additions</span>
<div class="game--grid">
{%- for game in collections.games | reverse -%}
    {%- if loop.index0 < 3 -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.banner, platform: game.data.platform}) }}
{%- endif -%}
{%- endfor -%}
</div>
</div>

## GameVortex Collection

<div class="game--grid">
{%- for game in collections.games -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.banner, platform: game.data.platform}) }}
{%- endfor -%}
</div>
