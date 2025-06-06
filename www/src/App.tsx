import IconGrid from "./IconGrid";
import { version } from "shisa-icon/package.json";

function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-between">
      <header className="mx-auto max-w-96 py-12 grid gap-6">
        <hgroup className="text-center grid gap-3">
          <h1>Shisa Iconography</h1>
          <h4>A collection of icons.</h4>
        </hgroup>
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.npmjs.com/package/shisa-icon">NPM</a>
          <a href="https://github.com/501A-gh/shisa-icon">GitHub</a>
        </div>
      </header>
      <IconGrid />
      <footer className="mx-auto max-w-96 py-12 text-center grid gap-6">
        <p>Version {version}</p>
        <p>
          Designed by{" "}
          <a
            href="https://501A.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            501A
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
