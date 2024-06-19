import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const dbPath = path.join(__dirname, 'db.json');

// Endpoint to check if the server is running
app.get('/ping', (req: Request, res: Response) => {
    res.json({ success: true });
});

// Endpoint to submit a new form
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;

    if (!name || !email || !phone || !github_link || !stopwatch_time) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    let submissions = [];
    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf-8');
        submissions = JSON.parse(data);
    }

    const newSubmission = { name, email, phone, github_link, stopwatch_time };
    submissions.push(newSubmission);

    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));

    res.json({ success: true });
});

// Endpoint to read a form submission by index
app.get('/read', (req: Request, res: Response) => {
    const { index } = req.query;

    if (index === undefined) {
        return res.status(400).json({ error: 'Index is required' });
    }

    const idx = parseInt(index as string, 10);
    if (isNaN(idx)) {
        return res.status(400).json({ error: 'Index must be a number' });
    }

    if (fs.existsSync(dbPath)) {
        const data = fs.readFileSync(dbPath, 'utf-8');
        const submissions = JSON.parse(data);

        if (idx < 0 || idx >= submissions.length) {
            return res.status(404).json({ error: 'Submission not found' });
        }

        return res.json(submissions[idx]);
    }

    return res.status(404).json({ error: 'No submissions found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
