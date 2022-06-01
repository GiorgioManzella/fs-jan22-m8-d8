import logo from "./logo.svg";
import "./App.css";
import Roomsbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatBox from "./components/chatbox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactDOM } from "react";

function App() {
  return (
    <BrowserRouter>
      <Roomsbar />
      <Routes>
        <Route path="/room1" element={<ChatBox />} />
        <Route path="/room2" element={<ChatBox />} />
        <Route path="/room3" element={<ChatBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
