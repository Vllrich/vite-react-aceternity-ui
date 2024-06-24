import React from 'react';

const IframeBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '720px',
        zIndex: -1, 
      }}
    >
      <iframe
        title="Hintergrund-Video"
        src="https://hero-animation-lu-web.netlify.app/"
        /* src="https://raymarch-web-demo.netlify.app/" */
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', 
        }}
      />
    </div>
  );
};

export default IframeBackground;


