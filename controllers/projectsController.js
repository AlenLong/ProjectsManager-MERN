const createError = require("http-errors");
const Project = require("../database/models/Project");
const errorResponse = require("../helpers/errorResponse");
const ObjectId = require('mongoose').Types.ObjectId



module.exports = {


    list: async (req, res) => {
        try {

            const projects = await Project.find().where('createdBy').equals(req.user)

            return res.status(200).json({
                ok: true,
                msg: "Lista de proyectos",
                projects 
            });
        } catch (error) {
            console.log(error);
            return errorResponse(res, error, "LOGIN");
        }
    },




    store: async (req, res) => {
        try {

            const {name, description, client} = req.body;

            if([name, description, client].includes("") || !name || !description || !client ) 
            throw createError(400,'Todos los campos son obligatorios');

            if(!req.user) throw createError(401,'Error de autenticacion');

            const project = new Project(req.body);

            project.createdBy = req.user._id
            //console.log(project);

            const projectStore = await project.save()

            return res.status(201).json({
                ok: true,
                msg: "Proyecto guardado.",
                project : projectStore
            });
        } catch (error) {
            console.log(error);
            return errorResponse(res, error, "LOGIN");
        }
    },



    detail: async (req, res) => {
        try {

            const {id} = req.params;

            if(!ObjectId.isValid(id)) throw createError(400,'No es un ID Valido')

            const project = await Project.findById(id);

            if(!project)throw createError(404,'Proyecto no encontrado')

            if(req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'No tiene autorizacion')
            return res.status(200).json({
                ok: true,
                msg: "Detalle de proyecto.",
                project
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

            const {id} = req.params;

            if(!ObjectId.isValid(id)) throw createError(400,'No es un ID Valido')

            const project = await Project.findById(id);

            if(!project)throw createError(404,'Proyecto no encontrado')

            if(req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'Usuario no autorizado')

            const {name, description, client, dateExpire} = req.body;

            project.name = name || project.name;
            project.description = description || project.description;
            project.client = client || project.client;
            project.dateExpire = dateExpire || project.dateExpire;

            const projectUpdated = await project.save()

            return res.status(200).json({
                ok: true,
                msg: "Proyecto actualizado.",
                project : projectUpdated
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

            const {id} = req.params;

            if(!ObjectId.isValid(id)) throw createError(400,'No es un ID Valido')

            const project = await Project.findById(id);

            if(!project)throw createError(404,'Proyecto no encontrado')

            if(req.user._id.toString() !== project.createdBy.toString()) throw createError(401, 'Usuario no autorizado')

            await project.deleteOne()

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
