const express = require('express');
const router = require.Router();
const uploadFile = require('../middlewares/uploadFile');
const { isLogged } = require('../middlewarers/login');

const controller = require('../controller/adminController');

router.use(isLogged);

router.get('/', controller.adminView);
router.get('/create', controller.ceateView);
router.post('/create', uploadFile.array('image', 2), controller.createItem);
router.post('/create/bulk', controller.bulkCreate);
router.get('/edit/:id', controller.editView);
router.put('/edit/:id', controller.editItem);
router.delete('/delete/:id', controller.deleteItem);

module.export = router;