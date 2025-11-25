import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Protected() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const token = useSelector((state) => state.token);

    return (
        <div>
            <h2>Protected Page</h2>

            {isAuthenticated ? (
                <>
                    <p>Welcome! Your token:</p>
                    <code>{token}</code>
                    <br /><br />
                    <button onClick={() => dispatch({ type: "LOGOUT" })}>
                        Logout
                    </button>
                </>
            ) : (
                <p>You must login to view this page.</p>
            )}
        </div>
    );
}

export default Protected;
