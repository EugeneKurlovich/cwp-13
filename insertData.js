module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all([
        db.fleets.create({
            name: "Первый машинный парк"
        }),
        db.fleets.create({
            name: "Второй машинный парк"
        }),
        db.vehicles.create({
            name: "Первая машина",
            fleetId: 1
        }),
        db.vehicles.create({
            name: "Вторая машина",
            fleetId: 1
        }),
        db.vehicles.create({
            name: "Третья машина",
            fleetId: 1
        }),
        db.vehicles.create({
            name: "Четвертая машина",
            fleetId: 1
        }),
        db.vehicles.create({
            name: "Пятая машина",
            fleetId: 2
        }),
        db.vehicles.create({
            name: "Шестая машина",
            fleetId: 2
        }),
        db.motions.create({
            latitude: 51.5103,
            longitude: 7.49347,
            time: "2017-11-05T15:26:56.000Z",
            vehicleId: 1
        }),
        db.motions.create({
            latitude: 59.1432,
            longitude: 49.1432,
            time: "2017-11-05T15:56:56.000Z",
            vehicleId: 1
        }),
        db.motions.create({
            latitude: 121.5103,
            longitude: 71.49347,
            time: "2017-11-05T16:04:00.000Z",
            vehicleId: 1
        }),
        db.motions.create({
            latitude: 151.5103,
            longitude: 117.49347,
            time: "2017-11-05T17:11:12.000Z",
            vehicleId: 1
        }),
    ]);
};