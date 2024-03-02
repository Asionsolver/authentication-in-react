import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, signInWithGoogle } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginWithEmailAndPassword(email, password);
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSocialLogin = async () => {
    const user = await signInWithGoogle();
    console.log(user);
    navigate("/home");
    }

    
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl m-3">Login</h1>
      <form className="flex flex-col justify-center items-center">
        <div className="my-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mx-2 my-2 p-1 border border-gary-100 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mx-2 my-2 p-1 border border-gary-100 rounded-md w-60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleLogin}
            className="bg-black text-white px-5 py-2 my-3 w-auto rounded-md  m-auto "
          >
            Log In
          </button>

          {/* Login with google button */}
          <button
           onClick={handleSocialLogin}
           className="bg-red-500 text-white px-5 py-2 my-3 w-auto rounded-md  m-auto ">
            Login with Google
          </button>
        </div>
      </form>

      <p>
        Do not have an account?{" "}
        <NavLink to="/register" className="text-blue-500 underline">
          Register
        </NavLink>
      </p>
    </div>
  );
}
