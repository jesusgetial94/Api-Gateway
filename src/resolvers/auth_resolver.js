const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            console.log(userId);
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
    signUpUser: async(_, { userInput }, { dataSources }) => {
        /*const accountInput = {
            username: userInput.username,
            balance: userInput.balance,
            lastChange: (new Date()).toISOString()
        }
        await dataSources.accountAPI.createAccount(accountInput);*/
        const authInput = {
            username: userInput.username,
            password: userInput.password,
            name: userInput.name,
            identification: userInput.identification,
            phone: userInput.phone,
            email: userInput.email,
        }
        return await dataSources.authAPI.createUser(authInput);
    },
    signUpSuperUser: async(_, { userInput }, { dataSources }) => {
        const authInput = {
            username: userInput.username,
            password: userInput.password,
            name: userInput.name,
            identification: userInput.identification,
            phone: userInput.phone,
            email: userInput.email,
        }
        return await dataSources.authAPI.createSpUser(authInput);
    },
    logIn: (_, { credentials }, { dataSources }) =>
        dataSources.authAPI.authRequest(credentials),
    refreshToken: (_, { refresh }, { dataSources }) =>
        dataSources.authAPI.refreshToken(refresh),
    }
};
module.exports = usersResolver;