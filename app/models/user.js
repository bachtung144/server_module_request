const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    phone: {
        type: String
    },
    password: {
        type: String
    }
})

const user = mongoose.model('UserModel', UserSchema,"User")
module.exports = user;
