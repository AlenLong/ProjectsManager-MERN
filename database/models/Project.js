const mongoose = require("mongoose");
const { hash, compare } = require("bcryptjs");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        dataExpire: {
            type: Date,
            default: Date.now(),
        },
        client: {
            type: String,
            required: true,
            trim: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId, /* como las relaciones en SQL  */
            ref: "User",
        },
        collaborators: [
            {
                type: mongoose.Schema.Types.ObjectId, /* como las relaciones en SQL  */
                ref: "User",
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Project", projectSchema);
