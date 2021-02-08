const { Router } = require('express');
const router = Router();

const exercises = require('../data.json');
console.log(exercises);

router.get('/', (req, res) => {
    res.json(exercises);
})

module.exports = router; 