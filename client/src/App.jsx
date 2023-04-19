import { useState } from 'react'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className='app transition-all ease-in'>
     <div>
      <Home />
      <Canvas />
      <Customizer />
     </div>
   </main>
  )
}

export default App
