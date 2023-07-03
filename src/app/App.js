import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
    </Routes>
  );
}

export default App;
