const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inoutSchema = new Schema({
    itemCode: String, //hitung per itemCode berapa jumlah barang dengan nama yang sama dalam satu racks
    name: String,
    racks: Number,
    bin: Number,
    location: String,
    rt: Number

},{
    timestamps: true,
});

const Inout = mongoose.models.inout || mongoose.model("inout", inoutSchema); 
module.exports = Inout;
