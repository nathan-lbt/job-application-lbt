//********** Imports **********//
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { TGV_MODELS } from "../../utils/consts";
import { FormProps } from "./Form.types";

//********** Component **********//
const Form = (props: FormProps) => {
  const {
    reference,
    commentary,
    identifier,
    model,
    year,
    editable,
    editionMode,
    onReferenceChange,
    onCommentaryChange,
    onIdentifierChange,
    onModelChange,
    onYearChange,
  } = props;

  return (
    <>
      <Grid item container xs={4} justifyContent="center">
        {!editable && (
          <TextField
            size="small"
            fullWidth
            label="Reference"
            variant="outlined"
            required
            disabled={editable}
            value={reference}
            onChange={(reference) =>
              onReferenceChange?.(reference.target.value)
            }
          />
        )}
      </Grid>
      <Grid item xs={8} />
      <Grid item container xs={4}>
        <FormControl required fullWidth size="small" disabled={!editionMode}>
          <InputLabel>Model</InputLabel>
          <Select
            label="Model"
            value={model}
            onChange={(model) => onModelChange?.(model.target.value)}
          >
            {TGV_MODELS.map((modelElement, index) => (
              <MenuItem key={modelElement} value={index}>
                {modelElement}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item container xs={4} justifyContent="center">
        <TextField
          size="small"
          fullWidth
          label="Identifier"
          variant="outlined"
          value={identifier}
          disabled={!editionMode}
          onChange={(identifier) =>
            onIdentifierChange?.(identifier.target.value)
          }
        />
      </Grid>
      <Grid item container xs={4} justifyContent="center">
        <TextField
          size="small"
          fullWidth
          required
          label="Year of production"
          variant="outlined"
          value={year}
          disabled={!editionMode}
          onChange={(year) => onYearChange?.(year.target.value)}
        />
      </Grid>
      <Grid item container xs={12}>
        <TextField
          fullWidth
          label="Commentary"
          multiline
          value={commentary}
          disabled={!editionMode}
          onChange={(comment) => onCommentaryChange?.(comment.target.value)}
        />
      </Grid>
    </>
  );
};
Form.displayName = "Form";
export default Form;
