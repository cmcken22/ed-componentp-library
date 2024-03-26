/// <reference types="react" />
import { CommonSelectProps } from "../Common/Common.types";
export interface SelectProps extends CommonSelectProps {
    value?: string;
    onChange?: (value: string) => void;
    renderValue?: (value: string, option: any) => React.ReactNode;
}