import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import HomePage from "./Pages/Home";
import LCPDashboard from "./Pages/LCPDashboard";
import LCVPDashboard from "./Pages/LCVPDashboard";
import TLDashboard from "./Pages/TLDashboard";
import MemberDashboard from "./Pages/MemberDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard/lcp" element={<LCPDashboard />} />
        <Route path="/dashboard/lcvp" element={<LCVPDashboard />} />
        <Route path="/dashboard/tl" element={<TLDashboard />} />
        <Route path="/dashboard/member" element={<MemberDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
