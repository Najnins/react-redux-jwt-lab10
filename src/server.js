const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "mysecretjwtkey";

// Dummy user for demo
const userDB = {
    email: "test@example.com",
    passwordHash: bcrypt.hashSync("123456", 10),
};

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email !== userDB.email || !bcrypt.compareSync(password, userDB.passwordHash)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
});

app.get("/protected", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(403).json({ message: "No token provided" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: "Protected Data Access Granted", user: decoded });
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token" });
    }
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
