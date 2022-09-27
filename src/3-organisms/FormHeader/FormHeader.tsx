//********** Imports **********/
import { Grid, Typography } from "@mui/material";
import CustomButton from "../../2-molecules/CustomButton";
import { FormHeaderProps } from "./FormHeader.types";

//********** Component **********/
const FormHeader = (props: FormHeaderProps) => {
  const { date, editionMode, reference, editModeClicked } = props;

  return (
    <Grid item container xs={12}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Typography
          textAlign="center"
          variant="h6"
        >{`${reference} - ${date}`}</Typography>
      </Grid>
      <Grid item container xs={2} justifyContent="right">
        <CustomButton
          label="EDIT"
          variant={editionMode ? "outlined" : "contained"}
          onClick={editModeClicked}
        />
      </Grid>
    </Grid>
  );
};
FormHeader.displayName = "FormHeader";
export default FormHeader;
