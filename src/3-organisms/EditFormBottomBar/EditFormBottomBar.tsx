//********** Imports **********//
import { Grid, styled } from "@mui/material";
import CustomButton from "../../2-molecules/CustomButton";
import { EditFormBottomBarProps } from "./EditFormBottomBar.types";

//********** Slots **********//
const ContainerSlot = styled(Grid)({
  backgroundColor: "#eeeeee",
  padding: 8,
  borderRadius: 4,
});

//********** Component **********//
const EditFormBottomBar = (props: EditFormBottomBarProps) => {
  const { onClick } = props;

  return (
    <Grid container padding={0} justifyContent="center">
      <ContainerSlot
        container
        item
        padding={0}
        xs={10}
        justifyContent="right"
        alignItems="center"
      >
        <CustomButton
          color="warning"
          label="Delete all trains"
          variant="text"
          onClick={onClick}
        />
      </ContainerSlot>
    </Grid>
  );
};
EditFormBottomBar.displayName = "EditFormBottomBar";
export default EditFormBottomBar;
