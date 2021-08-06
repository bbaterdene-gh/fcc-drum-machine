import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const powerSlice = createSlice({
  name: 'power',
  initialState: {
    value: true
  },
  reducers: {
    toggle: state => {
      state.value = !state.value
    }
  }
})

export const selectPower = (state: RootState) => state.power.value
export const { toggle } = powerSlice.actions
export default powerSlice.reducer