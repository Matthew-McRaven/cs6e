import type { FC, ReactNode } from "react";

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from "./typography";

type TextVariants = "muted" | "small" | "large" | "lead" | "inline-code" | "blockquote" | "p";
type HeadingVariants = "h1" | "h2" | "h3" | "h4";

type AllText = TextVariants | HeadingVariants;

const variantMapping: Record<AllText, FC<{ children?: ReactNode }>> = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  "inline-code": TypographyInlineCode,
  lead: TypographyLead,
  small: TypographySmall,
  large: TypographyLarge,
  muted: TypographyMuted,
};

interface TextProps {
  variant?: TextVariants;
  children?: ReactNode;
}

export const Text: FC<TextProps> = ({ variant = "p", children }) => {
  const Component = variantMapping[variant];

  return <Component>{children}</Component>;
};

interface HeadingProps {
  variant?: HeadingVariants;
  children?: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ variant = "h1", children }) => {
  const Component = variantMapping[variant];

  return <Component>{children}</Component>;
};
