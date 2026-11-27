#!/usr/bin/env python3
"""Sestaví public/images/sprite.svg ze všech public/svg/*.svg (bez závislostí).
Spuštění z kořene repozitáře:  python3 tools/build-sprite.py"""
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
src, out = root / 'public/svg', root / 'public/images/sprite.svg'
syms = []
for f in sorted(src.glob('*.svg')):
    s = f.read_text(encoding='utf-8')
    m = re.search(r'<svg\b([^>]*)>(.*)</svg>', s, re.S)
    attrs, body = m.group(1), m.group(2).strip()
    vb = re.search(r'viewBox="([^"]+)"', attrs).group(1)
    fill = re.search(r'\bfill="([^"]+)"', attrs)
    fa = f' fill="{fill.group(1)}"' if fill else ''
    syms.append(f'  <symbol id="{f.stem}" viewBox="{vb}"{fa}>{body}</symbol>')
out.write_text('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">\n'
               + '\n'.join(syms) + '\n</svg>\n', encoding='utf-8')
print(f'{out.relative_to(root)}: {len(syms)} symbolů')
