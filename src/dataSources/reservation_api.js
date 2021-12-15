const { RESTDataSource }    = require('apollo-datasource-rest');
const serverConfig          = require('../server');

class ReservaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.reservation_api_url
  }

  async reservationsApi() {
      return await this.get("/reservaciones");
  }
  
  async ReservationByUsername(username) {
    return await this.get(`/reserva/${username}`);
  }

  async newReserva(body) {
    return await this.post('/reserva', body);
  }

  async updateReserva(data) {
    return await this.patch('/reserva/update', data);
  }

  async deleteReservation(username) {
    return await this.delete(`/reserva/delete/${username}`);
  }

}

module.exports = ReservaAPI; 