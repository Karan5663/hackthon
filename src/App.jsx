import { Route,Routes,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/home";
import Signup from "./Pages/signup";
import Navbar from "./components/NavBar/NavBar";
function App(){
    return(
        <div>
         <Navbar/>
            <Routes>
            
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup/>}/>
            </Routes>

     
      <ToastContainer />
    </div>
  
    )

}

export default App;