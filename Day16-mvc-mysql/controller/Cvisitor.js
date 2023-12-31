const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
    res.render('index');
};

exports.getVisitors = (req, res) => {
    Visitor.getVisitors((result) => {
        console.log('controller >>', result);
        res.render('visitor', { data: result });
    });
};

exports.updateVisitor = (req, res) => {
    Visitor.updateVisitor(req.body, () => {
        res.send({ isUpdated: true });
    });
};

exports.postVisitor = (req, res) => {
    Visitor.postVisitor(req.body, (insertId) => {
        console.log('controller >> ', insertId);
        res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
    });
};

exports.deleteVisitor = (req, res) => {
    const { id } = req.body;
    Visitor.deleteVisitor(id, (result) => {
        res.send(result);
    });
};

exports.getVisitor = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    Visitor.getVisitor(id, (result) => {
        console.log(result);
        res.send(result);
    });
};
