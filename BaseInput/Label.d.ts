export interface LabelProps {
    children?: any;
    required?: boolean;
    position?: "top" | "left";
    tooltip?: string;
}
declare const Label: ({ children, required, position, tooltip }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
