//********** Imports **********//
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditFormBottomBar from "../../3-organisms/EditFormBottomBar";
import EditFormTopBar from "../../3-organisms/EditFormTopBar";
import FormLayout from "../../4-layouts/FormLayout";
import { RootState, store } from "../../redux/store";
import {
  removeAll,
  removeOne,
  sheetModified,
  trainSheetsSelector,
} from "../../redux/trainSheets.slice";
import { TGVSheet } from "../../utils/types";

//********** Component **********//
const EditFormPage = () => {
  // Hooks
  const navigate = useNavigate();

  // Selectors
  const sheets = useSelector((state: RootState) =>
    trainSheetsSelector.selectAll(state)
  );
  const numberSheets = useSelector((state: RootState) =>
    trainSheetsSelector.selectTotal(state)
  );

  const goToForm = () => navigate("/");
  const removeAllForms = () => store.dispatch(removeAll());
  const removeOneForm = (sheet: TGVSheet) => store.dispatch(removeOne(sheet));
  const editForm = (options: Partial<TGVSheet>, sheet: TGVSheet) =>
    store.dispatch(sheetModified({ ...sheet, ...options }));

  return (
    <>
      <EditFormTopBar sheets={numberSheets} onClick={goToForm} />
      {sheets.map((sheet) => (
        <FormLayout
          key={sheet.reference}
          date={sheet.date}
          reference={sheet.reference}
          commentary={sheet.commentary}
          identifier={sheet.identifier}
          model={sheet.model}
          year={sheet.year}
          clearable={false}
          editable
          editionMode={false}
          onEditClicked={(options) => editForm(options, sheet)}
          onDeleteClicked={() => removeOneForm(sheet)}
        />
      ))}
      {numberSheets > 1 && <EditFormBottomBar onClick={removeAllForms} />}
    </>
  );
};
EditFormPage.displayName = "EditFormPage";
export default EditFormPage;
