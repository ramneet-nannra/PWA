import React from 'react';
import ReactPlayer from 'react-player';

const About = () => {
  return (
    <div
    style={{
              display: 'flex',
              justifyContent: 'Center',
              alignItems: 'Center',
              height: '100vh'
            }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=cmGr0RszHc8&t=95s"
      />
    </div>
  )
}

export default About;
