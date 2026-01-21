import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { MemoryRouter } from 'react-router-dom';
import { fn } from 'storybook/test';
import Setup from '../pages/Setup';

const meta: Meta<typeof Setup> = {
  title: 'Pages/Setup',
  component: Setup,
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
  args: {
    onStageSelect: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Setup>;

// Default state - no selection made yet
export const Default: Story = {};

// Story with user information displayed
export const WithUserInfo: Story = {
  args: {
    fullName: 'Maria Santos',
    email: 'maria.santos@example.com',
  },
};

// Story demonstrating stage selection interaction
export const SelectStage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the dropdown
    const dropdown = canvas.getByRole('button', { name: /select a stage/i });
    await userEvent.click(dropdown, { delay: 500 });

    // Select "Pregnant" option
    const pregnantOption = canvas.getByText('Pregnant');
    await userEvent.click(pregnantOption, { delay: 500 });

    // Verify the selection is displayed
    const selectedDropdown = canvas.getByRole('button', { name: /pregnant/i });
    await expect(selectedDropdown).toBeInTheDocument();

    // Verify the Next button is now enabled
    const nextButton = canvas.getByRole('button', { name: /next/i });
    await expect(nextButton).not.toBeDisabled();
  },
};
