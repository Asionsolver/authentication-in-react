import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <Router>
     <div>
      <Routes>
      <Route element={<PrivateRoutes/>}>
        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} exact/>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;
