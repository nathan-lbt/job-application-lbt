//********** Imports **********//
import { configureStore } from "@reduxjs/toolkit";
import trainSheetsSlice from "./trainSheets.slice";

//********** Store **********//
export const store = configureStore({
  reducer: {
    trainSheets: trainSheetsSlice,
  },
});

//********** Type **********//
export type RootState = ReturnType<typeof store.getState>;
