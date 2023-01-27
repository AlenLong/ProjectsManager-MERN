module.exports = {
    register: async (req, res) => {
        try {

            const {name, email, password} = req.body;

            if([name, email, password].includes('')){
                let error = new Error('Todos los campos son obligatorios')
                error.status = 400;
                throw error
            }

            return res.status(201).json({
                ok: true,
                msg: "Usuario registrado",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas en el Registro",
            });
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
