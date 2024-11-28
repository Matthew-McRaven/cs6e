import type { FC, ReactNode } from "react";

interface TypographyH1Props {
  children?: ReactNode;
}

export const TypographyH1: FC<TypographyH1Props> = ({ children }) => {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>;
};

interface TypographyH2Props {
  children?: ReactNode;
}

export const TypographyH2: FC<TypographyH2Props> = ({ children }) => {
  return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>;
};

interface TypographyH3Props {
  children?: ReactNode;
}

export const TypographyH3: FC<TypographyH3Props> = ({ children }) => {
  return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
};

interface TypographyH4Props {
  children?: ReactNode;
}

export const TypographyH4: FC<TypographyH4Props> = ({ children }) => {
  return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
};

interface TypographyPProps {
  children?: ReactNode;
}

export const TypographyP: FC<TypographyPProps> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

interface TypographyBlockquoteProps {
  children?: ReactNode;
}

export const TypographyBlockquote: FC<TypographyBlockquoteProps> = ({ children }) => {
  return <blockquote className="mt-6 border-l-4 border-violet-700 pl-6 italic text-xl">{children}</blockquote>;
};

interface TypographyInlineCodeProps {
  children?: ReactNode;
}

export const TypographyInlineCode: FC<TypographyInlineCodeProps> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

interface TypographyLeadProps {
  children?: ReactNode;
}

export const TypographyLead: FC<TypographyLeadProps> = ({ children }) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};

interface TypographySmallProps {
  children?: ReactNode;
}

export const TypographySmall: FC<TypographySmallProps> = ({ children }) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};

interface TypographyLargeProps {
  children?: ReactNode;
}

export const TypographyLarge: FC<TypographyLargeProps> = ({ children }) => {
  return <div className="text-lg font-semibold">{children}</div>;
};

interface TypographyMutedProps {
  children?: ReactNode;
}

export const TypographyMuted: FC<TypographyMutedProps> = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};
