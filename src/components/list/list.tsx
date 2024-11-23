import type { FC, ComponentProps } from "react";

import { cn } from "@/lib/utils";

interface ListProps extends ComponentProps<"ul"> {}

export const List: FC<ListProps> = ({ children, className, ...props }) => {
  return (
    <ul className={cn("my-4 ml-6 list-disc", className)} {...props}>
      {children}
    </ul>
  );
};

interface ListItemProps extends ComponentProps<"li"> {}

export const ListItem: FC<ListItemProps> = ({ className, children, ...props }) => {
  return (
    <li className={cn("mt-2", className)} {...props}>
      {children}
    </li>
  );
};