const express = require('express');
const moongose = require('mongoose');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const  bodyParser = require('body-parser');

const TypeDefsFile = require('./definitions/docentes.defs');

// mongoose conection
moongose.connect('mongodb://localhost/docentesdb', { useNewUrlParser: true, useUnifiedTopology: true });
// express server
const app = express();

// typeDefs
typeDefs = `
type Alert{
    message:String
}

`;

// Making schema
const schema = new makeExecutableSchema({
    typeDefs: [typeDefs,TypeDefsFile],
    resolvers: {

    }
});

// middleware
app.use('/graphql',bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(2500, function () {
    console.log('Servidor Iniciado')
});