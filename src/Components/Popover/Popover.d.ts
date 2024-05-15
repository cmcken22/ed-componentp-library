import { PopoverProps } from './Popover.types';

declare const Popover: {
    ({ children, open: isOpen, anchorEl, onClose, arrow, allowFlip, placement, offset, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<PopoverProps>;
};
export default Popover;