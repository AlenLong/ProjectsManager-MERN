const createError = require('http-errors');
const User = require('../database/models/User');
const errorResponse = require('../helpers/errorResponse');
const generateToken = require('../helpers/generateToken');

module.exports = {
    register: async (req, res) => {
        try {

            const {name, email, password} = req.body;

            if([name, email, password].includes('')){
                throw createError(400,'Todos los campos son obligatorios')
            }

                let user = await User.findOne({
                    email 
                });

                
                if(user){
                    throw createError(400,'El email ya se encuentra registrado')
                }
                
                user = new User(req.body)
                user.token = generateToken();

                const userStore = await user.save();

                //TODO: enviar el email de confirmacion


            return res.status(201).json({
                ok: true,
                msg: "Usuario registrado",
                data: userStore
            })
        } catch (error) {
            return errorResponse(res,error, "REGISTER")
        }
    },

    login: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Usuario logueado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en el Login.",
            });
        }
    },

    checked: async (req, res) => {
        try {
            return res.status(201).json({
                ok: true,
                msg: "Usuario checkeado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en el Check.",
            });
        }
    },

    sendToken: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Token enviado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en el envio de Token.",
            });
        }
    },

    verifyToken: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Token verificado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en la verificación del Token.",
            });
        }
    },

    changePassword : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Password actualizada correctamente.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en la contraseña.",
            });
        }
    },



};
