import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

/* Pattern de Composição -> pattern do React pra qndo a gente trabalha com
componentes que serão na verdade um conjunto de vários outros componentes */

/* Componente TextInputRoot -> TextInputIcon + TextInputInput */
export interface TextInputRootProps {
    children: ReactNode;
};

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div 
        className='flex items-center gap-3 py-4 px-3 w-full rounded bg-gray-800 focus-within:ring-1 ring-cyan-500'
        >
            {props.children}
        </div>
    )
};

TextInputRoot.displayName = 'TextInput.Root';

/* Componente TextInputIcon */
export interface TextInputIconProps {
    children: ReactNode;
};

function TextInputIcon(props: TextInputIconProps){
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
};

TextInputIcon.displayName = 'TextInput.Icon';

/* Componente TextInputInput */
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{};
    // TextInputProps agora pode receber toda propriedade existente no HTML tradicional

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className='flex-1 bg-transparent text-gray-100 text-xs font-sans placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
};

TextInputInput.displayName = 'TextInput.Input';
 
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};

/* gap-3 -> dist entre icon e placeholder */