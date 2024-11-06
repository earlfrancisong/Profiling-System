const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname: String,
    mname: String,
    lname: String,
    email: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;