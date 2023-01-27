const mongoose = require('mongoose');
const {hash, compare} = require('bcryptjs')


const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim :true
    },
    email: {
        type : String,
        required : true,
        trim :true,
        unique : true
    },
    password: {
        type : String,
        required : true,
        trim :true,
    },
    token: {
        type : String,
    },
    checked: {
        type : Boolean,
        default : false,
    },
},{
    timestamps: true
});

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){ /* PARA NO HASHEAR 2 VECES */
        next()
    }

    this.password= await hash(this.password, 10) /* ANTES DE GUARDARLO. LO HASHEA */
});

userSchema.methods.checkedPassword = async function(password){ /* AUTENTICAR */
    return await compare(password, this.password) 
};

module.exports = mongoose.model('User', userSchema)
