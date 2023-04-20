import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className=" app transition-all ease-in">
      <Home />
      <Canvas className=" z-50"/>
      <Customizer />
    </main>
  )
}

export default App