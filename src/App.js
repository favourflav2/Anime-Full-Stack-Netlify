import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AnimePage from "./pages/AnimePage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./pages/Dashboard";
import MyFavoriteAnime from "./pages/MyFavoriteAnime";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/anime" element={<AnimePage />}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/best" element={<MyFavoriteAnime />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
