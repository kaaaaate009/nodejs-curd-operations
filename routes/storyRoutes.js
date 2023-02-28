const express = require('express');
const controller = require('../controllers/storyController')

const router = express.Router();

//GET /stories 

router.get('/', controller.index);

//POST /stories

router.post('/', controller.create);

//GET /stories/new 

router.get('/new', controller.new);

//GET /stories/:id

router.get('/:id', controller.show);

//GET /stories/:id/edit

router.get('/:id/edit', controller.edit);

//PUT /stories/:id

router.put('/:id', controller.update);

//DELETE /stories/:id

router.delete('/:id', controller.delete);

module.exports = router;