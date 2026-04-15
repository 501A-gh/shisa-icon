# Convert Figma SVG to Shisa TSX component

This skill provides instructions for converting a Figma-exported SVG file into a React TSX component for the Shisa icon library.

## Workflow

When asked to convert an icon (e.g., `@package/src/icons/icon-name.svg`), follow these steps:
1. **Read** the original `.svg` file to understand its geometry and attributes.
2. **Create** the new `.tsx` component file in the same directory (`package/src/icons/icon-name.tsx`), applying the transformation rules below.
3. **Update** the main index file (`package/src/index.ts`) to export the new component. Make sure to place the export in alphabetical order.
4. **Delete** the original `.svg` file.

## High-level rules

1. Parse the input SVG string and extract the inner shape elements (children of the root `<svg>`). Keep their geometry (attributes like `d`, `x`, `y`, `width`, `height`, `rx`, etc.) exactly as-is.
2. Remove all root-level attributes from `<svg>` completely. The `Shisa` wrapper will handle the `viewBox` and sizing.
3. **React/TSX camelCasing:** Ensure all remaining SVG attributes are converted to camelCase for React (e.g., `stroke-linecap` becomes `strokeLinecap`, `stroke-linejoin` becomes `strokeLinejoin`, `stroke-width` becomes `strokeWidth`, `fill-rule` becomes `fillRule`).
4. Strip any `stroke`, `stroke-width`, `stroke-linecap`, `stroke-linejoin`, `fill`, `style`, `class`, and `id` from child shape elements unless they deviate from the default icon style. The `Shisa` wrapper provides the default `stroke="currentColor"`, `strokeWidth={2}`, `strokeLinecap="round"`, `strokeLinejoin="round"`, and `fill="none"`.
5. Only keep `strokeLinecap` and `strokeLinejoin` on the individual path/shape elements if they are explicitly defined and deviate from the default `"round"` value.
6. If child elements reference `<defs>` (gradients, masks, clipPaths) — inline them into the shapes where possible, otherwise remove them and warn the user (Shisa icons should be simple strokes/fills).
7. Preserve grouping (`<g>`) only to the extent it affects geometry (like transforms); otherwise flatten groups and keep their children in document order.
8. Small-icon fill exception: base this decision on the dominant glyph's geometry (the bounding box of all shape elements), not the overall `viewBox`. If the dominant glyph bounding box width and height are both <= 4 units, produce a filled icon instead of a stroked icon. Deterministic measurement rule for LLMs/scripts:
   - Compute minX/minY and maxX/maxY across all shapes using their geometry attributes (`d` commands, `x`/`y`/`width`/`height` for rects, `cx`/`cy`/`r` for circles, points for polygons, etc.).
   - glyphWidth = maxX - minX; glyphHeight = maxY - minY.
   - If glyphWidth <= 4 AND glyphHeight <= 4 then treat as a small glyph and convert to a filled icon.
   - In that case: Remove any `stroke`/`strokeWidth` attributes from the shapes, set `fill="currentColor"` on the shape elements, and do not add `stroke` or `strokeWidth` to the wrapper.
   - Add a short comment in the generated file noting the icon was converted to a filled glyph because its dominant glyph bounding box is small.

## Output format (TSX component template)

Return a single file with this structure — replace `MyIcon` and the shapes block with the cleaned shapes from the SVG:

```tsx
import { SVGProps } from "react";
import Shisa from "../shisa";

const MyIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    {/* INSERT CLEANED AND CAMELCASED SHAPES HERE */}
  </Shisa>
);

export default MyIcon;
```

## Naming conventions

- **File name:** use kebab-case (lowercase, hyphen separated) with no `shisa-` prefix. Example: `checked-box.tsx`, `arrow-left.tsx`, `star.tsx`.
- **Component name:** use PascalCase derived from the file name without the `Shisa` prefix for the internal component. Example: `CheckedBox`, `ArrowLeft`, `Star`.
- **Index Export:** When exporting in `package/src/index.ts`, alias the default export by adding the `Shisa` prefix. Maintain alphabetical order in `index.ts`.
  Example mapping in `index.ts`:
  `export { default as ShisaCheckedBox } from "./icons/checked-box";`

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

LLM output (cleaned shapes inserted into `Shisa` — note camelCasing and stripping of defaults):

```tsx
import { SVGProps } from "react";
import Shisa from "../shisa";

const ExampleIcon: React.FC<SVGProps<SVGSVGElement>> = ({ ...props }) => (
  <Shisa {...props}>
    <rect x="2" y="2" width="44" height="44" rx="6" />
    <path d="M12 24L24 12L36 24" strokeLinecap="round" />
  </Shisa>
);

export default ExampleIcon;
```