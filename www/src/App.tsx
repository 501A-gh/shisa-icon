import { useState } from "react";
import IconGrid from "./IconGrid";
import { version } from "shisa-icon/package.json";

function App() {
  const [search, setSearch] = useState("");

  return (
    <main className="w-full min-h-screen flex flex-col gap-12 py-12 ">
      <header className="flex items-start justify-between gap-6 mx-auto w-full max-w-6xl px-8">
        <hgroup className="grid gap-3">
          <h1>Shisa Iconography</h1>
          <h4>
            Designed by{" "}
            <a
              href="https://501A.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              501A
            </a>
          </h4>
        </hgroup>
        <div className="grid gap-4 pt-1">
          <p className="text-right">Version {version}</p>
          <div className="flex items-center justify-end gap-6">
            <a href="https://www.npmjs.com/package/shisa-icon">NPM</a>
            <a href="https://github.com/501A-gh/shisa-icon">GitHub</a>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-6 mx-auto w-full max-w-6xl px-6">
        <input
          type="search"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 bg-none border-transparent outline-none"
        />
        <IconGrid search={search} />
      </div>
    </main>
  );
}

export default App;
