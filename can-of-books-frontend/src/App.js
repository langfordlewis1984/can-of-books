import "./Reset.css";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Header />
          <LoginButton />
          <LogoutButton />
          <Profile />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
