import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/protected">Protected</Link>

            {isAuthenticated ? (
                <button onClick={() => { dispatch({ type: "LOGOUT" }); navigate("/login"); }}>
                    Logout
                </button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}

export default Navbar;
