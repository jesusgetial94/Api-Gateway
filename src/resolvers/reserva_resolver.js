const { values } = require("lodash");

const reservaResolver = {
    Query: {
        reservationAllDetail: (_, __, { dataSources}) => {
            //var promiseToResolv = dataSources.reservaAPI.getAllReservations(userId);
            
            //response.then(val => console.log(val));
            return dataSources.reservaAPI.getAllReservations();
        },
    }
};
module.exports = reservaResolver;