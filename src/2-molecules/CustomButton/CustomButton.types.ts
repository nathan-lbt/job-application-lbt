//********** Types **********//
type ButtonVariant = "text" | "outlined" | "contained";
type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

//********** Props **********//
export interface CustomButtonProps {
  /** The color of the button. */
  color?: ButtonColor;
  /** True if the button is disabled. */
  disabled?: boolean;
  /** The end icon. */
  endIcon?: React.ReactNode;
  /** The label of the button. */
  label?: string;
  /** The start icon of the button. */
  startIcon?: React.ReactNode;
  /** The variant of the button. */
  variant?: ButtonVariant;
  /** Callback fired when the button is clicked. */
  onClick?: () => void;
}
