import sqlite3 from 'sqlite3';
import path from 'path';

// Initialize the SQLite database connection
const db = new sqlite3.Database(path.resolve('./public/dua_main.sqlite'), (err) => {
    if (err) {
      console.error('Error opening database:', err);
    } else {
      console.log('Connected to the SQLite database.');
    }
  });

  export default function handler(req, res) {
    // Fetching data from the 'dua' table as an example
    const query = 'SELECT * FROM sub_category';
  
    db.all(query, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: 'Failed to retrieve data' });
      } else {
        res.status(200).json(rows); 
      }
    });
  }