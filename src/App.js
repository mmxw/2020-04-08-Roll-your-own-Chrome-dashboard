import React from 'react';
import { useState } from 'react';
import produce from 'immer';
import './index.css';


function App() {

  const [data, setData] = useState('');

  const handleChange = (e) => {
    const data = e.target.data
    setData(data)  
  };

 


  return (
    <div id="paper">
      <div id="pattern">
        <div id="content">
          <textarea 
            value={data} 
            onChange={handleChange}
            className="textbox" 
            />        
           
          </div>
      </div>

    </div>
  );
}

export default App;
