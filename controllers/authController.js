const createError = require('http-errors');
const User = require('../database/models/User');
const errorResponse = require('../helpers/errorResponse');
const generateJWT = require('../helpers/generateJWT');
const generateToken = require('../helpers/generateToken');

module.exports = {

    /* R E G I S T E R */

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

                //TO DO: enviar el email de confirmacion con el TOKEN


            return res.status(201).json({
                ok: true,
                msg: "Usuario registrado",
                data: userStore
            })
        } catch (error) {
            return errorResponse(res,error, "REGISTER")
        }
    },


/* L O G I N  */

    login: async (req, res) => {

        const {email, password} = req.body;

        try {

            if([email, password].includes('')){
                throw createError(400,'Todos los campos son obligatorios')
            }

            let user = await User.findOne({
                email 
            });

                if(!user){
                    throw createError(403,'Credenciales invalidas | EMAIL')
                }
                if(!user.checked){
                    throw createError(403,'Tu cuenta no ah sido confirmada')
                }
                
                if(!await user.checkedPassword(password)){   
                    throw createError(403,'Credenciales invalidas | PASSWORD')
                    
                } 
                    

            return res.status(200).json({
                ok: true,
                msg: "Usuario logueado.",
                user: {
                    nombre : user.name,
                    email : user.email,
                    token : generateJWT({
                        id : user._id
                    })
                }
            });
        } catch (error) {
            return errorResponse(res,error, "LOGIN")
        }
    },


    /* C H E C K E D */

    checked: async (req, res) => {

        const {token} = req.query 
        try {

            if(!token){
                throw createError(400,'Token no valido')
            };
            
            const user = await User.findOne({
                token
            })
            
            if(!user){
                throw createError(400,'Token no valido')
            };

            user.checked = true;
            user.token = '';

            await user.save()

            return res.status(201).json({
                ok: true,
                msg: "Registrado con exito.",
            });
        } catch (error) {
            return errorResponse(res,error, "CHECKED")
        }
    },


        /* S E N D  T O K E N  */

    sendToken: async (req, res) => {

        const {email} =req.body;

        try {

            let user = await User.findOne({
                email
            })

            if(!user) throw createError(400,'Email incorrecto')

            user.token = generateToken();
            await user.save();

            /* TO DO: Enviar email para reestablecer password  */

            return res.status(200).json({
                ok: true,
                msg: "Se a enviado un email con instrucciones",
            });
        } catch (error) {
            return errorResponse(res,error, "SEND-TOKEN")
        }
    },


            /* V E R I F Y   T O K E N  */

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


               /* C H A N G E   P A S S W O R D  */

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
