
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

input UpdateInput{
    nombre:String
    antiguedad:Int
    tipo:String
 }
type Alerta{
    result:String
}

extend type Query{
    getDocentes(page: Int, limit: Int = 3): [Docentes]
    getDocente(id:ID!): Docentes
}

extend type Mutation {
    addDocente(input: DocentesInput) : Docentes
    updateDocente(id:ID!,input:UpdateInput) : Docentes
    deleteDocente(id:ID!): Alerta
}
`;