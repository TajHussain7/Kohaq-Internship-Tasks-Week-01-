const db = require("../db/database");

class Participant {
  static create(participant) {
    return new Promise((resolve, reject) => {
      const { name, email, courseId, phone, message } = participant;
      const query = `
        INSERT INTO participants (name, email, courseId, phone, message)
        VALUES (?, ?, ?, ?, ?)
      `;

      db.run(query, [name, email, courseId, phone, message], function (err) {
        if (err) {
          if (err.code === "SQLITE_CONSTRAINT") {
            reject(new Error("You have already registered for this course"));
          } else {
            reject(err);
          }
          return;
        }
        resolve({ id: this.lastID, ...participant });
      });
    });
  }

  static getAll(courseId = null) {
    return new Promise((resolve, reject) => {
      let query = "SELECT * FROM participants";
      const params = [];

      if (courseId) {
        query += " WHERE courseId = ?";
        params.push(courseId);
      }

      query += " ORDER BY timestamp DESC";

      db.all(query, params, (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(rows);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM participants WHERE id = ?", [id], function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ deleted: this.changes > 0 });
      });
    });
  }
}

module.exports = Participant;
