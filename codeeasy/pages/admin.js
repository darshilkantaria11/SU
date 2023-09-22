import React, { useState } from 'react';
import axios from 'axios';

// ... other imports

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('code', code);
      formData.append('image', image);

      const response = await axios.post('/api/addtempcode', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);

      // Reset form fields after successful submission
      setTitle('');
      setCode('');
      setImage(null);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Upload Data</h1>
      <form onSubmit={handleSubmit} className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="code" className="block text-gray-700 text-sm font-bold mb-2">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-40 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 resize-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadPage;
