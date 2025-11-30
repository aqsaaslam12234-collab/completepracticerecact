import TestingComponent from './components/TestingComponent'
import './App.css'
import ByeComponent from './components/ByeComponent'
import Reactlogo from './assets/react.svg'

function App() {
  return (
    <>
      <div>
        <TestingComponent />
        <ByeComponent />
        <img src={Reactlogo} alt="Description" />
      </div>
    </>
  )
}

export default App
