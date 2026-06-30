const express = require("express");
const mysql = require("mysql2/promise");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

let db;

async function initDatabase() {
    try {
        db = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Sai@2006"
        });

        console.log("✅ Connected to MySQL");

        await db.query("CREATE DATABASE IF NOT EXISTS appon");
        await db.query("USE appon");

        await db.query(`
            CREATE TABLE IF NOT EXISTS alia (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                address VARCHAR(100) NOT NULL
            )
        `);

        console.log("✅ Database Ready");
    } catch (err) {
        console.error("Database Error:", err);
    }
}

initDatabase();

app.get("/students", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM alia ORDER BY id");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/students/:id", async (req, res) => {
    try {
        const [rows] = await db.query(
            "SELECT * FROM alia WHERE id = ?",
            [req.params.id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post("/students", async (req, res) => {
    try {
        const { name, address } = req.body;

        if (!name || !address) {
            return res.status(400).json({
                message: "Name and Address are required."
            });
        }

        const [result] = await db.query(
            "INSERT INTO alia(name,address) VALUES (?, ?)",
            [name, address]
        );

        res.json({
            message: "Student Added Successfully",
            id: result.insertId
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put("/students/:id", async (req, res) => {
    try {
        const { name, address } = req.body;

        await db.query(
            "UPDATE alia SET name=?, address=? WHERE id=?",
            [name, address, req.params.id]
        );

        res.json({
            message: "Student Updated Successfully"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        await db.query(
            "DELETE FROM alia WHERE id=?",
            [req.params.id]
        );

        res.json({
            message: "Student Deleted Successfully"
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log("==================================");
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log("==================================");
});