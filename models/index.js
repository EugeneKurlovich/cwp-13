const Fleets = require('./fleets');
const Vehicles = require('./vehicles');
const Motions = require('./motions');
const config = require('../config.json');

module.exports = (Sequelize, config) => {
    const sequelize = new Sequelize(config.db, config.login, config.password, {
        host: config.host,
        dialect: 'mssql',
        logging: false,
        define: {
            timestamps: true,
            paranoid: true
        }
    });
    sequelize.authenticate().then(() => {
        console.log('Connection to database successful');
    }).catch((err) => {
        console.log('Unable to connect to database', err);
    });

    const fleets = Fleets(Sequelize, sequelize);
    const vehicles = Vehicles(Sequelize, sequelize);
    const motions = Motions(Sequelize, sequelize);

    fleets.hasMany(vehicles, {onDelete: 'cascade', hooks: true, truncate: true});
    vehicles.hasMany(motions, {onDelete: 'cascade', hooks: true, truncate: true});

    return {
        fleets,
        vehicles,
        motions,

        sequelize: sequelize,
        Sequelize: Sequelize,
    };
};