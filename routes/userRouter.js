const userRouter = require('../controller/user')


const express = require('express')
const router = express.Router()

router.get('/', userRouter.getUser);
router.post('/', userRouter.createUser);

module.exports = router;