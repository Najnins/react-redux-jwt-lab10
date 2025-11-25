import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProtectedPage() {
    const token = useSelector(state => state.token);
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/protected", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => setMessage(res.data.message))
            .catch(() => setMessage("Unauthorized"));
    }, [token]);

    return <h2>{message}</h2>;
}

export default ProtectedPage;
