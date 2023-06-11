---
layout: home.njk
---

{%- from "components/components.njk" import component -%}

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quibusdam cum dolor. Molestias iure tenetur dolore dolores ipsum, dignissimos voluptatem alias deleniti quas corporis ex, cumque dolorum pariatur quia neque!

## Latest Additions

<div class="game--grid">
{%- for game in collections.games | reverse -%}
    {%- if loop.index0 < 3 -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.banner, platform: game.data.platform}) }}
{%- endif -%}
{%- endfor -%}
</div>

## GameVortex Collection

<div class="game--grid">
{%- for game in collections.games -%}
    {{ component('gameCard', { title: game.data.title, url: game.url, img: game.data.banner, platform: game.data.platform}) }}
{%- endfor -%}
</div>
