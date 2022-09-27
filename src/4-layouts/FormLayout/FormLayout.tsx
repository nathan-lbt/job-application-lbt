//********** Imports **********//
import { Grid, styled } from "@mui/material";
import { useState } from "react";
import Form from "../../3-organisms/Form";
import FormButtonsRow from "../../3-organisms/FormButtonsRow";
import FormHeader from "../../3-organisms/FormHeader";
import { TGV_MODEL } from "../../utils/types";
import { FormLayoutProps } from "./FormLayout.types";

//********** Slots **********//
const FormContainer = styled(Grid)({
  borderRadius: 4,
  border: "rgb(180,180,180) solid 1px",
});

//********** Component **********//
const FormLayout = (props: FormLayoutProps) => {
  const {
    reference: referenceProps,
    commentary: commentaryProps,
    identifier: identifierProps,
    model: modelProps,
    year: yearProps,
    date,
    clearable,
    editable,
    editionMode: editionModeProps,
    onEditClicked,
    onDeleteClicked,
    onSaveClicked,
  } = props;

  // States
  const [reference, setReference] = useState(referenceProps ?? "");
  const [model, setModel] = useState<TGV_MODEL>(modelProps ?? "");
  const [year, setYear] = useState(yearProps ?? "");
  const [commentary, setCommentary] = useState(commentaryProps ?? "");
  const [identifier, setIdentifier] = useState(identifierProps ?? "");

  // Form handling variables
  const [editionMode, setEditionMode] = useState(editionModeProps);
  const empty =
    reference === "" &&
    model === "" &&
    year === "" &&
    commentary === "" &&
    identifier === "";
  const complete = model !== "" && reference !== "" && year !== "";

  // Functions
  const clearFields = () => {
    setReference("");
    setCommentary("");
    setIdentifier("");
    setModel("");
    setYear("");
  };

  const editFields = () => {
    onEditClicked?.({ commentary, identifier, model, year });
    setEditionMode(false);
  };

  const editModeClicked = () => {
    if (editionMode) {
      setCommentary(commentaryProps ?? "");
      setIdentifier(identifierProps ?? "");
      setYear(yearProps ?? "");
      setModel(modelProps ?? "");
    }
    setEditionMode(!editionMode);
  };

  const saveFields = () => {
    if (reference != null) {
      onSaveClicked?.({
        date: new Date().toUTCString(),
        reference,
        commentary,
        identifier,
        model,
        year,
      });
      clearFields();
    }
  };

  const deleteFields = () => onDeleteClicked?.();

  return (
    <Grid container paddingTop={2} justifyContent="center">
      <Grid item container padding={1} marginLeft={2} xs={10}>
        <FormContainer
          container
          spacing={2}
          padding={2}
          paddingTop={0}
          paddingLeft={0}
          paddingBottom={0}
        >
          {editable && (
            <FormHeader
              date={date}
              editionMode={editionMode}
              reference={reference}
              editModeClicked={editModeClicked}
            />
          )}
          <Form
            commentary={commentary}
            year={year}
            model={model}
            identifier={identifier}
            reference={reference}
            editable={editable}
            editionMode={editionMode}
            onReferenceChange={(reference) => setReference(reference)}
            onCommentaryChange={(commentary) => setCommentary(commentary)}
            onIdentifierChange={(identifier) => setIdentifier(identifier)}
            onModelChange={(model) => setModel(model as TGV_MODEL)}
            onYearChange={(year) => setYear(year)}
          />
          <FormButtonsRow
            clearable={clearable}
            complete={complete}
            editable={editable}
            editionMode={editionMode}
            empty={empty}
            clearFields={clearFields}
            deleteFields={deleteFields}
            editFields={editFields}
            saveFields={saveFields}
          />
        </FormContainer>
      </Grid>
    </Grid>
  );
};
FormLayout.displayName = "FormLayout";
export default FormLayout;
