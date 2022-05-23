import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <div>
        {!isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Profile />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
