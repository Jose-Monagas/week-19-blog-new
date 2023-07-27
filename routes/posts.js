const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

//  CREATE POST
router.post('/', postController.create);
// INDEX POST
router.get('/index', postController.index);
// SHOW POST
router.get('/:id', postController.show);
// UPDATE POST
router.put('/:id', postController.update);
// DELETE POST
router.delete('/:id', postController.delete);

module.exports = router;
