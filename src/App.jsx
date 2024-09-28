import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventScreen from './screens/EventScreen'
import UpdateScreen from './screens/UpdateScreen'
import NoPage from './screens/NoPage';

function App() {
  

  return (
    <>

       <BrowserRouter>
        <Routes>

            <Route index element={<EventScreen/>} />
            <Route path="EventScreen" element={<EventScreen />} />
            <Route path="UpdateScreen" element={<UpdateScreen />} />
            <Route path="*" element={<NoPage />} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
