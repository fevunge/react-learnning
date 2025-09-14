import React from 'react';
import Icon from './Icon';
import Text from './Text';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva("flex items-center justify-center cursor-pointer transition rounded-lg groups gap-2", {
  variants: {
    variant: {
      primary: "bg-gray-200 hover:bg-pink-light",
    },
    size: {
      md: "h-15 py-4 px-5",
    },
    disable: {
      true: "opacity-50 pointer-events-none",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disable: false,
  },
});

export const buttonIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-pink-base",
    },
    size: {
      md: "w-5 h-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps extends Omit<React.ComponentProps<"button">, 'size' | 'disable'>, VariantProps<typeof buttonVariants> {
  icon?: React.ComponentType<typeof Icon['svg']>;
}

function Button({children, className, variant, size, disable, icon: IconComponent, ...props}: ButtonProps) {
  return (
    
    <button className={buttonVariants({variant, size, disable, className})} {...props}>
      {IconComponent && <Icon svg={IconComponent} className={buttonIconVariants({variant, size})} />}
      <Text variant="body-md-bold">{children}</Text>
    </button>
  )
};

export default Button;
