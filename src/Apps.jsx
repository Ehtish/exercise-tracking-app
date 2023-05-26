import { useState } from "react";
import NotFound from "./components/NotFound";
import Addactivity from "./components/Addactivity";
import Exercise from "./components/Exercise";
import Logout from "./components/Logout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Signup from "./pages/Signup"; //usman
import Signin from "./pages/Signin"; //usman
import Dashboard from "./components/dashboard";

function Apps() {
  // const [first, setfirst] = useState("");
  // const location = useLocation();
  // setfirst(location.pathname);
  // const rout = location.pathname;
  // console.log(rout);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addactivity" element={<Addactivity />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default Apps;
