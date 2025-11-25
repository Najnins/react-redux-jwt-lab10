import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./Login";
import ProtectedPage from "./ProtectedPage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./Navbar";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h2>Home Page</h2>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/protected" element={<PrivateRoute><ProtectedPage /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
