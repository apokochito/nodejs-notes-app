const {Schema, model} = require('mongoose');
const bcrptjs = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required: true},   
    email: { type: String, required: true},
    password: { type: String, required: true}
}, {
    timestamps: true
})

UserSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrptjs.genSalt(10);
    return await bcrptjs.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrptjs.compare(password, this.password)
}

module.exports = model('User', UserSchema);