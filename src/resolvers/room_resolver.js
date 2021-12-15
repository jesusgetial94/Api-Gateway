const roomsResolver = {
    Query: {
        roomAllDetail: (_, { userId }, { dataSources, userIdToken }) => {
            console.log(typeof (dataSources.roomAPI.getAllRooms()));
            //console.log(JSON.parse(dataSources.roomAPI.getAllRooms()));
            return dataSources.roomAPI.getAllRooms();
        },
        roomById: (_, { roomId }, { dataSources, userIdToken }) => {
            return dataSources.roomAPI.getRoomById(roomId);
        },
        //(userId:Int!, roomId: Int!) Room!
    },
    Mutation: {
        roomCreate: async(_,{ userInput, userId}, { dataSources }) => {
            const roomInput = {
                codigo: userInput.codigo,
                descripcion: userInput.descripcion,
                disponibilidad: userInput.disponibilidad,
                precio: userInput.precio,
            }
            return await dataSources.roomAPI.createRoom(roomInput, userId);
        },
        roomDelete: async(_,{ userId, roomId}, { dataSources}) => {
            return await dataSources.roomAPI.deleteRoom(userId, roomId);
        },
        roomUpdate: async(_,{roomData, userId, roomId}, { dataSources}) => {
            const roomInput = {
                codigo: roomData.codigo,
                descripcion: roomData.descripcion,
                disponibilidad: roomData.disponibilidad,
                precio: roomData.precio,
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
            roomInput2=removeEmptyOrNull(roomInput)
            console.log(roomInput2)
            return await dataSources.roomAPI.updateRoom(userId, roomId, roomInput2);
        },
    }
};
module.exports = roomsResolver;