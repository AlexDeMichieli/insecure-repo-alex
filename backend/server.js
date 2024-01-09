const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();

const pool = new Pool({
  user: "postgres",
  database: "mydb",
  password: "postgres",
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = `SELECT * FROM "User" WHERE username ='${username}' AND password = '${password}'`;

    const result = await pool.query(query);

    if (result.rows.length > 0) {
      res.json({ success: result });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('server is running on port 5000')
})
