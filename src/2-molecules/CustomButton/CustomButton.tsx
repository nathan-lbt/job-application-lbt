//********** Imports **********//
import { Button, styled } from "@mui/material";
import { CustomButtonProps } from "./CustomButton.types";

//********** Slots **********//
const CustomButtonSlot = styled(Button)({ marginRight: 4 });

//********** Component **********//
const CustomButton = (props: CustomButtonProps) => {
  const {
    color,
    endIcon,
    disabled,
    label,
    startIcon,
    variant = "contained",
    onClick,
  } = props;

  return (
    <CustomButtonSlot
      endIcon={endIcon}
      startIcon={startIcon}
      variant={variant}
      onClick={onClick}
      color={color}
      disabled={disabled}
    >
      {label}
    </CustomButtonSlot>
  );
};
CustomButton.displayName = "CustomButton";
export default CustomButton;
