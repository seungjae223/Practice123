import React from 'react';
import './PerformDetail.css'; // 스타일을 따로 분리하면 좋습니다.

const PerformDetail = ({ club, leader, description, songs }) => {
  return (
    <div className="perform-detail">
      <h2>{club}</h2>
      <p className="leader">대표: {leader}</p>
      <p>{description}</p>
      
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song-item">
            🎵 {song.title} - {song.singer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformDetail;
