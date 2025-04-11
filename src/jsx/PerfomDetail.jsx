import React from "react";

const PerformDetail = ({ club, leader, songs }) => {
  return (
    <div className="perform-detail">
      <h2>{club}</h2>
      <p>대표 : {leader}</p>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            🎵 {song.title} - {song.singer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformDetail;