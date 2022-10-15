import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({children, asChild,className, ...props}: ButtonProps) {
    const Component = asChild ? Slot : 'button';
    
    return (
        <Component
            className= {clsx(
                'bg-cyan-500 text-black text-sm font-semibold px-4 py-3 rounded w-full transition-colors hover:bg-cyan-300 focus:ring-1 ring-white',
                className,
            )}
            {...props}
        >
            {children}
        </Component>
    )
}