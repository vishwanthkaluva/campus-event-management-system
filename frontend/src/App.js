import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return loggedIn ? (
    <Dashboard setLoggedIn={setLoggedIn} />
  ) : (
    <Login setLoggedIn={setLoggedIn} />
  );
}