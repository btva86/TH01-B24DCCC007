import React, { useState } from 'react';
function Post({ text }) {

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '15px'
    }}>
      <p style={{ fontWeight: 'bold' }}>{text}</p>
      <button onClick={handleLike}>
        👍 {likeCount}
      </button>
      <button onClick={handleDislike} style={{ marginLeft: '10px' }}>
        👎 {dislikeCount}
      </button>
    </div>
  );
}

function App() {
  return ( 
    <div style={{ padding: '20px' }}>
      <h1>Bài 4: Like/Dislike Post</h1>
      {/* Render 3 Post với nội dung khác nhau */}
      <Post text="Học ReactJS có khó không?" />
      <Post text="Props và State là gì?" />
      <Post text="Lập trình web có vui không?" />
    </div>
  );
}

export default App;