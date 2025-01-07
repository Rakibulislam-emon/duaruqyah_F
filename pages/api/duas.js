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
    const { subCategoryId } = req.query;

    // Check if subCategoryId is provided
    if (subCategoryId) {
        const query = 'SELECT * FROM dua WHERE subcat_id = ?';
        const params = [subCategoryId];

        db.all(query, params, (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve data' });
            } else {
                res.status(200).json(rows);
            }
        });
    } else {
        // If no subCategoryId is provided, return all duas
        const query = 'SELECT * FROM dua';

        db.all(query, [], (err, rows) => {
            if (err) {
                res.status(500).json({ error: 'Failed to retrieve data' });
            } else {
                res.status(200).json(rows);
            }
        });
    }
}