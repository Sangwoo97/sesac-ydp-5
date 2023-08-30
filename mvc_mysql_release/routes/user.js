// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.post('/profile', controller.profile);
router.get('/signin', controller.signin);
router.get('/signup', controller.signup);
router.post('/signup', controller.postUser);
router.post('/signin', controller.loginUser);
router.post('/profile/edit', controller.editUser);
router.post('/profile/delete', controller.deleteUser);

module.exports = router;
