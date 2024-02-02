const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const storageSchema = new Schema({
    pallete: String,
    qty: Number,
},{
    timestamps: true,
});

const Storage = mongoose.models.storage || mongoose.model("storage", storageSchema);
module.exports = Storage;

