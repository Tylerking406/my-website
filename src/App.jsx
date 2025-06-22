import './App.css'
import Student from './Student.jsx'
function App() {

  return (
    <div className="App">
      <Student name="Arinao" age={22} grade="Graduate"/>
      <Student name="Thimna" age={21} grade="Undergraduate"/> 
    </div>
  )
}

export default App
