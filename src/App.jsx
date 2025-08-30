import useCurrency  from './hooks/useCurrency'
import './App.css'

function App() {
  const data = useCurrency("inr")
  return (
    <h1 className='rounded bg-green-400'>Hello World!</h1>
  )
}

export default App
