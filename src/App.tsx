import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Sidebar from "./Components/sidebar/Sidebar";
import MainContent from "./Components/mainContent/MainContent";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
