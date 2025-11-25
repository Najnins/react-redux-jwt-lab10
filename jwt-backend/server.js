const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "mysecretjwtkey";

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

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
