import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true, // Generate .d.ts files
  minify: false, // Optional: set to true if you want minified output
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"], // Keep peer deps out of your bundle
});
