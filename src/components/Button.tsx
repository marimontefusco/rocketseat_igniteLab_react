import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({children, asChild}: ButtonProps) {
    const Component = asChild ? Slot : 'button';
    
    return (
        <Component
            className= {clsx(
                'bg-cyan-500 text-black text-sm font-semibold px-3 py-4 rounded w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'
            )}
        >
            {children}
        </Component>
    )
}