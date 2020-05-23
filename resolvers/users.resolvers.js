const User = require('../models/user');
const Docente = require('../models/docentes');
module.exports = {
    Query :{
        async getUsers(){
            return await User.find();
        },
        async getUser(obj,{id}){
            return await User.findById(id)
        }
    },
    Mutation:{
        async signUp(obj,{ input }){
            const user = new User(input);
            await user.save();
            return user;
        },
        async logIn(obj,{ input }){
            try{
            const user = User.authenticate(input);
            return user;
            } catch(err){
                console.log(err);
                return null;
            }
        }
    },
    // Resolver Personalizado para subcampos
    User:{
        async docentes(u){
            return await Docente.find({ user: u.id }) ;
        }
    }
}