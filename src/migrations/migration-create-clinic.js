'use strict';
module.exports = {
     up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('Clinic', {
               // address: DataTypes.STRING,
               // description: DataTypes.TEXT,
               // image: DataTypes.STRING,
               id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
               },
               address: {
                    type: Sequelize.STRING
               },
               description: {
                    type: Sequelize.TEXT
               },
               image: {
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
     down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('Clinic');
     }
};