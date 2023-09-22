import React, { useState, useEffect } from 'react';
import axios from 'axios';

// ... other imports

// ... other imports

// ... other imports

// ... other imports

const DisplayData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/gettempcode');
          if (Array.isArray(response.data)) {
            setData(response.data);
          } else {
            console.error('Invalid response data:', response.data);
          }
        } catch (error) {
          console.error('Error:', error.response ? error.response.data : error.message);
        }
      };
  
      fetchData();
    }, []);
  
    if (!Array.isArray(data) || data.length === 0) {
      return <div>No data available.</div>;
    }
  
    return (
      <div>
        <h1>Saved Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              <strong>Title:</strong> {item.title}<br />
              <strong>Code:</strong> {item.code}<br />
              {item.image && <img src={`data:${item.image.contentType};base64,${item.image.data.toString('base64')}`} alt="Preview" />}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DisplayData;
  