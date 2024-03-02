import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";


export default function PrivateRoutes() {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div>User Info Loading...</div>;
    }
    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <div>
        {user ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}
