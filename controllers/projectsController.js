module.exports = {
    list: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Lista de proyectos",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "Error! Problemas en Lista de proyectos",
            });
        }
    },

    store: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Proyecto guardado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas para guardar el proyecto.",
            });
        }
    },

    detail: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Detalle de proyecto.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas con el detalle de proyecto.",
            });
        }
    },

    update: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Proyecto actualizado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en la actualizacion de proyecto.",
            });
        }
    },

    remove: async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "Proyecto eliminado.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas en eliminacion de proyecto.",
            });
        }
    },

    addCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "colaborador agregado exitosamente.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas al agregar colaborador.",
            });
        }
    },

    removeCollaborator : async (req, res) => {
        try {
            return res.status(200).json({
                ok: true,
                msg: "colaborador eliminado exitosamente.",
            });
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message || "error! Problemas al eliminar colaborador.",
            });
        }
    },


};
