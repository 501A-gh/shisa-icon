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
