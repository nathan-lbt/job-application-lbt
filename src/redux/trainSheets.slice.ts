//********** Imports **********//
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TGVSheet } from "../utils/types";
import { RootState } from "./store";

//********** Adapter **********//
const trainSheetsAdapter = createEntityAdapter<TGVSheet>({
  selectId: (sheet) => sheet.reference,
});

//********** Slice **********//
const trainsSheetsSlice = createSlice({
  name: "trainSheets",
  initialState: trainSheetsAdapter.getInitialState(),
  reducers: {
    sheetAdded: (state, action: { payload: TGVSheet; type: string }) =>
      trainSheetsAdapter.addOne(state, action.payload),
    sheetModified: (state, action: { payload: TGVSheet; type: string }) => {
      const { reference } = action.payload;
      trainSheetsAdapter.updateOne(state, {
        changes: { ...action.payload },
        id: reference,
      });
    },
    removeOne: (state, action: { payload: TGVSheet; type: string }) => {
      const { reference } = action.payload;
      trainSheetsAdapter.removeOne(state, reference);
    },
    removeAll: (state) => trainSheetsAdapter.removeAll(state),
  },
});

//********** Exports **********//
export const { sheetAdded, sheetModified, removeAll, removeOne } =
  trainsSheetsSlice.actions;

export const trainSheetsSelector = trainSheetsAdapter.getSelectors<RootState>(
  (state) => state.trainSheets
);

export default trainsSheetsSlice.reducer;
