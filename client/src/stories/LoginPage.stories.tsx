import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const emailInput = canvas.getByPlaceholderText('Enter your email');
    const passwordInput = canvas.getByPlaceholderText('Enter your password');
    
    await userEvent.type(emailInput, 'test@example.com', { delay: 100 });
    await userEvent.type(passwordInput, 'password123', { delay: 100 });
    
    await expect(emailInput).toHaveValue('test@example.com');
    await expect(passwordInput).toHaveValue('password123');
  },
};

export const FormSubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const emailInput = canvas.getByPlaceholderText('Enter your email');
    const passwordInput = canvas.getByPlaceholderText('Enter your password');
    const submitButton = canvas.getByRole('button', { name: /log in/i });
    
    await userEvent.type(emailInput, 'user@bloombuhay.com', { delay: 50 });
    await userEvent.type(passwordInput, 'securePass123', { delay: 50 });
    
    await userEvent.click(submitButton);
    
    await expect(canvas.getByRole('button', { name: /logging in/i })).toBeInTheDocument();
  },
};
