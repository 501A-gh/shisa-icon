![Banner Image](/www/public/banner.png)

# Shisa Iconography

A collection of icons designed by [501A](https://501A.vercel.app).

## Installation

Install the package via npm:

```bash
npm install shisa-icon
```

## Usage

### Importing Icons

Import the icon components you need:

```javascript
import { ShisaPointer } from "shisa-icon";
```

### Displaying an Icon

Icons scale with the surrounding text (`em` units) and inherit the current text color (`currentColor`). This makes them easy to theme and size using CSS or utility classes like Tailwind.

```html
<div class="text-lg text-black dark:text-white">
  <ShisaPointer />
</div>
```

## Props

All standard `SVGProps<SVGSVGElement>` are supported.

| Prop             | Type                      | Description                                        |
| ---------------- | ------------------------- | -------------------------------------------------- |
| `width`/`height` | `string \| number`        | Defaults to `"1em"`. Inherits from text size.      |
| `stroke`         | `string`                  | Defaults to `"currentColor"`. Inherits text color. |
| `children`       | `ReactNode`               | Used to define the icon's path(s).                 |
| `...props`       | `SVGProps<SVGSVGElement>` | Pass any other valid SVG attributes.               |

### Example

This renders a blue icon scaled to match 2xl text size.

```html
<ShisaPointer className="text-blue-500 text-2xl" />
```

## Custom Icons

You can create custom icons using the `Shisa` component. This component allows you to define your own SVG paths while maintaining the same styling and behavior as the built-in icons.

### Designing Custom Icons

When designing a custom icons using along side the built-in icons there are a few things to keep in mind:

- **SVG Format**: Custom icons should be created in SVG format to ensure scalability and compatibility.
- **Shape Semantics**: Use semantically appropriate SVG elements. For instance, Circles should be created with the `<circle/>` tag, not a `<rect/>` with rounded corners. Lines should be defined using `<line/>` or `<path/>`, not stretched rectangles. This keeps the markup clean and meaningful.
- **Size**: All Shisa icons were designed in a 24x24 pixel grid. Custom icons should adhere to this grid for consistency.
- **Stroke**: All icons use a stroke width of 2px. Custom icons should also use this stroke width for uniformity.
- **Color**: Icons inherit the current text color, so ensure your custom icons are designed to work well with this.

### Example Custom Icon

Once you have your SVG paths ready, you can use the `Shisa` component to render them. The `Shisa` component accepts children that define the SVG paths, allowing you to create custom icons while maintaining the same styling as the built-in icons.

The `Shisa` component is a wrapper that applies the necessary styles and behaviors to your custom icons, ensuring they integrate seamlessly with the rest of the Shisa iconography. You can pass any valid SVG attributes to the `Shisa` component, just like you would with a standard SVG element.

```tsx
import { SVGProps } from "react";
import { Shisa } from "shisa-icon";

const CustomIcon = ({ ...props }: SVGProps<SVGSVGElement>) => (
  <Shisa {...props}>
    <path d="M1 19.5088L14.0008 8.72087C14.0008 8.72087 15.1073 7.85415 15.1073 6.5264C15.1073 4.84828 13.9824 4 12.5993 4C11.331 4 10.1282 4.84828 10.1282 6.5264C10.1282 11.2939 10.1282 13.8474 10.1282 17.5725C10.1282 18.9556 9.02179 20.047 7.63873 20.062C6.25566 20.0771 5.1492 18.9556 5.1492 17.5725C5.1492 16.1894 5.9606 14.8064 7.63873 14.8064C13.4216 14.8064 23 14.8801 23 14.8801" />
    <path d="M18 4V20" />
  </Shisa>
);

export default CustomIcon;
```

> Note: the `Shisa` wrapper applies defaults for sizing, stroke and color. That means you should not set top-level SVG attributes on the component itself (for example `width`, `height`, `stroke`, `strokeWidth`, or `fill`).

> However, the icon's geometry — the actual shape data inside the component — must include coordinates and sizes where appropriate (for example a `<rect x="1" y="1" width="22" height="22"/>` or a `<path d="..."/>`). In short: do not set root SVG sizing/paint attributes, but do include shape coordinates and sizes in your child elements (these define the glyph). Shisa icons inherit `currentColor` and scale with surrounding text.

### Automating Figma SVG to Shisa TSX Conversion

You can use an AI agentic tools like VScode's agent mode or Cursor to help automate the conversion of Figma SVGs into Shisa components. Attach a link to this document: [Figma_To_Shisa.md](Figma_To_Shisa.md) with reference to the Figma exported SVGs to produce consistent, clean Shisa-style TSX components.

On VScode agent mode, you type the following prompt to fetch the document:

```
#fetch https://raw.githubusercontent.com/501A-gh/shisa-icon/refs/heads/main/Figma_To_Shisa.md
```
