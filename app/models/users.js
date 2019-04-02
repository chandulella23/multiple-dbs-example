const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        _id: {
            type : String,
            unique: true
        },

        id: {
            type: Number,
            unique: true
        },
        name: {
            type: String,
            trim: true,
            default: ''
        },
        username: {
            type: String,
            trim: true,
        },
        website: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            default:'defaultPassword'
        },
        phone: {
            type: String,
            trim: true,
            default: ''
        },
        company: {
            bs: {
                type: String,
                trim: true,
                default: ''
            },
            catchPhrase: {
                type: String,
                trim: true,
                default: ''
            },
            name: {
                type: String,
                trim: true,
                default: ''
            },
        },
        address: {
            city: {
                type: String,
                trim: true,
                default: ''
            },
            street: {
                type: String,
                trim: true,
                default: ''
            },
            suite: {
                type: String,
                trim: true,
                default: ''
            },
            zipcode: {
                type: String,
                trim: true,
                default: ''
            },
            geo: {
                lat: {
                    type: String,
                    trim: true,
                    default: ''
                },
                lng: {
                    type: String,
                    trim: true,
                    default: ''
                },
            }
        }
    },
    {
        timestamps: true,
        autoIndex: true
    }
);
module.exports = mongoose.model('users',userSchema)