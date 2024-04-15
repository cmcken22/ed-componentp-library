import { ButtonProps } from '../../Button';
import { SxProps } from '@mui/material';

export interface RangeFilterControlProps {
    id?: string;
    className?: string;
    sx?: SxProps;
    label?: string;
    Component?: React.ElementType;
    /**
     * Props to pass to the Component
     */
    ComponentProps?: any;
    minDistance?: number;
    onSubmit: (value: number[]) => void;
    onClear: (value: number[]) => void;
    value?: number[];
    defaultValue?: number[];
    min: number;
    max: number;
    /**
     * Controls when the value label is displayed:
     *
     * - `auto` the value label will display when the thumb is hovered or focused.
     * - `on` will display persistently.
     * - `off` will never display.
     * @default 'off'
     */
    displayValueTooltip?: "on" | "auto" | "off";
    clearBtnText?: string;
    clearBtnProps?: ButtonProps;
    applyBtnText?: string;
    applyBtnProps?: ButtonProps;
    minInputLabel?: string;
    maxInputLabel?: string;
    step?: number;
}
