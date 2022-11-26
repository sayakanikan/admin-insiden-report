import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound";
import Laporan from "./components/Laporan/Laporan";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import DetailUser from "./components/User/DetailUser";
import DetailLaporan from "./components/Laporan/DetailLaporan";
import AddAdmin from "./components/Admin/AddAdmin";
import DetailAdmin from "./components/Admin/DetailAdmin";
import UpdateAdmin from "./components/Admin/UpdateAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/detailLaporan/:id" element={<DetailLaporan />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<DetailUser />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
        <Route path="/detailAdmin/:id" element={<DetailAdmin />} />
        <Route path="/updateAdmin/:id" element={<UpdateAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
