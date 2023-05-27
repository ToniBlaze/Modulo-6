const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        birth: {
            type: String,
            require: true
        },
        avatar: {
            type: String,
            require: true
        }
    }
)

module.exports = {authorSchema}