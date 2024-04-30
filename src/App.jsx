import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Partner from "./pages/Partner";

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
          {/* Login */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
