import type { ReactNode, FC, ComponentProps } from "react";

import { cn } from "@/lib/utils";

type C = ComponentProps<"a">;

interface ContentContainerProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient" | "fourthEdition" | "blue-gradient" | "gray-gradient";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ContentContainer: FC<ContentContainerProps> = ({ as, children, variant = "primary", className }) => {
  const Component = as || "div";

  const variantMapping = {
    primary: "",
    fourthEdition: "bg-blue-50",
    secondary: "bg-violet-50",
    "blue-gradient": "bg-gradient-to-br from-blue-600 via-blue-400 to-orange-400 opacity-90",
    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 opacity-90",
    "gray-gradient": "bg-gradient-to-br from-black via-gray-800 to-gray-600 opacity-90",
  };

  return (
    <Component
      className={cn("w-full flex flex-col justify-center items-center p-24", variantMapping[variant], className)}
    >
      <div className="container ">{children}</div>
    </Component>
  );
};

export default ContentContainer;
