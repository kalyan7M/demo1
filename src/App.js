import {BrowserRouter, Routes,Route} from "react-router-dom"

import Home from "./Home"
import Skills from "./Skills"
import Nav from "./Nav"
import Education from "./Education"
import Projects from "./Projects"

let App=()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/edu" element={<Education/>}/>
      <Route path="/project" element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App