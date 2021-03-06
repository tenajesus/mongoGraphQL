const express = require('express');
const moongose = require('mongoose');

const { ApolloServer } = require('apollo-server-express');
const { merge } = require('lodash');


const typedefsFile = require('./definitions/docentes.defs');
const userdefsFile = require('./definitions/user.def');
const resolversFile = require('./resolvers/docente.resolvers');
const resolversUser = require('./resolvers/users.resolvers');
const authFunc = require('./libs/auth');


// mongoose conection
moongose.connect('mongodb://localhost/docentesdb', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false });
// express server
const app = express();

// typeDefs
typeDefs = `
type Alert{
    message:String
}
type Query{
 algo_: Boolean
}
type Mutation{
    otro_:Boolean

}
`;

// Instanciamos un nuevo servidor
const server = new ApolloServer({
    typeDefs: [typeDefs,typedefsFile,userdefsFile],
    resolvers: merge(resolversFile,resolversUser),
    context: authFunc
});
// middleware graphql
// app.use('/graphql',bodyParser.json(), graphqlExpress({ schema: schema }));
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Pasamos el Middleware con APOLLO
server.applyMiddleware({app:app});


    app.listen(2500, function () {
    console.log('Servidor Iniciado');
});