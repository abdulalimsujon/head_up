// import { useAuth } from "@/providers/AuthProvider";
// import { Navigate, Outlet } from "react-router-dom";


// export default function AdminPrivateRoute() {
//   const { user, token, loading } = useAuth();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!token || !user) {
//     return <Navigate to="/signin" replace />;
//   }

//   if (user.role !== "admin") {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// }
