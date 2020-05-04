const Docentes = require('../models/docentes');
// const docentes = [];
module.exports = {
        Query: {
            async getDocentes(obj,{ page, limit }) {
                const docentes = await Docentes.find();
                return docentes;
            },
            // Metodo para obtener datos individuales
            async getDocente(obj,{ id }) {
                const docente = await Docentes.findById(id);
                return docente;
            }
        },
        Mutation: {
            async addDocente(obj,{ input }) {
                const docente = new Docentes(input);
                await docente.save();
                return docente;
            },
             async updateDocente(obj, {id, input}) {
                const docente = await Docentes.findByIdAndUpdate(id,input);
                return docente;
            },
            async deleteDocente(obj,{ id }) {
                await Docentes.deleteOne({_id : id})
                return {
                    result: `Se ha eliminado el profesor con id ${id}` //template strings
                }
            }
        }
    }
