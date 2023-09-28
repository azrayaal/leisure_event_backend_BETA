const homeTestRouter = require('../controller/homeTest')

const express = require('express')
const router = express.Router()

router.get('/', homeTestRouter.gethome);

module.exports = router;