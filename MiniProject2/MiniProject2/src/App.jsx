import './App.css'
import LeftPanel from './Components/LeftPanel'
import RightPanel from './Components/RightPanel'
import NavBar from './Components/Navbar'

function App() {

  return (
    <>
    <div>
    <NavBar></NavBar>
    </div>
    <div>
    <LeftPanel></LeftPanel>
    </div>
    <div>
    <RightPanel></RightPanel>
    </div>
   
    </>
  )
}

export default App
