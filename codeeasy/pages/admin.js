import { useState } from 'react';
import React from 'react'

const MyForm = () => {
  const [title, setTitle] = useState('');
  const [htmlCode, setHtmlCode] = useState('');  
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleHtmlCodeChange = (e) => {
    setHtmlCode(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { title, htmlCode };


    let res = await fetch('/api/addtempcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)
    setTitle('')
    setHtmlCode('')
    setSelectedImage(null);




    // Perform your form submission logic here
    // You can access the title, htmlCode, and selectedImage states for further processing
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="htmlCode">
            HTML Code
          </label>
          <textarea
            id="htmlCode"
            name="htmlCode"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
            value={htmlCode}
            onChange={handleHtmlCodeChange}
          ></textarea>

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="mb-2"
            onChange={handleImageChange}
          />
          {selectedImage && (
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="max-w-xs mb-2" />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
