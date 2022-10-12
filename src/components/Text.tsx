interface TextProps {
    size?: 'sm' | 'md' | 'lg';
}

export function Text({ size = 'md' }: TextProps) {
    return (
        <h1 className="text-gray-100 font-sans">Hello world</h1>
    )
}

/* size = 'md'  -> se não informar o tamanho da fonte, usar o padrão que é o md medium */