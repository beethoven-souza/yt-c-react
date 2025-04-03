
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionaComponent from './components/FunctionalComponent'
import PropsExample from './components/PropsExample'

function App() {

  return(
    <>

    <h1>Aula React</h1>
    <FunctionaComponent/>
    <ClassComponent/>
    <PropsExample nome="Beethoven" idade="30"/>

    </>
  )
}

export default App
