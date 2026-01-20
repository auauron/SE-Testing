import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DateTimePicker from "../components/ui/DateTimePicker";

const meta = {
    title: "Components/DateTimePicker",
    component: DateTimePicker,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;


export const InvalidInputs: Story = {
    args: {
        date: "dsfsdf",
        time: "dfgdfg",
        onDateChange: (date: string) => {},
        onTimeChange: (time: string) => {}
    },
};

export const VeryLongCustomLabels: Story = {
    args: {
        date: "2026-01-20",
        time: "09:00",
        dateLabel: "Appointment Date Appointment Date Appointment Date Appointment Date Appointment Date Appointment Date Appointment Date",
        timeLabel: "Appointment Time Appointment Time Appointment Time Appointment Time Appointment Time Appointment Time Appointment Time",
        onDateChange: (date: string) => {},
        onTimeChange: (time: string) => {}
    },
};

export const CustomClassName: Story = {
    args: {
        date: "2026-01-20",
        time: "06:07",
        dateLabel: "Select Date",
        timeLabel: "Select Time",
        className: "bg-red-100 p-4 rounded-lg text-red font-bold shadow-lg hover:shadow-xl transition-shadow duration-300",
        onDateChange: (date: string) => {},
        onTimeChange: (time: string) => {}
    },
};



