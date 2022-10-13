import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
};

export function Text({ size = 'md', children, asChild }: TextProps) {
    const Component = asChild ? Slot : 'span'; 

    return (
        <Component 
            className= { clsx(
                'text-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg'
                }
            )}
        >
            { children }
        </Component>
    )
};

/* size = 'md'  -> se não informar o tamanho da fonte, usar o padrão que é o md medium */

/* Aplique a classe text-xs caso o tamanho pedido seja 'sm', 
classe text-sm caso o tamanho pedido seja 'md', 
classe text-md caso o tamanho pedido seja 'lg'
*/