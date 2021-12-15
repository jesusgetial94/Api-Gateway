const { RESTDataSource }    = require('apollo-datasource-rest');
const serverConfig          = require('../server');
class ReservaAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.reservation_api_url;
    }
    async getAllReservations(){
        return await this.get('/reservaciones/')
    }
}
module.exports = ReservaAPI;