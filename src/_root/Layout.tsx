import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
interface RootState {
  auth: {
    status: boolean;
  };
}
export default function DashboardLayout() {
  const isAuth = useSelector((state: RootState) => state.auth.status);
  console.log("is Auth in Root layout", isAuth);
  return (
    <>
      {!isAuth ? (
        <Navigate to="/login" />
      ) : (
        <div className="flex h-screen">
          <Header />

          <Sidebar />
          <div className="flex flex-col flex-1 w-full pt-20 px-4">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}
