//********** Props **********/
export interface FormHeaderProps {
  /** The date of form registration. */
  date?: string;
  /** True if the form is editable in edit mode. */
  editionMode?: boolean;
  /** The reference of the form. */
  reference?: string;
  /** Callback fired when the edit button is clicked. */
  editModeClicked?: () => void;
}
