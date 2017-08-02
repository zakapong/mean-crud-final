const express = require('express');
const router = express.Router();

//retrieving contact
router.get('/contacts', (req, res, next) => {
    res.send('Retrieving the contact list');
});

// add contact
router.post('/contacts', (req, res, next) => {
    res.send('Posting the contact list');
});

//delete contacts
router.delete('/contacts', (req, res, next) => {
    res.send('Deleting the contact list');
});

module.exports = router;
