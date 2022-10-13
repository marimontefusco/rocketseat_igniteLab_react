import { clsx } from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
}
/* TextInputProps agora pode receber toda propriedade 
existente no HTML tradicional */

export function TextInput(props: TextInputProps) {
    return (
        <input
        className={clsx('bg-gray-800 text-gray-100 text-xs font-sans w-full outline-none py-4 px-3 rounded placeholder:text-gray-400 focus:ring-1 ring-cyan-500')}
        {...props}
        />
    )
}