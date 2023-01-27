module.exports = {
    list: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Lista de Tareas",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas en Lista de Tareas",
            });
        }
    },

    store: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Tareas guardadas.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas para guardar la tarea.",
            });
        }
    },

    detail: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Detalle de la tarea.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas con el detalle de Tarea.",
            });
        }
    },

    update: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Tarea actualizado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en la actualizacion de tarea.",
            });
        }
    },

    remove: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "tarea eliminada.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en eliminacion de la tarea.",
            });
        }
    },

    changeState : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Tarea completada.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en el change State.",
            });
        }
    },


};
