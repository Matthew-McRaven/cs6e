import type { ReactNode, FC } from "react";

import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gradient" | "fourthEdition" | "blue-gradient" | "gray-gradient";
  className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({ children, variant = "primary", className }) => {
  const variantMapping = {
    primary: "",
    fourthEdition: "bg-blue-50",
    secondary: "bg-violet-50",
    "blue-gradient": "bg-gradient-to-br from-blue-600 via-blue-400 to-orange-400 opacity-90",
    gradient: "bg-gradient-to-br from-purple-900 via-purple-800 to-amber-700 opacity-90",
    "gray-gradient": "bg-gradient-to-br from-black via-gray-800 to-gray-600 opacity-90",
  };

  return (
    <div className={cn("w-full flex flex-col justify-center items-center p-8", variantMapping[variant], className)}>
      <div className="container ">{children}</div>
    </div>
  );
};

export default ContentContainer;
