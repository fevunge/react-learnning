import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';


export const textVariants = cva('font-sans text-gray-400', {
  variants: {
    variant: {
      'body-md': 'text-base leading-6 font-normal',
      'body-md-bold': 'text-base, leading-6 font-semibold',
      'body-sm-bold': 'text-sm leading-5 font-semibold',
    },
  },
  defaultVariants: {
    variant: 'body-md',
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  className?: string
}

function Text ({children, as, variant, className, ...props}: TextProps) {
  const Tag = as || 'span';
  return <Tag className={textVariants({variant, className})} {...props}>{children}</Tag>;
}

export default Text;
