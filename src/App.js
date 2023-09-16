import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import NoMatch from "./components/NoMatch";
import DashBoard from "./components/DashBoard";
import QnA from "./components/QnA";
import { LoginContext } from "./Contexts/LoginContext";

function App() {
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <LoginContext.Provider
        value={{ username, setUsername, logged, setLogged }}
      >
        <Routes>
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/"} element={<Register />} />
          <Route element={<PrivateRoute isLoggedIn={logged} />}></Route>
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/QnA" element={<QnA />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
