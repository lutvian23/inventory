const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemCode: String,
    name: String,
    bin: Number,
    racks: Number,
}, {
    timestamps: true,
})

const Item = mongoose.models.item || mongoose.model('item',itemSchema);
module.exports = Item;