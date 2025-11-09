import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Manual from "./pages/Manual";
import Tutoriais from "./pages/Tutoriais";
import Docs from "./pages/Docs";

function App() {
  return (
    <div
      data-theme="lilac-dream"
      className="flex flex-col min-h-screen w-full bg-base-200 text-base-content overflow-x-hidden"
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/tutoriais" element={<Tutoriais />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </div>
  );
}

export default App;
