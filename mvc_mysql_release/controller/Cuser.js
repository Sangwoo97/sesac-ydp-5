// TODO: 컨트롤러 코드
// const User = require('../model/User');
const { User } = require('../models');

exports.main = (req, res) => {
    res.render('index');
};

exports.profile = async (req, res) => {
    const { userid } = req.body;
    // User.getUser(userid, (result) => {
    //     res.render('profile', { data: result[0] });
    // });

    const result = await User.findAll({
        where: { userid },
    });
    res.render('profile', { data: result[0] });
};

exports.editUser = async (req, res) => {
    // User.patchUser(req.body, (result) => {
    //     if (result) {
    //         res.send({ edit: true });
    //     }
    // });
    const result = await User.update({ name: req.body.name, pw: req.body.pw }, { where: { userid: req.body.id } });
    if (result) {
        res.send({ edit: true });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.body;
    // User.deleteUser(id, (result) => {
    //     if (result) {
    //         res.send({ delete: true });
    //     }
    // });
    const result = await User.destroy({ where: { userid: id } });
    if (result) {
        res.send({ delete: true });
    }
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.postUser = async (req, res) => {
    // User.postUser(req.body, (result) => {
    //     res.send(result);
    // });

    const { id, name, pw } = req.body;
    const result = await User.create({
        userid: id,
        name,
        pw,
    });
    res.send(result);
};

exports.loginUser = async (req, res) => {
    // User.loginUser(req.body, (result) => {
    //     res.send(result);
    // });
    const { id, pw } = req.body;
    const result = await User.findOne({
        where: { userid: id, pw: pw },
    });
    res.send(result);
};
