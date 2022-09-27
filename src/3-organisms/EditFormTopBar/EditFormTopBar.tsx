//********** Imports **********//
import { Grid, Chip, styled } from "@mui/material";
import { ArrowPreviousIcon } from "../../utils/icons";
import CustomButton from "../../2-molecules/CustomButton";
import { EditFormTopBarProps } from "./EditFormTopBar.types";

//********** Slots **********//
const ContainerSlot = styled(Grid)({
  backgroundColor: "#eeeeee",
  padding: 8,
  borderRadius: 4,
});

//********** Component **********//
const EditFormTopBar = (props: EditFormTopBarProps) => {
  const { sheets, onClick } = props;

  return (
    <Grid container padding={0} justifyContent="center">
      <ContainerSlot
        container
        item
        xs={10}
        padding={0}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item xs={6}>
          <CustomButton
            label="Add new train"
            startIcon={<ArrowPreviousIcon />}
            variant="outlined"
            onClick={onClick}
          />
        </Grid>
        <Grid container item xs={6} justifyContent="right">
          <Chip label={`${sheets} train(s)`} />
        </Grid>
      </ContainerSlot>
    </Grid>
  );
};
EditFormTopBar.displayName = "EditFormTopBar";
export default EditFormTopBar;
