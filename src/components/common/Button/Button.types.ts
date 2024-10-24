// Button.types.ts
import { ComponentProps } from "react";

export type Props = {
  theme?: "primary" | "secondary";
  size?: "large" | "small" | "long"|"responsive"  ;
} & ComponentProps<"button">;
