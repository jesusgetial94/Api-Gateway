const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class RoomAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.auth_api_url;
  }
  async createRoom(room, userId) {
    room = new Object(JSON.parse(JSON.stringify(room)));
    return await this.post(`/habitacion/create/${userId}/`, room)
  }
  async getAllRooms() {
    return await this.get('habitacion/detail/')
  }
  async getRoomById(room) {
    return await this.get(`habitacion/detail/${room}/`)
  }
  async deleteRoom(userId, roomId) {
    return await this.get(`habitacion/remove/${userId}/${roomId}/`)
  }
  async updateRoom(userId, roomId, roomInput) {
    return await this.put(`habitacion/update/${userId}/${roomId}/`, roomInput)
  }
}
module.exports = RoomAPI;