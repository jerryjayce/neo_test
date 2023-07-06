"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("vehicles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            make: {
                type: Sequelize.STRING
            },
            model: {
                type: Sequelize.STRING
            },
            year_of_manufacture: {
                type: Sequelize.INTEGER
            },
            vin: {
                type: Sequelize.STRING
            },
            license_plate_number: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("vehicles");
    }
};