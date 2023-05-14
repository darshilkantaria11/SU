import connectDb from "../../middleware/mongoose";
import Tempcode from "../../models/Tempcode";

const handler = async (req, res) =>{
    let tempcode = await Tempcode.find()

    res.status(200).json({ tempcode })
}

export default connectDb(handler);