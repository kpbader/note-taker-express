const path = require('path');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')

router.get('/notes', (req, res) => {
    // Creating new unique id 
      const userId = uuidv4()

    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;