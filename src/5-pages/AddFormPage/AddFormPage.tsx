//********** Imports **********//
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddFormTopBar from "../../3-organisms/AddFormTopBar";
import FormLayout from "../../4-layouts/FormLayout";
import { RootState, store } from "../../redux/store";
import { sheetAdded, trainSheetsSelector } from "../../redux/trainSheets.slice";
import { TGVSheet } from "../../utils/types";

//********** Component **********//
const AddFormPage = () => {
  // Hooks
  const navigate = useNavigate();

  // Store
  const sheets = useSelector((state: RootState) =>
    trainSheetsSelector.selectAll(state)
  );
  const sheetReferences = useSelector(
    (state: RootState) => state.trainSheets.ids
  );

  const goToForm = () => navigate("/edit");

  const [open, setOpen] = useState(false);

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const onSaveClicked = (sheet: TGVSheet) => {
    const { commentary, identifier, reference, model, year, date } = sheet;
    if (sheetReferences.includes(reference)) {
      setOpen(true);
      return;
    } else {
      store.dispatch(
        sheetAdded({
          date,
          reference,
          commentary,
          identifier,
          model,
          year,
        })
      );
    }
  };

  return (
    <>
      <AddFormTopBar sheets={sheets.length} onClick={goToForm} />
      <FormLayout clearable editionMode onSaveClicked={onSaveClicked} />
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert severity="error">
          This reference has already been used for another train.
        </Alert>
      </Snackbar>
    </>
  );
};
AddFormPage.displayName = "AddFormPage";
export default AddFormPage;
