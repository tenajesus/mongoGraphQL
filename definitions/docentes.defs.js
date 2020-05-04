
module.exports = `
type Docentes{
    id: ID!
    nombre: String!
    antiguedad : Int
    tipo: String!
}

input DocentesInput{
   nombre: String!
   antiguedad:Int
   tipo:String!
}
type Alerta{
    result:String
}

extend type Query{
    getDocentes(page: Int, limit: Int = 2): [Docentes]
    getDocente(id:ID!): Docentes
}

extend type Mutation {
    addDocente(input: DocentesInput) : Docentes
    updateDocente(id:ID!,nombre:String!,antiguedad:Int,tipo:String!) : Docentes
    deleteDocente(id:ID!): Alerta
}
`;