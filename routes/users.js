var express = require('express');
var router = express.Router();

const {profile} = require ('../controllers/usersControllers');
const checkToken = require('../middlewares/checkToken');

/* /api/users */
router.get('/profile', checkToken, profile);

module.exports = router;
