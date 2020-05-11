const Docente = require('../models/docentes');
const User = require('../models/user');

// const docentes = [];
module.exports = {
        Query: {
            async getDocentes(obj,{ page, limit }) {
                const docentes = await Docente.find().limit(limit).skip((page - 1) * limit);
                return docentes;
            },
            // Metodo para obtener datos individuales
            async getDocente(obj,{ id }) {
                const docente = await Docente.findById(id);
                return docente;
            }
        },
        Mutation: {
            async addDocente(obj,{ input, user }) {
                // Consultamos el usuario
                const userObj = await User.findById(user);
                const docente = new Docente({...input, user });
                await docente.save();
                // Guardamos el usuario asociandolo a su profesor
                await userObj.docentes.push(docente);
                return docente;
            },
             async updateDocente(obj, {id, input}) {
                const docente = await Docente.findByIdAndUpdate(id,input);
                return docente;
            },
            async deleteDocente(obj,{ id }) {
                await Docente.deleteOne({_id : id})
                return {
                    result: `Se ha eliminado el profesor con id ${id}` //template strings
                }
            }
        }
    }
