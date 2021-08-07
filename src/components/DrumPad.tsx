import { useAppSelector } from '../app/hooks'
import { selectBankHeater, selectBankKit, selectBankPiano } from '../features/bank/bankSlice'
import { DrumButton } from './DrumButton'

export const DrumPad = () => {
  const kit = useAppSelector(selectBankKit)
  const bankPiano = useAppSelector(selectBankPiano)
  const bankHeater = useAppSelector(selectBankHeater)

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2">
      {(() => {
        switch(kit) {
          case 'smooth-piano-kit':
            return bankPiano.map((bank) => 
              <DrumButton bank={bank} key={bank.keyCode}>{bank.keyTrigger}</DrumButton>
            )
          case 'heater-kit':
            return bankHeater.map((bank) => 
              <DrumButton bank={bank} key={bank.keyCode}>{bank.keyTrigger}</DrumButton>
            )
        }
      })()}
    </div>
  )
}
