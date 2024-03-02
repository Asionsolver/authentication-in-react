import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const user = await registerWithEmailAndPassword(email, password);
      console.log(user)
      navigate("/login");
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Register</h1>
      <form className="flex flex-col">
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

        <button
        type="submit"
        onClick={handleSubmit}
        className="bg-black text-white px-5 py-2 my-3 w-auto rounded-md  m-auto "
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-500 underline">
          Sign In
        </NavLink>
      </p>

      {/* Reset Password section */}
      <p>
        Forgot your password?{" "}
        <NavLink to="/reset" className="text-blue-500 underline">
          Reset
        </NavLink>
      </p>
    </div>
  );
}
