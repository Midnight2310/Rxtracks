
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Profile from "./pages/Profile";
import CreateProfile from "./pages/CreateProfile";
import UpdateProfil from "./pages/UpdateProfil";



function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/create" element={<CreateProfile />} />
          <Route path="/update/:id" element={<UpdateProfil />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
