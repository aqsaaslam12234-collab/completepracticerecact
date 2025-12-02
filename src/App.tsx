import TestingComponent from './components/TestingComponent'
import './App.css'
import ByeComponent from './components/ByeComponent'
import Reactlogo from './assets/react.svg'
import NormalFunction from './components/NormalFunction'

function App() {
  return (
    <>
      <div>
        <TestingComponent />
        <ByeComponent />
        <img src={Reactlogo} alt="Description" />
        <NormalFunction />
      </div>
    </>
  )
}

export default App
