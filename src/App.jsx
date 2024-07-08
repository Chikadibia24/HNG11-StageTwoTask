import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage";
import CartOne from "./pages/cartOne";
import CheckOutOne from "./pages/checkOutOne"
import CheckOutTwo from "./pages/checkOutTwo";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<CartOne />} />
          <Route path="/checkoutone" element={<CheckOutOne />} />
          <Route path="/checkouttwo" element={<CheckOutTwo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
