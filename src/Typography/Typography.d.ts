import { FontStyle, FontVariant, FontWeight } from "../theme/Typography";
export interface TypographyProps {
    variant: FontVariant;
    children?: any;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    className?: string;
    color?: string;
    fontSize?: string;
    preventTextSelection?: boolean;
    sx?: any;
}
declare const Typography: {
    ({ variant, children, fontWeight, fontStyle, className, color, fontSize, preventTextSelection, sx, }: TypographyProps): import('../../node_modules/react/jsx-runtime').JSX.Element;
    defaultProps: {
        preventTextSelection: boolean;
        sx: {};
    };
};
export default Typography;