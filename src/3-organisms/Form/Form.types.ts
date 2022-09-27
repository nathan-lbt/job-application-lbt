//********** Imports **********//
import { TGVForm } from "../../utils/types";

//********** Props **********//
/** Interface describing form props. */
export interface FormProps extends TGVForm {
  /** True if the form is displayed for edition. */
  editable?: boolean;
  /** If true, fields can be edited. */
  editionMode?: boolean;
  /** Callback fired when the reference of the sheet changes. */
  onReferenceChange?: (reference: string) => void;
  /** Callback fired when the identifier of the train changes. */
  onIdentifierChange?: (identifier: string) => void;
  /** Callback fired when the model of the train changes. */
  onModelChange?: (model: string) => void;
  /** Callback fired whent the production year of the train changes. */
  onYearChange?: (year: string) => void;
  /** Callback fired when the commentary of the sheet changes. */
  onCommentaryChange?: (commentary: string) => void;
}
