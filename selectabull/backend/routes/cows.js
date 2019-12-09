const router = require('express').Router();
let Cow = require('../models/cow.model');


//route to return all cows
router.route('/').get((req, res) => {
    Cow.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' +err));
});


//route for adding new cow
router.route('/add').post((req, res) => {
    const cowName = req.body.CowName;

    const newCow= new Cow({CowName});

    newCow.save()
        .then(() => res.json('Cow added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

module.exports = router;