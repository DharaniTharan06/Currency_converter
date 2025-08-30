import React,{useId} from 'react'

function Inputbox({label,
  amount,onAmountChange,
  onCurrencyChange,currencyOptions=[],
  selectCurreny="",amountDisable = false,
  currencyDisable = false,
  className="",}) {

  const amoundId = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2 text-black'>
        <label className='text-black/40 mb-2 inline-block' htmlFor={amoundId}>{label}</label>
        <input type='number' placeholder='Amount' id={amoundId}
        className='outline-none w-full bg-transparent py-1.5' 
        disabled={amountDisable} value={amount}
        onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}></input>
      </div>  
      <div className='w-1/2 flex flex-wrap justify-end text-right text-black'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectCurreny} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
          {currencyOptions.map((Currency)=>(<option key={Currency} value={Currency}>{Currency}</option>))}
        </select>
      </div>
    </div>
  )
}

export default Inputbox

