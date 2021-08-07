export interface BankState {
  kit: 'smooth-piano-kit' | 'heater-kit',
  banks: {
    bankPiano: BankPayload[],
    bankHeater: BankPayload[]
  }
}

export interface BankPayload {
  keyCode: number,
  keyTrigger: string,
  id: string,
  url: string,
}