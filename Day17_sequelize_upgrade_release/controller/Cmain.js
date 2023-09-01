const { Player, Profile, Team } = require('../models');
const { Op } = require('sequelize');

// TODO: 컨트롤러

exports.index = (req, res) => {
    res.render('index');
};

exports.getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.send(players);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.getPlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const player = await Player.findOne({
            where: { player_id: player_id },
        });
        res.send(player);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.postPlayer = async (req, res) => {
    try {
        const { name, age, team_id } = req.body;
        const newPlayer = await Player.create({
            name: name,
            age: age,
            team_id: team_id,
        });
        res.send(newPlayer);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.patchPlayer = async (req, res) => {
    try {
        const { team_id } = req.body;
        const { player_id } = req.params;
        const updatedPlayer = await Player.update({ team_id: team_id }, { where: { player_id: player_id } });
        res.send(updatedPlayer);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.deletePlayer = async (req, res) => {
    try {
        const { player_id } = req.params;
        const isDeleted = await Player.destroy({ where: { player_id: player_id } });
        res.send(isDeleted ? true : false);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.getTeams = async (req, res) => {
    try {
        const { sort, search } = req.query;
        const teams = await Team.findAll({
            attributes: ['team_id', 'name'],
            order: sort === 'name_asc' ? [['name', 'asc']] : undefined,
            where: search
                ? {
                      name: { [Op.like]: `%${search}%` },
                  }
                : undefined,
        });
        res.send(teams);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne(
            { attributes: ['team_id', 'name'] },
            {
                where: { team_id: team_id },
            }
        );
        res.send(team);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};

exports.getTeamPlayers = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findOne({
            where: { team_id: team_id },
            include: [{ model: Player }],
        });
        res.send(team);
    } catch (err) {
        console.error(err);
        res.send('Internal Server Error!!!');
    }
};
