import type { Meta, StoryObj } from "@storybook/react";
import InputField from "../components/ui/inputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your email",
  },
};

export const WithValue: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "user@example.com",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your email",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    value: "invalid-email",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
  },
};
