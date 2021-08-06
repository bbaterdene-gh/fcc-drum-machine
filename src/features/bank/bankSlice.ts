import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const bankSlice = createSlice({
  name: 'bank',
  initialState: {
    value: true
  },
  reducers: {
    toggleBank: state => {
      state.value = !state.value
    }
  }
})

export const selectBank = (state: RootState) => state.bank.value
export const { toggleBank } = bankSlice.actions
export default bankSlice.reducer