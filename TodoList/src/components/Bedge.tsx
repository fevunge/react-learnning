import React from 'react';
import Text from './Text';
import { cva, type VariantProps } from 'class-variance-authority';

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light",
    },
    size: {
      sm: "px-2 py-0.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export const badgeTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-green-dark",
      secondary: "text-pink-dark",
    }
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps extends React.ComponentProps<"div">, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, children, ...props }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text variant="body-md-bold" className={badgeTextVariants({variant})}>{children}</Text>
    </div>
  );
}

export default Badge;
