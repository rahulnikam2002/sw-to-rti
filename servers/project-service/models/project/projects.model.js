const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true
        },
        aboutProject: {
            type: String,
            required: true,
            unique: true
        },
        projectStartedOn: {
            type: String,
            required: true
        },
        projectWillEndOn: {
            type: Number,
            required: true,
            unique: true
        },
        totalInvestment: {
            type: String
        },
        investedTillDate: {
            type: String
        },
        tenderOwner: {
            type: String
        },
        governmentBody: {
            type: String
        },
        projectAddress: {
            type: String
        },
        isStillInWorking: {
            type: Boolean
        },
        reason: {
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("UserModel", UserSchema);
