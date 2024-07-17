// import { CalendarDateRangePicker } from "@/components/date-range-picker";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout";
import Login from "./_auth/pages/Login";
import Signup from "./_auth/pages/Signup";
import DashboardLayout from "./_root/Layout";
import Dashboard from "./_root/pages/Dashboard";
import Patients from "./_root/pages/Patients";
import Pdfs from "./_root/pages/Pdfs";
import { useCurrentDoctor } from "./lib/react-query/quries-mutations";
import { login, logout } from "./store/authSlice";

export default function App() {
  const { data: currentUser, isLoading, isError } = useCurrentDoctor();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      dispatch(login(currentUser?.data.doctor));
    }
    if (isError) {
      console.log("Error", isError);
      dispatch(logout());
    }
  }, [currentUser, isError]);

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/pdfs" element={<Pdfs />} />
        </Route>
      </Routes>
    </>
  );
}
