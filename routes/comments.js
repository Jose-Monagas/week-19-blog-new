const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments');

//  CREATE comment
router.post('/', commentController.create);
// INDEX comment
router.get('/index', commentController.index);
// SHOW comment
router.get('/:id', commentController.show);
// UPDATE comment
router.put('/:id', commentController.update);
// DELETE comment
router.delete('/:id', commentController.delete);

module.exports = router;
