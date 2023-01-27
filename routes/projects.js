const express = require('express');
const router = express.Router();

const {list, store, detail, update, remove, addCollaborator, removeCollaborator } = require('../controllers/projectsController')

/* /api/projects   */

router
    .route('/')
        .get(list)
        .post(store)
router
    .route('/:id')
        .get(detail)
        .put(update)
        .delete(remove)

router    
        .get('/collaborator/add', addCollaborator)
        .delete('/collaborator/remove', removeCollaborator)






    /*cuando se repite la ruta. usamos route
    .get('/reset-password', verifyToken)
    .post('/reset-password', changePassword) */


module.exports = router;