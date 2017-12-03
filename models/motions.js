module.exports = (Sequelize, sequelize) => {
    return sequelize.define('motions', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        latitude: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        longitude: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
        time: {
            type: Sequelize.DATE,
            allowNull: false
        },
        vehicleId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        getterMethods: {
            latLng: function () {
                return {
                    latitude: this.latitude,
                    longitude: this.longitude
                }
            }
        }
    });
};