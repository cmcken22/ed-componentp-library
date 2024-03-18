import { SxProps } from "@mui/material";
import { createContext } from "react";
import { Status } from "src/CommonTypes";

export interface BaseInputProps {
  id?: string;
  className?: string;
  status?: Status;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  /**
   * Style props for the container
   * @type SxProps
   */
  sx?: SxProps;
}

export interface StandardInputProps extends Omit<BaseInputProps, "children"> {}

export type BaseInputContext = {
  status: Status | undefined;
  required?: boolean;
  disabled?: boolean;
  labelPosition?: "top" | "left";
  endAdornment?: React.ReactNode;
  setLabelPosition: (pos: string) => void;
  setStatus?: (status: Status | undefined) => void;
};

const defaultContext: BaseInputContext = {
  status: undefined,
  required: false,
  disabled: false,
  labelPosition: "top",
  endAdornment: undefined,
  setLabelPosition: () => {},
  setStatus: () => {},
};

export const BaseInputContext = createContext<BaseInputContext>(defaultContext);
