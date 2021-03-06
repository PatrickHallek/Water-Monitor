var express = require('express');
var router = express.Router();
var IndexController = require("../controller/index");

router.get('/:id', IndexController.getSensorData);
router.post('/', IndexController.postSensor);
router.post('/update', IndexController.postUpdateSensor);
router.post('/delete', IndexController.postDeleteSensor);
module.exports = router;
