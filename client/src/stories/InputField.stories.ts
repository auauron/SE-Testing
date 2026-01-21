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

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    value: "mySecretPassword123",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your password",
  },
};

export const TextInput: Story = {
  args: {
    label: "Full Name",
    type: "text",
    value: "",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your full name",
  },
};

export const NumberInput: Story = {
  args: {
    label: "Age",
    type: "number",
    value: "",
    onChange: (value) => console.log("Input changed:", value),
    placeholder: "Enter your age",
    min: 0,
    max: 120,
  },
};



