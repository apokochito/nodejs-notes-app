const {model, Schema} = require('mongoose');
const bcrypt = require('bcryptjs');

 const userScheme = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }}, {
    timestamps: true // It creates createdAt and updatedAt fields automatically
})

// Encrypt password
userScheme.methods.encryptPass = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

userScheme.methods.matchPass = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model('User', userScheme);