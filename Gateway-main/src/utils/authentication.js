const { ApolloError }   = require('apollo-server');
const serverConfig      = require('../server');
const fetch             = require('node-fetch');

const authentication    = async ({ req }) => {
    const token = req.headers.authorization || '';
    //token = token.replace("Bearer ", "");
    /*console.log();
    console.log(JSON.stringify({ "token": token.slice(7,token.length) }));
    console.log( `${serverConfig.auth_api_url}/user/verifyToken/`)
    console.log("Token".concat(' ',token));
    */
    if (token == '')
        return { userIdToken: null }
    else {
        try {
            
            let requestOptions = {
                method: 'POST', headers: { "Content-Type": "application/json" },
                body: JSON.stringify({"token": token}), redirect: 'follow'
            };
            let response = await fetch(
                `${serverConfig.auth_api_url}/user/verifyToken/`,
                requestOptions)
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }
            
            return { userIdToken: (await response.json()).UserId };
            /*
            let requestOptions = {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: token.slice(7,token.length) })//, redirect: 'follow'
                
            };
            //let response = await fetch(
            fetch(
                `${serverConfig.auth_api_url}/user/verifyToken/`,
                //requestOptions
                {
                    method: 'post', headers: {
                        'Accept': 'application/json, text/plain, *//*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ "token": token.slice(7,token.length) })//, redirect: 'follow'
                }
            ).then(res => res.json()).then(res => console.log(res));
            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            }
            return { userIdToken: (await response.json()).UserId };
            */
            
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}
module.exports = authentication;
//export default authentication;