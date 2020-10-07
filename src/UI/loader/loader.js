import React from 'react';

const Loader = () => (
    <div 
        role="status"
        className="spinner-grow" 
        style={{width: '3rem', height: '3rem'}} 
    >
        <span className="sr-only"></span>
    </div>
);

export default Loader;