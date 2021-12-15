const reservationResolver = {
  Query: {
    
    ReservationByUsername: async (root, { username }, { dataSources }) => {
      // verificación token
      return await dataSources.reservaAPI.ReservationByUsername(username);
    },

    reservations: async (root, args, { dataSources }) => {
      // verificación token
      return await dataSources.reservaAPI.reservationsApi();
    }
  },
  Mutation: {
    newReserva: async (root, body, { dataSources }) => {
      return await dataSources.reservaAPI.newReserva(body);
    },

    updateReserva: async (root, args, { dataSources }) => {
      const reservationInput = {
        username: args.username,
        reserUsurious: args.reserUsurious,
        reserHabitation: args.reserHabitation,
        fetchIngress: args.fetchIngress,
        fetchSaida: args.fetchIngress,
      }
      const removeEmptyOrNull = (obj) => {
          Object.keys(obj).forEach(k => {
              if(obj[k]==undefined){
                  delete obj[k]
              }
              }
    
          );
          return obj;
      }
      reservationInput2=removeEmptyOrNull(reservationInput)
      return await dataSources.reservaAPI.updateReserva(reservationInput2);
    },
    DeleteReserva: async (root, { username }, { dataSources }) => {
      return await dataSources.reservaAPI.deleteReservation(username);
    }
  }
}

module.exports = reservationResolver;