import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { Navbars } from '../Navbars';

const HomePage = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomId}`); // Navigate to RoomPage with the room code
  };

  return (
    <div className="video-home-page">
      <div className='video-navs'> <Navbars/></div>
      <div className="video-form-container">
        <h1 className="video-form-title">Enter Room Code</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            required
            placeholder="Enter Room Code"
            className="video-input-field"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <button type="submit" className="video-submit-btn">Enter Room</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
