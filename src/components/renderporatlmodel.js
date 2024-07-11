import React, { useState } from 'react';
import Portal from './portal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>React Portals Example</h1>
      <button onClick={toggleModal}>
        {isModalOpen ? 'Close Modal' : 'Open Modal'}
      </button>
      {isModalOpen && (
        <Portal>
          <div style={modalStyle}>
            <h2>Modal</h2>
            <button onClick={toggleModal}>Close</button>
          </div>
        </Portal>
      )}
    </div>
  );
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  background: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
};

export default App;
