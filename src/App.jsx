import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/// Page Component
import HomePage from "./Pages/Homepage";
import DocsPage from "./Pages/Docs";
import MangaPage from "./Pages/MangaPage";
import DetailPage from "./Pages/Detail";

/// Component
import NavbarSimple from "./Components/Navbar";

function App() {
  return (
    <>
      <NavbarSimple />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
