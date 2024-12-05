import LandingPage from "./LandingPage";
import SearchingPage from "./SearchingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchingPage />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;