// TODO: User 모델 정의

const User = (Sequelize, DataTypes) => {
    const model = Sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
        },
        {
            tableName: 'user',
            freezeTableName: true,
            timestamps: true,
        }
    );

    return model;
};

module.exports = User;
