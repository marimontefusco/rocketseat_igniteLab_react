import { TextInput, TextInputProps } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';

export default {
    title: 'Components/TextInput',
    component: TextInput, 
    args: {
        placeholder: 'Type your e-mail address',
        type: 'email',
    },
    argTypes: {}
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {};
