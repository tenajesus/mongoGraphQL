const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = require('../libs/env').secreto;

const userSchema = new mongoose.Schema({

    email: String,
    hashedPassword: {
        type: String
    },
    token: String,
    docentes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profes'
    }]
});

userSchema.virtual('password');
// callback para hashing
userSchema.pre('validate', async function () {
    if (this.password === undefined) return;
    try {
        const hash = await bcrypt.hash(this.password, 10);
        console.log(hash, this.password);
        this.hashedPassword = hash;
    } catch (e) {
        console.warn(e);
        throw e;
    }
});

// Metodo de Login
userSchema.statics.authenticate = async function ({ email, password }) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('Email o contraseña erronea');

    const result = await bcrypt.compare(password, user.hashedPassword);
    if (!result) throw new Error('El usuario es invalido, verifica tus datos');

    // Generar Token
    user.token = jwt.sign({ id: user.id }, secret);
    user.save();
    return user;
}

module.exports = mongoose.model('User', userSchema);