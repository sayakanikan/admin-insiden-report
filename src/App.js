import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound";
import Laporan from "./components/Laporan/Laporan";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import axios from "axios";
import { useEffect } from "react";
import DetailUser from "./components/User/DetailUser";
import DetailLaporan from "./components/Laporan/DetailLaporan";
import UpdateLaporan from "./components/Laporan/UpdateLaporan";
import AddAdmin from "./components/Admin/AddAdmin";
import DetailAdmin from "./components/Admin/DetailAdmin";
import UpdateAdmin from "./components/Admin/UpdateAdmin";

function App() {
  // const checkLoginStatus = () => {
  //   axios
  //     .get("https://api-coba1.herokuapp.com/api/user", { withCredentials: true })
  //     .then((resp) => {
  //       console.log(resp);
  //     })
  //     .catch((error) => {
  //       console.log("Login error", error);
  //     });
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     checkLoginStatus();
  //   });
  //   return () => clearTimeout(timer);
  // }, []);

  // const requireAuth = (nextState, replace, next) => {
  //   if (!authenticated) {
  //     replace({
  //       pathname: "/",
  //       state: { nextPathname: nextState.location.pathname },
  //     });
  //   }
  //   next();
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/updateLaporan/:id" element={<UpdateLaporan />} />
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
