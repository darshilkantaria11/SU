const mongoose = require('mongoose');

const TempcodeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    code: {type: String, required: true},
}, {timestamps: true});

const Tempcode = mongoose.models.Tempcode || mongoose.model("Tempcode", TempcodeSchema);
export default Tempcode;
 