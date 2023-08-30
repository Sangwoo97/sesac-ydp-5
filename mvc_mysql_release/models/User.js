// User 모델 정의

const User = (Sequelize, DataTypes) => {
    // Sequelize: model/index.js에서 sequelize
    // DataTypes: model/index.js에서 Sequelize
    const model = Sequelize.define(
        'user',
        {
            userid: {
                type: DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
        },
        {
            tableName: 'user',
            freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
            timestamps: true, // createdAt, updatedAt 자동 생성
        }
    );

    return model;
};

module.exports = User;
