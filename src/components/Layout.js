import React from 'react';
import Box from './Box'

function Layout({boxes, onClick}) {
    return (
      <div style={style}>
        {boxes.map((box, i) => (
          <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
      </div>
    );
}
export default Layout;


const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '320px',
    height: '320px',
    margin: '100px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'

  };