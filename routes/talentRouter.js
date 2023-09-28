const talentRoutes = require('../controller/talent')


const express = require('express')
const router = express.Router()

router.get('/', talentRoutes.getTalent);
router.post('/', talentRoutes.addTalent);
router.put('/edit/:id', talentRoutes.editTalent);
router.get('/edit/:id', talentRoutes.viewEdit);
router.delete('/delete/:id', talentRoutes.deleteTalent);

module.exports = router;