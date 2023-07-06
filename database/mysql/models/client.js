"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class client extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    client.init({
        full_name: DataTypes.STRING,
        company: DataTypes.STRING,
        company_address: DataTypes.STRING
    }, {
        sequelize,
        modelName: "client"
    });
    return client;
};