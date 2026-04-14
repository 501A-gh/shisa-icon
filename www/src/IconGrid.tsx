import * as Icons from "shisa-icon";
import { toast } from "sonner";

export default function IconGrid({ search }: { search: string }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(`<${text}/>`).then(() => {
      toast("Copied", {
        icon: <Icons.ShisaCopy />,
        description: `Added "<${text}/>" to clipboard!`,
      });
    });
  };

  const filteredIcons = Object.entries(Icons).filter(
    ([name, component]) =>
      name.startsWith("Shisa") &&
      name !== "Shisa" &&
      name.toLowerCase().includes(search.toLowerCase()) &&
      typeof component === "function",
  );

  return (
    <div className="flex flex-wrap justify-start gap-0.5 text-xl sm:text-2xl *:cursor-copy *:transition-transform *:p-3 *:rounded-xl *:active:scale-95 *:hover:bg-zinc-100 dark:*:hover:bg-zinc-800">
      {filteredIcons.map(([name, IconComponent]) => (
        <button key={name} title={name} onClick={() => copyToClipboard(name)}>
          {/* @ts-expect-error Component types are not fully statically resolved here */}
          <IconComponent name={name} />
        </button>
      ))}
    </div>
  );
}
