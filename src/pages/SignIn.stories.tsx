import { Meta, StoryObj} from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';


export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta;

export const Default: StoryObj = {

    //Testes: Simulação das Interações do usuário:
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'mariabiriba@gmail.com');
        userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '12345678');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument(); 
        }) 
    }
};

//canvasElement() -> é o wireframe que mostra o nosso elemento
//expect() -> o q espero que aconteça na interface depois que o usuário já completou os campos e clicou no bot -> ser redirecionado pra uma nova tela? Que o texto 'Login realizado!' apareça na minha tela? 
//.toBeInTheDocument() -> esteja em tela
//waitFor() -> cria um setInterval e fica em loop, rodando o código dentro dos () várias vezes até passar no teste