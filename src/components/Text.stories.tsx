import { Text, TextProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/Text',
    component: Text, 
    args: {
        children: 'Lorem ipsum.',
    }

} as Meta<TextProps>;

/* Configurações de tamanho de fonte: */
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
};