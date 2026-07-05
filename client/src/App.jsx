import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewBill from "./pages/NewBill";
import BillPreview from "./pages/BillPreview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-bill" element={<NewBill />} />
      <Route path="/bill/:id" element={<BillPreview />} />
    </Routes>
  );
}

export default App;