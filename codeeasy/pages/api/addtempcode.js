import connectDb from "../../middleware/mongoose";
import Tempcode from "../../models/Tempcode";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let t = new Tempcode({
                title: req.body[i].title,
                image: req.body[i].image,
                code: req.body[i].code,
            })
            await t.save()
        }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "this method is not allowed" })
    }

}

export default connectDb(handler);