// (시작) module
// 경로 선언과 관련된 내용 기술
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('index');
// });

// router.get('/comments', (req, res) => {
//     res.render('comments', { comments });
// });

// router.get('/comments/:id', (req, res) => {
//     const cmtId = parseInt(req.params.id);
//     if (comments[cmtId - 1]) {
//         res.render('comment', { comment: comments[cmtId - 1] });
//     } else {
//         res.render('404');
//     }
// });

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comments/:id', controller.comment);

// (끝) module.exports 구문을 통해 라우터를 내보내야
// 다른 모듈(파일)에서 router객체를 사용 가능
module.exports = router;
