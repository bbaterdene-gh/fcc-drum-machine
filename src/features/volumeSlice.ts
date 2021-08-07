import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const volumeSlice = createSlice({
  name: 'volume',
  initialState: {
    value: 0.64
  },
  reducers: {
    changeVolume: (state, action) => {
      state.value = action.payload
    }
  }
})

export const selectVolume = (state: RootState) => state.volume.value
export const { changeVolume } = volumeSlice.actions
export default volumeSlice.reducer