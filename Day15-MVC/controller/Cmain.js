const Comment = require('../model/comment');

exports.main = (req, res) => {
    res.render('index');
};
exports.comments = (req, res) => {
    res.render('comments', { comments: Comment.getCommentAll() });
};
exports.comment = (req, res) => {
    const cmtId = parseInt(req.params.id);
    const comments = Comment.getCommentAll();
    if (comments[cmtId - 1]) {
        res.render('comment', { comment: comments[cmtId - 1] });
    } else {
        res.render('404');
    }
};
