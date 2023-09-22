import connectDb from "../../middleware/mongoose";
import Tempcode from "../../models/Tempcode";

const handler = async (req, res) => {
  try {
    const tempcodes = await Tempcode.find();

    res.status(200).json(tempcodes);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the data' });
  }
};

export default connectDb(handler);
