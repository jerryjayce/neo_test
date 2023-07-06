"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class vehicle extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    vehicle.init({
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        year_of_manufacture: DataTypes.INTEGER,
        vin: DataTypes.STRING,
        license_plate_number: DataTypes.STRING
    }, {
        sequelize,
        modelName: "vehicle"
    });
    return vehicle;
};