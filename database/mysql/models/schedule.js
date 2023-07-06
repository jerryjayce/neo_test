"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    schedule.init({
        service: DataTypes.STRING,
        driver_id: DataTypes.INTEGER,
        vehicle_id: DataTypes.INTEGER,
        client_id: DataTypes.INTEGER,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        pick_up_location: DataTypes.STRING,
        drop_off_location: DataTypes.STRING
    }, {
        sequelize,
        modelName: "schedule"
    });
    return schedule;
};