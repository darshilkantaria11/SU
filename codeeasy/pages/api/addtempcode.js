import Tempcode from "../../models/Tempcode"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == 'POST') {

        const { title, code } = req.body
        let u = new Tempcode({ title, code })


        await u.save()

        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }

}

export default connectDb(handler);
