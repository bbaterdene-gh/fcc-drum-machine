import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
    value: 'Start'
  },
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const selectDescription = (state: RootState) => state.description.value
export const { change } = descriptionSlice.actions
export default descriptionSlice.reducer