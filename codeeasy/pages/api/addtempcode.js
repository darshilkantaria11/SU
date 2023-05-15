import connectDb from "../../middleware/mongoose";
import Tempcode from "../../models/Tempcode";

const handler = async (req, res) => {
    if (req.method == 'POST') {

        const { title, code } = req.body
         let t = new Tempcode({title, code})
       
         await t.save()
         res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDb(handler);