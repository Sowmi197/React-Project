import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flower from "./pages/Flower";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import About from "./pages/About";
import { UserProvider } from "./context/UserContext";
import { FlowerProvider } from "./context/FlowerContext";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/userPanel/Dashboard";
import { SalesProvider } from "./context/SalesContext";
import SignUp from "./pages/SignUp";
import Shop from "./pages/Shop";
import UserInformation from "./pages/userPanel/UserInformation";
import UserOrders from "./pages/userPanel/UserOrders";

function App() {
    return (
        <UserProvider>
            <FlowerProvider>
                <SalesProvider>
                    <CartProvider>
                        <Router>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route
                                    path="/flower/:id"
                                    element={<Flower />}
                                />
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/Sign-up" element={<SignUp />} />
                                <Route path="/shop" element={<Shop />} />
                                <Route
                                    path="/checkout"
                                    element={<Checkout />}
                                />

                                <Route
                                    path="/user-panel"
                                    element={<PrivateRoute />}
                                >
                                    <Route
                                        path="/user-panel"
                                        element={<Dashboard />}
                                    />
                                    <Route
                                        path="/user-panel/information"
                                        element={<UserInformation />}
                                    />
                                    <Route
                                        path="/user-panel/orders"
                                        element={<UserOrders />}
                                    />
                                </Route>
                            </Routes>
                        </Router>
                    </CartProvider>
                </SalesProvider>
            </FlowerProvider>
        </UserProvider>
    );
}

export default App;
