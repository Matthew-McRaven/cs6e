import type { ReactNode, FC } from "react";

import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient" | "fourthEdition";
}

const ContentContainer: FC<ContentContainerProps> = ({ children, variant = "primary" }) => {
  const variantMapping = {
    primary: "",
    fourthEdition: "bg-blue-50",
    secondary: "bg-violet-50",

    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 opacity-90",
  };

  return (
    <div className={cn("w-full flex flex-col justify-center items-center p-8", variantMapping[variant])}>
      <div className="container ">{children}</div>
    </div>
  );
};

export default ContentContainer;
