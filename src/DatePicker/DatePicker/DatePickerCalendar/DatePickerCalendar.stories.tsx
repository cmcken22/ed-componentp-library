import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { sourceCodeFormatter } from "src/utils";
import DatePickerCalendar from ".";

const meta = {
  title: "Example/Date Picker/DatePickerCalendar",
  component: DatePickerCalendar,
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("DatePickerCalendar"),
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentDate: {
      control: {
        type: "date",
      },
    },
    value: {
      control: {
        type: "date",
      },
    },
  },
} satisfies Meta<typeof DatePickerCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    let formattedProps = {};
    if (args?.currentDate) {
      formattedProps = {
        ...formattedProps,
        currentDate: new Date(args?.currentDate),
      };
    }
    if (args?.value) {
      formattedProps = {
        ...formattedProps,
        value: new Date(args?.value),
      };
    }
    return <DatePickerCalendar {...args} {...formattedProps} />;
  },
  args: {
    ...DatePickerCalendar.defaultProps,
    value: null,
    disableFuture: false,
    disableCurrent: false,
    disablePast: false,
    currentDate: new Date() as Date,
    numberOfMonths: 1,
    onSelect: fn(),
  },
};
