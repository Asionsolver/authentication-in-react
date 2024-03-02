import { useState } from "react";
import { NavLink } from "react-router-dom";
import { resetPassword} from "../firebase";

export default function Reset() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Password</h1>
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
        <button
          onClick={()=> resetPassword(email)}
          className="bg-black text-white px-5 py-2 my-3 w-auto rounded-md  m-auto "
        >
          Reset
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <NavLink to="/login" className="text-blue-500 underline">
          Sign In
        </NavLink>
      </p>
    </div>
  );
}
