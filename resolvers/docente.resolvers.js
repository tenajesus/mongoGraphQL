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
            updateDocente(obj,{ id, nombre, antiguedad, tipo }) {
                const Index = docentes.findIndex((docente) => id === docente.id);
                const pofe = docentes[Index];
                const newPofe = Object.assign(pofe, { nombre, antiguedad, tipo });
                pofe[Index] = newPofe;
                return newPofe;
            },
            deleteDocente(obj,{ id }) {
                docentes = docentes.filter((docente) => docente.id != id);
                return {
                    result: `Se ha eliminado el profesor con id ${id}` //template strings
                }
            }
        }
    }
