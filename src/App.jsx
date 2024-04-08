import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

/// Page Component
import HomePage from "./Pages/Homepage";
import DocsPage from "./Pages/Docs";
import MangaPage from "./Pages/MangaPage";
import DetailPage from "./Pages/Detail";

/// Component
import NavbarSimple from "./Components/Navbar";

export const malIdContext = createContext();

function App() {

  const [malId, setMalId] = useState('ini id');

  return (
    <>
    <malIdContext.Provider value={{malId, setMalId}}>
      <NavbarSimple />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path={`/detail`} element={<DetailPage />} />
          <Route path='/docs' element={<DocsPage />} />
        </Routes>
      </Router>
    </malIdContext.Provider>
    </>
  );
}

export default App;
