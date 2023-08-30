// const Visitor = require('../model/Visitor');
const { Visitor } = require('../models'); // ../models/index.js

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = async (req, res) => {
    // Visitor.getVisitors((result) => {
    //     console.log('controller >>', result);
    //     res.render('visitor', { data: result });
    // });

    const result = await Visitor.findAll();
    res.render('visitor', { data: result });
};

exports.updateVisitor = async (req, res) => {
    // Visitor.updateVisitor(req.body, () => {
    //     res.send({ isUpdated: true });
    // });

    const result = await Visitor.update(
        { name: req.body.name, comment: req.body.comment },
        { where: { id: req.body.id } }
    );
    res.send({ isUpdated: true });
};

exports.postVisitor = async (req, res) => {
    // Visitor.postVisitor(req.body, (insertId) => {
    //     console.log('controller >> ', insertId);
    //     res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
    // });
    const { name, comment } = req.body;
    const result = await Visitor.create({
        name,
        comment,
    });
    res.send(result);
};

exports.deleteVisitor = async (req, res) => {
    const { id } = req.body;
    // Visitor.deleteVisitor(id, (result) => {
    //     res.send(result);
    // });
    await Visitor.destroy({ where: { id: id } });
    res.send(true);
};

exports.getVisitor = async (req, res) => {
    const { id } = req.params;
    // console.log(req.params);
    // Visitor.getVisitor(id, (result) => {
    //     console.log(result);
    //     res.send(result);
    // });

    const result = await Visitor.findOne({
        where: { id: id },
    });
    console.log(result);
    res.send(result);
};
