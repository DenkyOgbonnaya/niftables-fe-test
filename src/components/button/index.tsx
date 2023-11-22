import { cva, VariantProps } from "class-variance-authority";

const button = cva("flex justify-center  shrink-0 items-center  outline-none bg-transparent font-body rounded-md gap-5 font-bold text-lg leading-[1.2375rem] text-white", {
  variants: {
    intent: {
      primary: "button",
      outline: "border-[2px] border-white",
    },
    size: {
      sm: "w-[8.25rem] h-[2.375rem] desktop:h-[2.75rem] gap-[0.8125rem] ",
      lg: "h-[3.375rem] "
    },
  },
 
  defaultVariants: {
    intent: "primary",
    size: "lg",
  },
});
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function Button({
  children,
  isLoading,
  className,
  intent,
  size,
  ...rest
}: ButtonProps) {
  return (
    <button className={button({ intent, size, className })} {...rest}>
      {isLoading ? "Loading..." : children}
    </button>
  );
}
