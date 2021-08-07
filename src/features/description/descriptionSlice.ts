import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
    value: ''
  },
  reducers: {
    changeDescription: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const selectDescription = (state: RootState) => state.description.value
export const { changeDescription } = descriptionSlice.actions
export default descriptionSlice.reducer