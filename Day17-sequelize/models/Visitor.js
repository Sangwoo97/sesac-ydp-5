// visitor 모델 정의

const Visitor = (Sequelize, DataTypes) => {
    // Sequelize: model/index.js에서 sequelize
    // DataTypes: model/index.js에서 Sequelize
    const model = Sequelize.define(
        'visitor',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT('medium'),
            },
        },
        {
            tableName: 'visitor',
            freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
            timestamps: true, // createdAy, updatedAt 자동 생성
        }
    );

    return model;
};

module.exports = Visitor;
