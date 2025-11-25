import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/login", { email, password });
            dispatch({ type: "LOGIN", payload: res.data.token });
            navigate("/protected");
        } catch {
            alert("Invalid Credentials");
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Login</h2>
            <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
