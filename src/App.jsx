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
import Layout from "./pages/Layout";
import CheckOutThree from "./pages/CheckOutThree";
import { CountProvider } from "./pages/CountContext";
// import CounterComponent from "./CounterComponent";



function App() {
  return (
    <div>
      <CountProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/cart" element={<CartOne />} />
              <Route path="/checkoutone" element={<CheckOutOne />} />
              <Route path="/checkouttwo" element={<CheckOutTwo />} />
              <Route path="/CheckOutThree" element={<CheckOutThree />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Router>
      </CountProvider>
    </div>
  );
}

export default App;
