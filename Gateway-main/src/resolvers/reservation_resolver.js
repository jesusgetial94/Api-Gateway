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
      return await dataSources.reservaAPI.updateReserva(args);
    },
    DeleteReserva: async (root, { username }, { dataSources }) => {
      return await dataSources.reservaAPI.deleteReservation(username);
    }
  }
}

module.exports = reservationResolver;