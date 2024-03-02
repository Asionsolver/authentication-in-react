import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut().then(()=>{
        navigate("/login");
        console.log("Logged out")
    }).catch((error)=>{
      console.error(error);
    });
    navigate("/login");
  };

  if (loading) {
    return <div>User Info Loading...</div>;
  }
  
    if (error) {
        return <div>Error: {error}</div>;
    }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {user.email}</p>
      <button
        onClick={handleLogout}
        className="bg-black text-white rounded p-2 "
      >
        Log Out
      </button>
    </div>
  );
}
