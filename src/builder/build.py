import re
import io
from pathlib import Path
from xml.etree import ElementTree
import asyncio


async def svg_def_builder(
        src_dir: Path,
        dest_dir: Path,
        fill_colors_to_remove: list[str]):
    
    src_dir = Path(src_dir)
    dest_dir = Path(dest_dir)
    svgdef_path = dest_dir.joinpath('svg-def.svg')

    with open(svgdef_path, 'w') as f:
        f.write('<svg></svg>')

    ElementTree.register_namespace('', 'http://www.w3.org/2000/svg')
    svg_symbol = ElementTree.parse(svgdef_path)

    def sort_by_name_caseless(path):
        return str.casefold(str(path))

    for svg_path in sorted(src_dir.glob('**/*.svg'), key=sort_by_name_caseless):
        with open(svg_path) as f:
            svg_path = Path(svg_path)
            svg = f.read()

        for fill_color in fill_colors_to_remove:
            svg = svg.replace(f'fill="{fill_color}"', '')
        
        svg = ElementTree.parse(io.StringIO(svg))
        svg_root = svg.getroot()

        id_ = svg_path.name.replace('.svg', '')

        symbol = ElementTree.fromstring('<symbol></symbol>')
        symbol.set('viewBox', '0 0 16 16')
        symbol.set('id', id_)
        title = ElementTree.fromstring('<title></title>')
        title.text = id_
        for t in svg_root.iter('{http://www.w3.org/2000/svg}title'):
            svg_root.remove(t)
        symbol.append(title)
        for node in svg_root:
            symbol.append(node)
        for metadata in symbol.iter('{http://www.w3.org/2000/svg}metadata'):
            symbol.remove(metadata)

        svg_symbol.getroot().append(symbol)

        for metadata in svg_symbol.getroot().iter('metadata'):
            symbol.remove(metadata)

    svg_symbol.write(svgdef_path)


async def main():
    await asyncio.gather(
        svg_def_builder(),
    )

asyncio.run(main())