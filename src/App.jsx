import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Partner from "./pages/Partner";
import Contattaci from "./pages/Contattaci";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Header /> <Home /> <Footer />
              </>
            }
          />
          {/* Ricerca */}
          <Route
            path="/search"
            element={
              <>
                <Header /> <Search /> <Footer />
              </>
            }
          />
          {/* Partner */}
          <Route
            path="/partner"
            element={
              <>
                <Header /> <Partner /> <Footer />
              </>
            }
          />
          {/* Contattaci */}
          <Route
            path="/contattaci"
            element={
              <>
                <Header /> <Contattaci /> <Footer />
              </>
            }
          />
          {/* Login */}
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <>
                <Header /> <NotFound /> <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
