import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-white dark:bg-neutral-800 p-4 border border-neutral-200 dark:border-b-0 dark:border-x-0 dark:border-neutral-700 rounded-xl shadow-lg w-80",
          icon: "text-neutral-500 dark:text-neutral-400",
          title:
            "text-black dark:text-white font-medium text-sm absolute top-3.5 left-10",
          description: "text-neutral-500 dark:text-neutral-400 text-sm pt-2",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
