import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewBill from "./pages/NewBill";
import BillPreview from "./pages/BillPreview";
import BillHistory from "./pages/BillHistory";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-bill" element={<NewBill />} />
      <Route path="/bill/:id" element={<BillPreview />} />
      <Route path="/history"  element={<BillHistory />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;