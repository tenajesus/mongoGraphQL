module.exports = {
        Query: {
            getDocentes(obj,{ page, limit }) {
                if (page !== undefined) {
                    return docentes.slice(page * limit, (page + 1) * limit);
                }
                return docentes;
            },
            // Metodo para obtener datos individuales
            getDocente(obj,{ id }) {
                console.log(id);
                return pofe = docentes.find((Docentes) => id == Docentes.id)
            }
        },
        Mutation: {
            addDocente(obj,{ input }) {
                const { nombre, antiguedad, tipo } = input;
                const id = String(docentes.length + 1);
                const pofe = { id, nombre, antiguedad, tipo };
                docentes.push(pofe);
                return pofe;
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
