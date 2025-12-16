# Convert Figma SVG to Shisa TSX component

## Goal

Convert a Figma-exported SVG into a `tsx` component that uses the `Shisa` wrapper and contains only the icon's shape data (paths/rects/etc.). The component must not set top-level SVG paint/size attributes — those are provided by `Shisa`.

## High-level rules

1. Parse the input SVG string and extract the inner shape elements (children of the root `<svg>`). Keep their geometry (attributes like `d`, `x`, `y`, `width`, `height`, `rx`, etc.) exactly as-is.
2. Remove all root-level attributes from `<svg>` except `viewBox` if it exists and is meaningful. Prefer leaving `viewBox="0 0 24 24"` if present; otherwise do not invent a `viewBox` unless you can safely infer it.
3. Strip any `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`, `fill`, `fill-rule`, `style`, `class`, `id`, and inline `transform` attributes from child shape elements — these are presentation attributes. The exception: keep `transform` only if it is essential to the shape and cannot be flattened safely by the LLM.
4. If child elements reference `<defs>` (gradients, masks, clipPaths) — inline them into the shapes where possible, otherwise remove them and warn the user (Shisa icons should be simple strokes/fills).
5. Convert any style attributes (e.g., `style="stroke:#000;stroke-width:2"`) into geometry-only markup by removing the style or moving only non-default visual attributes to the `Shisa` wrapper (see rule 7).
6. Preserve grouping (`<g>`) only to the extent it affects geometry; otherwise flatten groups and keep their children in document order.
7. Move non-default visual preferences to the `Shisa` wrapper — for example, if the original used rounded caps, add `strokeLinecap="round"` to `Shisa`. Do NOT copy `stroke`/`strokeWidth`/`fill` to the wrapper unless absolutely required; prefer package defaults (`stroke="currentColor"`, `strokeWidth={2}`).
8. Ensure the output component accepts standard `SVGProps<SVGSVGElement>` and spreads `...props` onto `Shisa` so callers can override as needed.
9. Keep the same geometry; do not scale or translate coordinates unless the SVG's `viewBox` indicates non-24x24 artwork — if the artwork is not 24x24, add a comment and preserve `viewBox` so maintainers can review scaling.
10. Small-icon fill exception: base this decision on the dominant glyph's geometry (the bounding box of all shape elements), not the overall `viewBox`. If the dominant glyph bounding box width and height are both <= 4 units, produce a filled icon instead of a stroked icon. Deterministic measurement rule for LLMs/scripts:

- Compute minX/minY and maxX/maxY across all shapes using their geometry attributes (`d` commands, `x`/`y`/`width`/`height` for rects, `cx`/`cy`/`r` for circles, points for polygons, etc.).
- glyphWidth = maxX - minX; glyphHeight = maxY - minY.
- If glyphWidth <= 4 AND glyphHeight <= 4 then treat as a small glyph and convert to a filled icon.
  In that case:
- Remove any `stroke`/`stroke-width` attributes from the shapes.
- Set `fill="currentColor"` on the shape elements (or set `fill` on `Shisa`) and do not add `stroke` or `strokeWidth` to the wrapper.
- Add a short comment in the generated file noting the icon was converted to a filled glyph because its dominant glyph bounding box is small.

## Output format (TSX component template)

Return a single file with this structure — replace `MyIcon` and the shapes block with the cleaned shapes from the SVG:

```tsx
import { SVGProps } from "react";
import { Shisa } from "shisa-icon";

const ShisaMyIcon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  // Add any non-default visual props here (e.g. strokeLinecap="round")
  <Shisa {...props}>/* INSERT CLEANED SHAPES HERE */</Shisa>
);

export default ShisaMyIcon;
```

## Naming conventions (file + component)

When producing the TSX file, follow these rules so the project stays consistent with existing icons:

- File name: use kebab-case (lowercase, hyphen separated) with no `shisa-` prefix. Example: `checked-box.tsx`, `arrow-left.tsx`, `star.tsx`.
- Component name: use `Shisa` + PascalCase derived from the file name (capitalize each segment and remove hyphens). Example mappings:
  - `checked-box.tsx` -> `ShisaCheckedBox`
  - `arrow-left.tsx` -> `ShisaArrowLeft`
  - `star.tsx` -> `ShisaStar`
- Export: default-export the component as the file's primary export (e.g., `export default ShisaStar;`).
- Location: place the generated file under `package/src/icons/` so it matches the package layout.

These conventions let consumers import icons like `import { ShisaStar } from "shisa-icon";` while keeping repository filenames short and consistent.

## Small, deterministic transformation checklist

When processing the SVG, apply these transformations:

- Remove root attributes: `width`, `height`, `xmlns`, `xmlns:xlink`, `data-*`, `class`, `id`.
- Keep `viewBox` only if present; prefer `viewBox="0 0 24 24"`.
- For each child element (`path`, `rect`, `circle`, `line`, `polyline`, `polygon`, `g`):
  - Remove presentation attributes: `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`, `fill`, `fill-rule`, `style`, `class`, `id`.
  - Keep geometry attributes exactly: `d`, `x`, `y`, `width`, `height`, `rx`, `cx`, `cy`, `r`, `points`.
  - If `transform` exists and is essential, keep it; otherwise remove it.
- Flatten `<g>` groups unless they carry transforms or are required for geometry; preserve child order.
- Remove `<defs>` and anything referencing external resources; if complex effects are used (filters/gradients/masks) output a warning comment and leave the shapes (but note the effect can't be reproduced with plain Shisa shapes).

## What to do with common Figma artifacts

- `style` strings (e.g. `style="stroke:#000;stroke-width:2"`): strip them. If they encode `strokeLinecap` or `strokeLinejoin`, move those specific non-default values to the `Shisa` wrapper.
- `fill` attributes: remove them. If the icon used a filled shape intentionally (not a stroke), keep the `path` but remove `fill`. Shisa icons typically use stroke-only icons; if your icon is filled, add a short comment `// NOTE: original used fill — verify visually`.
- `transform` on groups: when possible, apply transform to child geometry (flatten) — if not trivial, preserve `transform`.

## Before / after example (Figma → Shisa)

Input (Figma SVG snippet):

```svg
<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer">
    <rect x="2" y="2" width="44" height="44" rx="6" fill="#fff" stroke="#000" stroke-width="2"/>
    <path d="M12 24L24 12L36 24" stroke="#000" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>
```

LLM output (cleaned shapes inserted into `Shisa` — note viewBox handling and visual prefs):

```tsx
import { SVGProps } from "react";
import { Shisa } from "shisa-icon";

const ExampleIcon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <rect x="2" y="2" width="44" height="44" rx="6" />
    <path d="M12 24L24 12L36 24" />
  </Shisa>
);

export default ExampleIcon;
```
