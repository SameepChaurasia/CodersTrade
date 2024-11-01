import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

export default function App() {

  return (
    <BrowserRouter>
        <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

