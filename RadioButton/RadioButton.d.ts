interface RadioButtonProps {
    checked?: boolean;
    disabled?: boolean;
    label: string;
    value: any;
    onChange: (value: any, checked: boolean) => void;
    allowDeselect?: boolean;
}
declare const RadioButton: {
    ({ checked: passedValue, disabled, label, value, onChange, allowDeselect, }: RadioButtonProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: {
        checked: boolean;
        disabled: boolean;
        allowDeselect: boolean;
    };
};
export default RadioButton;
