const express = require('express');
const moongose = require('mongoose');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const  bodyParser = require('body-parser');


const typedefsFile = require('./definitions/docentes.defs');
const resolversFile = require('./resolvers/docente.resolvers');

// mongoose conection
moongose.connect('mongodb://localhost/docentesdb', { useNewUrlParser: true, useUnifiedTopology: true });
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

// Making schema
const schema = new makeExecutableSchema({
    typeDefs: [typeDefs,typedefsFile],
    resolvers: resolversFile
});

// middleware
app.use('/graphql',bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(2500, function () {
    console.log('Servidor Iniciado')
});