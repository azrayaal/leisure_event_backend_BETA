const userRouter = require('../controller/category')


const express = require('express')
const router = express.Router()

router.get('/', userRouter.getCategory);
router.post('/', userRouter.addCategory);
router.get('/edit/:id', userRouter.viewEdit);
router.put('/edit/:id', userRouter.editCategory);
router.delete('/delete/:id', userRouter.deleteCategory);

module.exports = router;
