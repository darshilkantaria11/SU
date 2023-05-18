import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/addtempcode', {
        title,
        code,
      });

      console.log(response.data);

      // Reset form fields after successful submission
      setTitle('');
      setCode('');
    } catch (error) {
      console.error('Error:', error.response.data);
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
