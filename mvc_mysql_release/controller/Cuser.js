// TODO: 컨트롤러 코드
// const User = require('../model/User');
const { User } = require('../models');

exports.main = (req, res) => {
    res.render('index');
};

exports.profile = (req, res) => {
    const { userid } = req.body;
    User.getUser(userid, (result) => {
        console.log(result);
        res.render('profile', { data: result[0] });
    });
};

exports.editUser = (req, res) => {
    User.patchUser(req.body, (result) => {
        if (result) {
            res.send({ edit: true });
        }
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.body;
    User.deleteUser(id, (result) => {
        if (result) {
            res.send({ delete: true });
        }
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.postUser = (req, res) => {
    User.postUser(req.body, (result) => {
        res.send(result);
    });
};

exports.loginUser = (req, res) => {
    User.loginUser(req.body, (result) => {
        res.send(result);
    });
};
