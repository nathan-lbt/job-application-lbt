//********** Imports **********//
import { Grid, Chip, styled } from "@mui/material";
import { ArrowIcon } from "../../utils/icons";
import CustomButton from "../../2-molecules/CustomButton";
import { AddFormTopBarProps } from "./AddFormTopBar.types";

//********** Slots **********//
const ContainerSlot = styled(Grid)({
  backgroundColor: "#eeeeee",
  padding: 8,
  borderRadius: 4,
});

//********** Component **********//
const AddFormTopBar = (props: AddFormTopBarProps) => {
  const { sheets, onClick } = props;

  return (
    <Grid container padding={0} justifyContent="center">
      <ContainerSlot
        container
        item
        padding={0}
        xs={10}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item xs={6}>
          <Chip label={`${sheets ?? 0} train(s) added`} />
        </Grid>
        <Grid container item xs={6} justifyContent="right">
          <CustomButton
            label="Go to form edition"
            endIcon={<ArrowIcon />}
            onClick={onClick}
            variant="outlined"
          />
        </Grid>
      </ContainerSlot>
    </Grid>
  );
};
AddFormTopBar.displayName = "AddFormTopBar";
export default AddFormTopBar;
