import { Route,Routes,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/home";
import Signup from "./Pages/signup";
import Login from "./Pages/login"
import Navbar from "./components/NavBar/NavBar";
import AllMovie from "./Pages/AllMovie";
import MyReviews from './Pages/MyReviews';
import EditReview from "./Pages/EditReview";
import EditProfile from "./Pages/EditProfile";
import ChangePassword from "./Pages/ChangePassword";
import DeleteReview from "./Pages/DeleteReview";
import ShareReview from "./Pages/ShareReview";
import AllReview from "./Pages/AllReview";

function App(){
    return(
        <div>
         <Navbar/>
            <Routes>
            
                <Route path="/" element={<Navigate to="/Home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/allMovie" element={<AllMovie/>}/>
                <Route path="/myreviews" element={<MyReviews />} />
                <Route path="/edit" element={<EditReview />} />
                <Route path="/edit/:id" element={<EditReview />} />
                <Route path="/editProfile" element={<EditProfile/>}/>
                <Route path="/changePassword" element={<ChangePassword/>}/>
                <Route path="/deleteReview" element={<DeleteReview/>}/>
                <Route path="/shareReview" element={<ShareReview/>}/>
                <Route path="/allReview" element={<AllReview/>}/>
            </Routes>

     
      <ToastContainer />
    </div>
  
    )

}

export default App;