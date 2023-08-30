// (시작) module
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.post('/visitor', controller.postVisitor);
router.delete('/visitor', controller.deleteVisitor);
router.get('/visitor/:id', controller.getVisitor);
router.patch('/visitor', controller.updateVisitor);

module.exports = router;
