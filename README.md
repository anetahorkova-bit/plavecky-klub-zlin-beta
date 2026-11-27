
## SVG ikony (sprite)

Zdrojové ikony jsou v `public/svg/<nazev>.svg` (barvy přes `currentColor`).
Sprite `public/images/sprite.svg` se z nich generuje skriptem bez závislostí:

    python3 tools/build-sprite.py

Použití v HTML (vždy `xlink:href`, ne `href`):

    <svg class="icon icon--download" aria-hidden="true"><use xlink:href="public/images/sprite.svg#download"></use></svg>

Symboly: `arrow-chip`, `arrow-right`, `chevron-down`, `download`.
