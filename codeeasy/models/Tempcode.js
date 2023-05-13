const mongoose = require('mongoose');

const TempcodeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    image: {type: Buffer, require: true}, // Add image field
    code: {type: String, require: true} // Add code field
}, {timestamps: true});

const Tempcode = mongoose.models.User || mongoose.model("Tempcode", TempcodeSchema);
export default Tempcode;
