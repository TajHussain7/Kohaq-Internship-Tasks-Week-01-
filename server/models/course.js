const db = require("../db/database");

class Course {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM courses", (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  static get(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM courses WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(row);
      });
    });
  }
}

module.exports = Course;
