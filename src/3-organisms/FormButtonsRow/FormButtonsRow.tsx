//********** Imports **********//
import { Grid } from "@mui/material";
import CustomButton from "../../2-molecules/CustomButton";
import { FormButtonsRowProps } from "./FormButtonsRow.types";

//********** Component **********//
const FormButtonsRow = (props: FormButtonsRowProps) => {
  const {
    clearable,
    complete,
    editable,
    empty,
    editionMode,
    clearFields,
    deleteFields,
    editFields,
    saveFields,
  } = props;

  return (
    <>
      <Grid item xs={8} />
      <Grid item container xs={4} marginBottom={2} gap={2} justifyContent="end">
        {clearable && (
          <CustomButton
            disabled={empty}
            label="CLEAR"
            color="warning"
            onClick={clearFields}
          />
        )}
        {editable && (
          <CustomButton label="DELETE" color="error" onClick={deleteFields} />
        )}
        <CustomButton
          disabled={empty || !complete || !editionMode}
          label="SAVE"
          onClick={editable ? editFields : saveFields}
        />
      </Grid>
    </>
  );
};
FormButtonsRow.displayName = "FormButtonsRow";
export default FormButtonsRow;
