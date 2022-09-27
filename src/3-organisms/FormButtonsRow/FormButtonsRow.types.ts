//********** Props **********//
export interface FormButtonsRowProps {
  /** True if the form is clearable. */
  clearable?: boolean;
  /** True if the form has enough data. */
  complete?: boolean;
  /** True if the form is editable. */
  editable?: boolean;
  /** True if the form is empty. */
  empty?: boolean;
  /** True if the form is in edition mode. */
  editionMode?: boolean;
  /** Callback fired when clear button is clicked. */
  clearFields?: () => void;
  /** Callback fired when delete button is clicked. */
  deleteFields?: () => void;
  /** Callback fired when edit button is clicked. */
  editFields?: () => void;
  /** Callbakc fired when save button is clicked. */
  saveFields?: () => void;
}
