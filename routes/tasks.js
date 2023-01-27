const express = require('express');
const router = express.Router();

const {list, store, detail, update, remove, changeState } = require('../controllers/tasksController')

/* /api/tasks   */

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
        .post('/change-state/:id', changeState)







    /*cuando se repite la ruta. usamos route
    .get('/reset-password', verifyToken)
    .post('/reset-password', changePassword) */


module.exports = router;