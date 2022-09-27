//********** Imports **********//
import { TGVForm, TGVSheet } from "../../utils/types";

//********** Props **********//
export interface FormLayoutProps extends TGVForm {
  /** If true, the form is editable. */
  editable?: boolean;
  /** If true, the form is clearable. */
  clearable?: boolean;
  /** If true, the fields are in edition mode. */
  editionMode?: boolean;
  /** Callback fired when the button save is clicked. */
  onSaveClicked?: (sheet: TGVSheet) => void;
  /** Callback fired when the button edit is clicked. */
  onEditClicked?: (options: Partial<TGVSheet>) => void;
  /** Callback fired when the button delete is clicked. */
  onDeleteClicked?: () => void;
}
