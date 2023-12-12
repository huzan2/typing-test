import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
