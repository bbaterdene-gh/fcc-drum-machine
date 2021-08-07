import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { bankTwo, bankOne } from "./bankInfo";
import { BankState } from "./bankType";

const initialState: BankState = {
  banks: {
    bankPiano: bankTwo,
    bankHeater: bankOne,
  },
  kit: 'smooth-piano-kit',
}

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    toggleBank: state => {
      switch(state.kit) {
        case 'smooth-piano-kit':
          state.kit = 'heater-kit'
          break
        case 'heater-kit':
          state.kit = 'smooth-piano-kit'
          break
      }
    },
  },
})

export const selectBankKit = (state: RootState) => state.bank.kit
export const selectBankPiano = (state: RootState) => state.bank.banks.bankPiano
export const selectBankHeater = (state: RootState) => state.bank.banks.bankHeater
export const { toggleBank } = bankSlice.actions
export default bankSlice.reducer