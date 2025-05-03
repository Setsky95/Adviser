import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./common.css";

const Name = () => {
  const [userName] = useState(localStorage.getItem('userName'));

  const handleLogout = () => {
    localStorage.setItem('userName', "");
    window.location.reload(); // fuerza que Home se recargue
  };

  return (
    <div >
      <div >
        <h1 className='nombre-Name' >{userName}</h1>
        <h2>¿Qué te preocupa?</h2>
      </div>
      <button className="basic-button"
        size="small" onClick={handleLogout}>
        no soy {userName}
      </button>  <Link to="/rev"><button className="basic-button"
        size="small" >
        reviews
      </button></Link>
    
    </div>
  );
};

export default Name;
