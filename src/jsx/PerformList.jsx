import React, { useState } from 'react';
import './PerformList.css'; // CSS 파일 추가

const clubs = [
  {
    id: 1,
    club: '무혼',
    leader: '문지원',
    description: '무혼은 어쩌구 동아리로 어쩌구하는 무대를 펼친다.',
    songs: [
      { title: 'Drowning', singer: '최지인' },
      { title: '모르시나요', singer: '문지원' },
      { title: '내게 사랑이 뭐냐고 물어본다면', singer: '황승재, 이재형' },
      { title: '곰 세마리', singer: '최지인' }
    ]
  },
  {
    id: 2,
    club: '하울링',
    leader: '김민재',
    description: '하울링은 어쩌고 저쩌고 하는 동아리입니다.',
    songs: [
      { title: 'Love Dive', singer: '이수연' },
      { title: 'Tomboy', singer: '박지수' }
    ]
  },
  {
    id: 3,
    club: 'NOVA',
    leader: '최지민',
    description: 'NOVA는 어쩌고 저쩌고 하는 동아리입니다.',
    songs: [{ title: 'Butterfly', singer: '김서연' }]
  },
  {
    id: 4,
    club: '발라더',
    leader: '암무개',
    description: '발라더는 아무넝너ㅏㅗㅇ',
    songs: [{ title: '어머나', singer: '아무개' }]
  }
];

const PerformList = () => {
  const [selectedClub, setSelectedClub] = useState(null);

  const handleClubClick = (id) => {
    setSelectedClub(clubs.find(club => club.id === id));
  };

  return (
    <div className="perform-wrap">
      <div className="perform-header">
        <p className="perform-subtitle">한서대학교 &lt;동아리의 밤&gt; 공연을 확인하세요</p>
        <h1 className="perform-title">동아리의 밤에는 <span className="highlight">어떤 공연을 하나요?</span></h1>
      </div>

      <div className="perform-content">
        <div className="club-button-container">
          {clubs.map((club) => (
            <button
              key={club.id}
              className="perform-box"
              onClick={() => handleClubClick(club.id)}
            >
              {club.club}
            </button>
          ))}
        </div>
      </div>

      {selectedClub && (
        <div className="perform-detail">
          <h2>{selectedClub.club}</h2>
          <p className="leader">대표: {selectedClub.leader}</p>
          <p>{selectedClub.description}</p>

          <div className="song-list">
            {selectedClub.songs.map((song, index) => (
              <div key={index} className="song-item">
                🎵 {song.title} - {song.singer}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformList;
