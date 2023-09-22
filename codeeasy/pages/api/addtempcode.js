import multer from 'multer';
import Tempcode from '../../models/Tempcode';
import connectDb from '../../middleware/mongoose';

const upload = multer({
  storage: multer.memoryStorage(),
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      upload.single('image')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: 'File upload error' });
        }

        const { title, code } = req.body;

        try {
          if (!title || !code) {
            return res.status(400).json({ error: 'Title and code are required' });
          }

          const u = new Tempcode({ title, code });

          if (req.file) {
            // Convert image to base64
            u.image = req.file.buffer.toString('base64');
          }

          await u.save();

          return res.status(200).json({ success: 'Data saved successfully', data: u });
        } catch (error) {
          return res.status(500).json({ error: 'Could not save the data' });
        }
      });
    } catch (error) {
      return res.status(500).json({ error: 'Server error' });
    }
  } else {
    return res.status(400).json({ error: 'This method is not allowed' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default connectDb(handler);
