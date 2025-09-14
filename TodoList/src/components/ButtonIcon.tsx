import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Icon from './Icon';

export const buttonIconVariants = cva('inline-flex items-center justify-center cursor-pointer transition group', {
  variants: {
    variant: {
      primary: 'bg-green-base hover:bg-green-dark',
      secondary: 'bg-gray-200 hover:bg-pink-base',
      tertiary: 'bg-transparent hover:bg-gray-200',
    },
    size: {
      sm: 'w-6 h-6 p-1 rounded',
    },
    disable: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
    disable: false,
  },
});

export const buttonIconIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-white',
      secondary: 'fill-pink-base group-hover:fill-white',
      tertiary: 'fill-gray-300 group-hover:fill-gray-400',
    },
    size: {
      sm: 'w-4 h-4',
    }
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonIconProps  extends Omit< React.ComponentProps<'button'>, 'size' | 'disable'>, VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon['svg']>;
}

function ButtonIcon({variant ,size, disable, className, icon, ...props}: ButtonIconProps) {
  return (
    <button className={buttonIconVariants({variant, size, disable, className})} {...props}>
      <Icon svg={icon} className={buttonIconIconVariants({variant})} />
    </button>
  );
}

export default ButtonIcon;
