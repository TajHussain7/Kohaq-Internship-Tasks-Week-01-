const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "kohaq.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to SQLite database");
});

// Create tables
const initDb = () => {
  const tables = [
    `CREATE TABLE IF NOT EXISTS participants (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL CHECK(length(name) >= 2 AND length(name) <= 100),
      email TEXT NOT NULL CHECK(email LIKE '%_@__%.__%') UNIQUE,
      courseId TEXT NOT NULL,
      phone TEXT,
      message TEXT,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(email, courseId)
    )`,
    `CREATE TABLE IF NOT EXISTS courses (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      instructor TEXT NOT NULL,
      level TEXT NOT NULL,
      description TEXT
    )`,
  ];

  db.serialize(() => {
    tables.forEach((table) => {
      db.run(table, (err) => {
        if (err) {
          console.error("Error creating table:", err);
        }
      });
    });

    // Create indexes
    db.run(`CREATE INDEX IF NOT EXISTS idx_email_course 
            ON participants(email, courseId)`);
  });
};

// Initialize database
initDb();

module.exports = db;
