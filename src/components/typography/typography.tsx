import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface TypographyH1Props {
  children?: ReactNode;
  className?: string;
}

export const TypographyH1: FC<TypographyH1Props> = ({ children, className }) => {
  return (
    <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
  );
};

interface TypographyH2Props {
  children?: ReactNode;
  className?: string;
}

export const TypographyH2: FC<TypographyH2Props> = ({ children, className }) => {
  return (
    <h2 className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
      {children}
    </h2>
  );
};

interface TypographyH3Props {
  children?: ReactNode;
  className?: string;
}

export const TypographyH3: FC<TypographyH3Props> = ({ children, className }) => {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>;
};

interface TypographyH4Props {
  children?: ReactNode;
  className?: string;
}

export const TypographyH4: FC<TypographyH4Props> = ({ children, className }) => {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>;
};

interface TypographyPProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyP: FC<TypographyPProps> = ({ children, className }) => {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>;
};

interface TypographyBlockquoteProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyBlockquote: FC<TypographyBlockquoteProps> = ({ children, className }) => {
  return (
    <blockquote className={cn("mt-6 border-l-4 border-violet-700 pl-6 italic text-xl", className)}>
      {children}
    </blockquote>
  );
};

interface TypographyInlineCodeProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyInlineCode: FC<TypographyInlineCodeProps> = ({ children, className }) => {
  return (
    <code
      className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
    >
      {children}
    </code>
  );
};

interface TypographyLeadProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyLead: FC<TypographyLeadProps> = ({ children, className }) => {
  return <p className={cn("text-xl text-muted-foreground")}>{children}</p>;
};

interface TypographySmallProps {
  children?: ReactNode;
  className?: string;
}

export const TypographySmall: FC<TypographySmallProps> = ({ children, className }) => {
  return <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>;
};

interface TypographyLargeProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyLarge: FC<TypographyLargeProps> = ({ children, className }) => {
  return <div className={cn("text-lg font-semibold", className)}>{children}</div>;
};

interface TypographyMutedProps {
  children?: ReactNode;
  className?: string;
}

export const TypographyMuted: FC<TypographyMutedProps> = ({ children, className }) => {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>;
};
