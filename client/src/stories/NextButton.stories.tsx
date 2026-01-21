import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { MemoryRouter } from "react-router-dom";
import NextButton from "../components/ui/NextButton";

const meta = {
  title: "Components/NextButton",
  component: NextButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isReady: false,
  },
};

export const Ready: Story = {
  args: {
    isReady: true,
  },
};

export const WithRoute: Story = {
  args: {
    isReady: true,
    route: "/next-page",
    onComplete: () => console.log("Moving to next step..."),
  },
};
