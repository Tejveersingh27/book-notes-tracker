import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book_notes",
  password: "Rocky@891",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM books ORDER BY date_read DESC NULLS LAST, created_at DESC;");
    res.render("index.ejs", { books: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).send("Database error");
  }
});

app.post("/add", async (req, res) => {
  try {
    const { title, author, isbn, rating, notes, date_read } = req.body;

    await db.query(
      "INSERT INTO books (title, author, isbn, rating, notes, date_read) VALUES ($1,$2,$3,$4,$5,$6);",
      [title, author || null, isbn || null, rating ? Number(rating) : null, notes || null, date_read || null]
    );

    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Insert error");
  }
});

app.post("/delete", async (req, res) => {
  try {
    const id = Number(req.body.id);
    await db.query("DELETE FROM books WHERE id = $1;", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).send("Delete error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
