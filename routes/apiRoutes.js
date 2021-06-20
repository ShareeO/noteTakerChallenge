const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', 'db', 'db.json')

const Notes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, 'utf8', (err, data) => {
            if (err) {
                reject(jsonData);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function addNote(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true);
            }
        });
    })
}

router.get('/api/notes', (req, res) => {
    Notes()
        .then(notes => res.json(notes))
        .catch((err) => res.status(500).json({
            error: err
        }));
});

router.post('/api/notes', (req, res) => {
    req.body['id'] = nanoid();
    Notes()
        .then(notes => [...notes, req.body])
        .then(addedNote => addNote(addedNote))
        .then(isSuccess => res.json({ success: isSuccess }))
        .catch((err) => res.status(500).json({
            error: err
        }));
})

router.delete('/api/notes/:id', function (req, res) {
    let id = req.params.id;
    Notes()
        .then(notes => notes.filter((note) => note.id !== id))
        .then(filteredNotes => addNote(filteredNotes))
        .then(isSuccess => res.json({ success: isSuccess }))
        .catch((err) => res.status(500).json({
            error: err
        }));
})

module.exports = router