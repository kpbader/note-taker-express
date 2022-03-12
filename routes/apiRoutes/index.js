const router = require('express').Router();
const data = require('../../db');

router.get('/notes', (req, res) => {
    data.readNotes().then((notes) => {
        return res.json(notes)
    })
});

router.post('/notes', (req, res) => {
    data.writeNotes(req.body).then((notes) => {
        return res.json(notes)
    })
});

module.exports = router;