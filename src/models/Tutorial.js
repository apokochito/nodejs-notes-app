const { model, Schema } = require('mongoose');

const tutorialSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true // It creates createdAt and updatedAt fields automatically
})

module.exports = model('Tutorial', tutorialSchema);