import { cn } from "@/lib/utils";

type TRadioButtonProps = {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

export const RadioButton = ({
  value,
  checked,
  onChange,
  children,
}: TRadioButtonProps) => (
  <button
    type="button"
    onClick={() => onChange(value)}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      checked
        ? "bg-primary text-primary-foreground hover:bg-primary/90"
        : "bg-muted hover:bg-muted/80",
    )}
  >
    {children}
  </button>
);
