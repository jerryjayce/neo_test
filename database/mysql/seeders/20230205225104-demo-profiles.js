const Sequelize = require("sequelize");

const { Op } = Sequelize;

const client = [
    {
        id: 1,
        full_name: "Client",
        company: "Jack",
        address: "Lagos Nigeria"
    },
    {
        id: 2,
        full_name: "Client two",
        company: "Jack",
        address: "Lagos Nigeria"
    },
    {
        id: 2,
        full_name: "Client 3",
        company: "Jack",
        address: "Lagos Nigeria"
    },
    {
        id: 2,
        full_name: "Client 4",
        company: "Jack",
        address: "Lagos Nigeria"
    }

];

module.exports = {
    up(queryInterface, DataTypes) {
        return queryInterface.bulkInsert("client", client);
    },

    down(queryInterface) {
        return ;
    }
};
